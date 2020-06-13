const {computeInitialStructuredEvent} = require("../../../../src/boundsAnalysis/analyze/initialStructuredEvent")

describe("computeInitialStructuredEvent", () => {
    let result
    const analyzedEvent = {
        type: "EDA",
        name: "12.5/58",
        rank: 4,
        position: 43.343455,
    }

    beforeEach(() => {
        result = computeInitialStructuredEvent(analyzedEvent)
    })

    it("initializes the rank related fields to the worst rank (so that there's nowhere to go but up when updating them with data from the analyzed histories", () => {
        expect(result.rankOfBestRankedEventInAnyMemberHistory).toBe(2)
        expect(result.rankOfBestRankedMemberHistory).toBe(2)
    })

    it("strips off the rank that was created in the analyze step, replacing it with the rank measurements that are appropriate for the structured history", () => {
        expect(result.rank).toBeUndefined()
    })

    it("initializes to assume that it is not a member of a history which is possible (if one ever comes across which is possible, then it never goes back to being considered not possible)", () => {
        expect(result.isPossibleHistoryMember).toBeFalsy()
    })

    it("initializes to assume that it is not a member of the best possible history (if one ever comes across which is possible, then it never goes back to being considered not possible)", () => {
        expect(result.isBestPossibleHistoryMember).toBeFalsy()
    })

    it("initializes with an empty list of next events", () => {
        expect(result.nextEvents).toEqual([])
    })

    it("preserves most of the original information from the original event", () => {
        expect(result.type).toBe(analyzedEvent.type)
        expect(result.level).toBe(analyzedEvent.level)
        expect(result.name).toBe(analyzedEvent.name)
        expect(result.position).toBe(analyzedEvent.position)
    })
})
