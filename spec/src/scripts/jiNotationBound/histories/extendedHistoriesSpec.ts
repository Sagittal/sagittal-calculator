import { Cents, Decimal, Name } from "../../../../../src/general"
import { Bound, BoundType, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { BoundEvent, BoundHistory } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeExtendedHistories } from "../../../../../src/scripts/jiNotationBound/histories/extendedHistories"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeExtendedHistories", (): void => {
    let boundHistory: BoundHistory

    let passedInBoundEvent: BoundEvent = {
        jiNotationLevel: JiNotationLevel.HIGH,
        boundType: BoundType.INA_MIDPOINT,
        name: "16.5°47" as Name<Bound>,
        cents: 45.45 as Cents,
    }
    beforeEach((): void => {
        boundHistory = [
            passedInBoundEvent,
        ]
    })

    it("returns an array with potentially many elements: for each bound position of any bound type, a new bound history which is like the passed-in history extended with a new event of snapping to that position, and its rank updated if necessary", (): void => {
        const actualJiNotationBoundDecimal = 1.02657094474 as Decimal   // 45.4¢

        const actual = computeExtendedHistories(boundHistory, JiNotationLevel.ULTRA, {
            ...jiNotationBoundFixture,
            decimal: actualJiNotationBoundDecimal,
            jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME],
        })

        const expected: BoundHistory[] = [
            [
                passedInBoundEvent,
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "23.5°58" as Name<Bound>,
                    cents: 46.062028 as Cents,
                },
            ],
            [
                passedInBoundEvent,
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "'//| )//|" as Name<Bound>,
                    cents: 45.681795 as Cents,
                },
            ],
            [
                passedInBoundEvent,
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "S|M" as Name<Bound>,
                    cents: 45.112498 as Cents,
                },
            ],
        ]
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })
})
