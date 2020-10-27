import {Count, Decimal, Rank} from "../../../../../../../src/general"
import {shallowClone} from "../../../../../../../src/general/code"
import {BoundType, JiNotationLevelId, JI_NOTATION_LEVELS} from "../../../../../../../src/sagittal/notations/ji"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../../../../../src/scripts/jiNotationBoundClass/globals"
import {formatJiNotationLevelAnalyses} from "../../../../../../../src/scripts/jiNotationBoundClass/io/terminal/level"
import {RANKS} from "../../../../../../../src/scripts/jiNotationBoundClass/ranks"

describe("formatJiNotationLevelAnalyses", (): void => {
    beforeEach((): void => {
        jiNotationLevelsBestHistoryRanks[JiNotationLevelId.MEDIUM] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 18 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }
        jiNotationLevelsBestHistoryRanks[JiNotationLevelId.HIGH] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 18 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }
        jiNotationLevelsBestHistoryRanks[JiNotationLevelId.ULTRA] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 18 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }
        jiNotationLevelsBestHistoryRanks[JiNotationLevelId.EXTREME] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 18 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }
        jiNotationLevelsBestHistoryRanks[JiNotationLevelId.INSANE] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 18 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.MEDIUM] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 16 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.HIGH] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 16 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.ULTRA] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 16 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.EXTREME] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 16 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.INSANE] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 16 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
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
