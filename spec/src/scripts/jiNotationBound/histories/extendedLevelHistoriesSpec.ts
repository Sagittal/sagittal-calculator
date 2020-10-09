import { Name, Pitch, Quotient, SQRT_SCALER } from "../../../../../src/general"
import { APOTOME } from "../../../../../src/sagittal"
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
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [1.5, 21] as Quotient,
            } as Pitch<{ rational: false }>,
        }
        const historyPriorEventB: BoundEvent = {
            jiNotationLevel: JiNotationLevel.MEDIUM,
            boundType: BoundType.COMMA_MEAN,
            name: "|( )|(" as Name<Bound>,
            pitch: {
                monzo: [],
                scaler: SQRT_SCALER,
            } as Pitch<{ rational: false }>,
        }
        const histories: BoundHistory[] = [
            [historyPriorEventA],
            [historyPriorEventB],
        ]
        const jiNotationLevel = JiNotationLevel.HIGH
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            // TODO: it might be nice if that 233 could be EXTREME_EDA, but it can't because it's type Ed
            //  Which is a shame because that's the main purpose for the scaler, so perhaps it should support having
            //  A quotient whose n & d are Step and Ed types?
            pitch: { monzo: APOTOME.monzo, scaler: [16.5, 233] as Quotient } as Pitch<{ rational: false }>,
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
                    pitch: { monzo: APOTOME.monzo, scaler: [2.5, 47] } as Pitch<{ rational: false }>,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<Bound>,
                    pitch: { monzo: APOTOME.monzo, scaler: [3.5, 47] } as Pitch<{ rational: false }>,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<Bound>,
                    pitch: { monzo: [  3, 1, 1, -1, 0, 0, -1], scaler: SQRT_SCALER } as Pitch<{ rational: false }>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<Bound>,
                    pitch: { monzo: APOTOME.monzo, scaler: [2.5, 47] } as Pitch<{ rational: false }>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<Bound>,
                    pitch: { monzo: APOTOME.monzo, scaler: [3.5, 47] } as Pitch<{ rational: false }>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<Bound>,
                    pitch: { monzo: [  3, 1, 1, -1, 0, 0, -1], scaler: SQRT_SCALER } as Pitch<{ rational: false }>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })
})
