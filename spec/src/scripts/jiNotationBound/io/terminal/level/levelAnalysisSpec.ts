import { Count, NEWLINE } from "../../../../../../../src/general"
import { Rank } from "../../../../../../../src/general/code"
import { IntegerDecimal } from "../../../../../../../src/general/math"
import { BoundType, JiNotationLevel } from "../../../../../../../src/sagittal/notations/ji"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../../../../../src/scripts/jiNotationBound/globals"
import { formatJiNotationLevelAnalysis } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/level/levelAnalysis"
import { RANKS } from "../../../../../../../src/scripts/jiNotationBound/ranks"

describe("formatJiNotationLevelAnalysis", (): void => {
    it("gives an explanation per JI notation level of what JI notation bounds have what ranks there — both purely within the level, and though all levels up to that point", (): void => {
        const jiNotationLevel = JiNotationLevel.ULTRA
        jiNotationLevelsBestHistoryRanks[ jiNotationLevel ] = {
            [ RANKS[ BoundType.INA_MIDPOINT ] ]: 18 as Count<IntegerDecimal & Rank<BoundType>>,
            [ RANKS[ BoundType.COMMA_MEAN ] ]: 23 as Count<IntegerDecimal & Rank<BoundType>>,
            [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: 13 as Count<IntegerDecimal & Rank<BoundType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ] = {
            [ RANKS[ BoundType.INA_MIDPOINT ] ]: 18 as Count<IntegerDecimal & Rank<BoundType>>,
            [ RANKS[ BoundType.COMMA_MEAN ] ]: 17 as Count<IntegerDecimal & Rank<BoundType>>,
            [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: 15 as Count<IntegerDecimal & Rank<BoundType>>,
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
