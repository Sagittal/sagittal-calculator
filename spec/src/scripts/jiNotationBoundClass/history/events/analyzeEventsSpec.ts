import { Abs, Multiplier, Scamon } from "../../../../../../src/general"
import { Cents } from "../../../../../../src/general/music"
import { APOTOME } from "../../../../../../src/sagittal"
import { BoundType, Ina, JiNotationLevel } from "../../../../../../src/sagittal/notations/ji"
import { EXTREME_EDA, HIGH_EDA, ULTRA_EDA } from "../../../../../../src/sagittal/notations/ji/levelEdas"
import { BoundClassHistory } from "../../../../../../src/scripts/jiNotationBoundClass/histories"
import { analyzeBoundClassEvents } from "../../../../../../src/scripts/jiNotationBoundClass/history/events"
import { RANKS } from "../../../../../../src/scripts/jiNotationBoundClass/ranks"
import {
    boundClassEventAnalysisFixture,
    boundClassEventFixture,
} from "../../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("analyzeBoundClassEvents", (): void => {
    it("adds some analysis properties to each event: rank, distance, and exact", (): void => {
        const boundClassHistory: BoundClassHistory = [
            {
                ...boundClassEventFixture,
                boundType: BoundType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevel.HIGH,
                pitch: { monzo: APOTOME.monzo, scaler: [27.5, HIGH_EDA] } as Scamon<{ rational: false }>,
            },
            {
                ...boundClassEventFixture,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevel.ULTRA,
                pitch: { monzo: APOTOME.monzo, scaler: [33.5, ULTRA_EDA] } as Scamon<{ rational: false }>,
            },
            {
                ...boundClassEventFixture,
                boundType: BoundType.COMMA_MEAN,
                jiNotationLevel: JiNotationLevel.EXTREME,
                pitch: { monzo: APOTOME.monzo, scaler: [135.5, EXTREME_EDA] } as Scamon<{ rational: false }>,
            },
        ]
        const actualJiNotationBoundPitch = {
            monzo: APOTOME.monzo,
            scaler: [33.5, ULTRA_EDA],
        } as Scamon<{ rational: false }>

        const actual = analyzeBoundClassEvents(boundClassHistory, actualJiNotationBoundPitch)

        const expected = [
            {
                ...boundClassEventAnalysisFixture,
                boundType: BoundType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevel.HIGH,
                pitch: { monzo: APOTOME.monzo, scaler: [27.5, HIGH_EDA] } as Scamon<{ rational: false }>,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
                exact: false,
                distance: 0.000000 as Abs<Cents>,
                inaDistance: 0 as Multiplier<Ina>,
            },
            {
                ...boundClassEventAnalysisFixture,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevel.ULTRA,
                pitch: { monzo: APOTOME.monzo, scaler: [33.5, ULTRA_EDA] } as Scamon<{ rational: false }>,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                exact: true,
                distance: 0.854931 as Abs<Cents>,
                inaDistance: 0.436170 as Multiplier<Ina>,
            },
            {
                ...boundClassEventAnalysisFixture,
                boundType: BoundType.COMMA_MEAN,
                jiNotationLevel: JiNotationLevel.EXTREME,
                pitch: { monzo: APOTOME.monzo, scaler: [135.5, EXTREME_EDA] } as Scamon<{ rational: false }>,
                rank: RANKS[ BoundType.COMMA_MEAN ],
                exact: false,
                distance: 0.450063 as Abs<Cents>,
                inaDistance: 0.922414 as Multiplier<Ina>,
            },
        ]
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })
})
