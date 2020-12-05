import {Count, Decimal, NEWLINE, Rank} from "@sagittal/general"
import {BoundType, JiNotationLevelId} from "@sagittal/system"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../../../../../src/scripts/jiNotationBoundClass/globals"
import {formatJiNotationLevelAnalysis} from "../../../../../../../src/scripts/jiNotationBoundClass/io/terminal/level/levelAnalysis"
import {RANKS} from "../../../../../../../src/scripts/jiNotationBoundClass/ranks"

describe("formatJiNotationLevelAnalysis", (): void => {
    it("gives an explanation per JI notation level of what JI notation bound classes have what ranks there — both purely within the level, and though all levels up to that point", (): void => {
        const jiNotationLevel = JiNotationLevelId.ULTRA
        jiNotationLevelsBestHistoryRanks[jiNotationLevel] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 18 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 13 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[jiNotationLevel] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 18 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 17 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 15 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }

        const actual = formatJiNotationLevelAnalysis(jiNotationLevel)

        const expected = [
            "Ultra              \there   \tcumulative".underline,
            "ina midpoint       \t 18    \t 18       ".blue,
            "comma mean         \t 23    \t 17       ".cyan,
            "size category bound\t 13    \t 15       ".green,
        ].join(NEWLINE) + NEWLINE
        expect(actual).toBe(expected)
    })
})
