import { Cents, Integer, Name, Pitch, Rank } from "../../../../../src/general"
import { EventAnalysis } from "../../../../../src/scripts/bound/analyzeHistory"
import { computeInitialEventConsolidation } from "../../../../../src/scripts/bound/consolidateHistories/initialEventConsolidation"
import { EventConsolidation } from "../../../../../src/scripts/bound/consolidateHistories/types"
import { EventType, HistoricalEvent } from "../../../../../src/scripts/bound/histories"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeInitialEventConsolidation", (): void => {
    let actual: EventConsolidation
    const eventAnalysis: EventAnalysis = {
        ...eventAnalysisFixture,
        type: EventType.INA,
        name: "12.5°58" as Name<Pitch>,
        rank: 4 as Integer & Rank<EventAnalysis>,
        cents: 43.343455 as Cents,
    }

    beforeEach((): void => {
        actual = computeInitialEventConsolidation(eventAnalysis)
    })

    it("initializes the rank related fields to the worst rank (so that there's nowhere to go but up when updating them with data from the history analyses", (): void => {
        expect(actual.rankOfBestRankedEventInAnyMemberHistory).toBe(2 as Integer & Rank<EventAnalysis>)
        expect(actual.rankOfBestRankedMemberHistory).toBe(2 as Integer & Rank<EventAnalysis>)
    })

    it("strips off the rank that was created in the analyze step, replacing it with the rank measurements that are appropriate for the history consolidation", (): void => {
        expect((actual as HistoricalEvent as EventAnalysis).rank).toBeUndefined()
    })

    it("initializes to assume that it is not a member of a history which is possible (if one ever comes across which is possible, then it never goes back to being considered not possible)", (): void => {
        expect(actual.isPossibleHistoryMember).toBeFalsy()
    })

    it("initializes to assume that it is not a member of the best possible history (if one ever comes across which is possible, then it never goes back to being considered not possible)", (): void => {
        expect(actual.isBestPossibleHistoryMember).toBeFalsy()
    })

    it("initializes with an empty list of next events", (): void => {
        expect(actual.nextEvents).toEqual([])
    })

    it("preserves most of the original information from the original event", (): void => {
        expect(actual.type).toBe(eventAnalysis.type)
        expect(actual.level).toBe(eventAnalysis.level)
        expect(actual.name).toBe(eventAnalysis.name)
        expect(actual.cents).toBe(eventAnalysis.cents)
    })
})
