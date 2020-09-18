import { Count, Integer, Rank } from "../../../../../../../src/general"
import { Maybe, shallowClone } from "../../../../../../../src/general/code"
import { JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../../../src/sagittal/notations/ji"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../../../../../src/scripts/jiNotationBound/bound"
import { EventAnalysis } from "../../../../../../../src/scripts/jiNotationBound/history/events"
import { formatJiNotationLevelAnalyses } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/level"

describe("formatJiNotationLevelAnalyses", (): void => {
    beforeEach((): void => {
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ] = {
            0: 18, 1: 23, 2: 1
        } as Record<number, number> as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.HIGH ] = {
            0: 18, 1: 23, 2: 1
        } as Record<number, number> as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.ULTRA ] = {
            0: 18, 1: 23, 2: 1
        } as Record<number, number> as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.EXTREME ] = {
            0: 18, 1: 23, 2: 1
        } as Record<number, number> as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.INSANE ] = {
            0: 18, 1: 23, 2: 1
        } as Record<number, number> as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.MEDIUM ] = {
            0: 16, 1: 23, 2: 1
        } as Record<number, number> as Record<number, Count<Integer & Rank<EventAnalysis>>>
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.HIGH ] = {
            0: 16, 1: 23, 2: 1
        } as Record<number, number> as Record<number, Count<Integer & Rank<EventAnalysis>>>
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.ULTRA ] = {
            0: 16, 1: 23, 2: 1
        } as Record<number, number> as Record<number, Count<Integer & Rank<EventAnalysis>>>
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.EXTREME ] = {
            0: 16, 1: 23, 2: 1
        } as Record<number, number> as Record<number, Count<Integer & Rank<EventAnalysis>>>
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.INSANE ] = {
            0: 16, 1: 23, 2: 1
        } as Record<number, number> as Record<number, Count<Integer & Rank<EventAnalysis>>>
    })

    it("does not mutate JI_NOTATION_LEVELS", (): void => {
        const formerLevels = shallowClone(JI_NOTATION_LEVELS)

        formatJiNotationLevelAnalyses()

        expect(formerLevels).toEqual(JI_NOTATION_LEVELS)
    })

    it("prints the JI levels in order from highest to lowest", (): void => {
        const actual = formatJiNotationLevelAnalyses()

        expect(actual.indexOf("Insane")).toBeLessThan(actual.indexOf("Extreme"))
        expect(actual.indexOf("Extreme")).toBeLessThan(actual.indexOf("Ultra"))
        expect(actual.indexOf("Ultra")).toBeLessThan(actual.indexOf("High"))
        expect(actual.indexOf("High")).toBeLessThan(actual.indexOf("Medium"))
    })
})
