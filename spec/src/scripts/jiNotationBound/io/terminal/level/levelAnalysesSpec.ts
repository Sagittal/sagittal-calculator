import { Count, Integer, Rank } from "../../../../../../../src/general"
import { shallowClone } from "../../../../../../../src/general/code"
import { JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../../../src/sagittal/notations/ji"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../../../../../src/scripts/jiNotationBound/globals"
import { EventType } from "../../../../../../../src/scripts/jiNotationBound/histories"
import { formatJiNotationLevelAnalyses } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/level"
import { RANKS } from "../../../../../../../src/scripts/jiNotationBound/ranks"

describe("formatJiNotationLevelAnalyses", (): void => {
    beforeEach((): void => {
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 18 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 23 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 1 as Count<Integer & Rank<EventType>>,
        }
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.HIGH ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 18 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 23 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 1 as Count<Integer & Rank<EventType>>,
        }
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.ULTRA ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 18 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 23 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 1 as Count<Integer & Rank<EventType>>,
        }
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.EXTREME ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 18 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 23 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 1 as Count<Integer & Rank<EventType>>,
        }
        jiNotationLevelsBestHistoryRanks[ JiNotationLevel.INSANE ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 18 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 23 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 1 as Count<Integer & Rank<EventType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.MEDIUM ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 16 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 23 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 1 as Count<Integer & Rank<EventType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.HIGH ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 16 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 23 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 1 as Count<Integer & Rank<EventType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.ULTRA ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 16 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 23 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 1 as Count<Integer & Rank<EventType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.EXTREME ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 16 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 23 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 1 as Count<Integer & Rank<EventType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.INSANE ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 16 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 23 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 1 as Count<Integer & Rank<EventType>>,
        }
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
