import { shallowClone } from "../../../../../../../src/general/code"
import { JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../../../src/sagittal/notations/ji"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../../../../../src/scripts/jiNotationBound/bound"
import { formatJiNotationLevelAnalyses } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/level"

describe("formatJiNotationLevelAnalyses", (): void => {
    beforeEach((): void => {
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ] = { 1: 18, 2: 23, 3: 1, 7: 13 }
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.HIGH ] = { 1: 18, 2: 23, 3: 1, 7: 13 }
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.ULTRA ] = { 1: 18, 2: 23, 3: 1, 7: 13 }
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.EXTREME ] = { 1: 18, 2: 23, 3: 1, 7: 13 }
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.INSANE ] = { 1: 18, 2: 23, 3: 1, 7: 13 }
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.MEDIUM ] = { 1: 16, 2: 23, 3: 1, 7: 13 }
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.HIGH ] = { 1: 16, 2: 23, 3: 1, 7: 13 }
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.ULTRA ] = { 1: 16, 2: 23, 3: 1, 7: 13 }
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.EXTREME ] = { 1: 16, 2: 23, 3: 1, 7: 13 }
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.INSANE ] = { 1: 16, 2: 23, 3: 1, 7: 13 }
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
