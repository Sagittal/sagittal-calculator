import { Cents, computePitchFromDecimal, Decimal, Name } from "../../../../../src/general"
import { Bound, BoundType, JiNotationBound, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { BoundEvent, BoundHistory } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeExtendedJiNotationLevelBoundHistories } from "../../../../../src/scripts/jiNotationBound/histories/extendedLevelHistories"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeExtendedJiNotationLevelBoundHistories", (): void => {
    it("given the histories for a bound up to the current JI notation level, returns the histories extended for all possible events at this JI notation level", (): void => {
        const historyPriorEventA: BoundEvent = {
            jiNotationLevel: JiNotationLevel.MEDIUM,
            boundType: BoundType.INA_MIDPOINT,
            name: "1.5°21" as Name<Bound>,
            cents: 8.120357 as Cents,
        }
        const historyPriorEventB: BoundEvent = {
            jiNotationLevel: JiNotationLevel.MEDIUM,
            boundType: BoundType.COMMA_MEAN,
            name: "|( )|(" as Name<Bound>,
            cents: 7.722881 as Cents,
        }
        const histories: BoundHistory[] = [
            [historyPriorEventA],
            [historyPriorEventB],
        ]
        const jiNotationLevel = JiNotationLevel.HIGH
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            pitch: computePitchFromDecimal(1.00468970588 as Decimal<{ rational: false }>), // 8.100000¢
            jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA],
        }

        const actual = computeExtendedJiNotationLevelBoundHistories(histories, jiNotationLevel, jiNotationBound)

        const expected = [
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<Bound>,
                    cents: 6.047074 as Cents,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<Bound>,
                    cents: 8.465904 as Cents,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<Bound>,
                    cents: 7.243699 as Cents,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<Bound>,
                    cents: 6.047074 as Cents,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<Bound>,
                    cents: 8.465904 as Cents,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<Bound>,
                    cents: 7.243699 as Cents,
                },
            ],
        ]
        expect(actual).toBeCloseToObject(expected)
    })
})
