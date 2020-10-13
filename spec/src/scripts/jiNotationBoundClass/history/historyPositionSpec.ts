import { Scamon } from "../../../../../src/general/math/numeric/scamon"
import { APOTOME } from "../../../../../src/sagittal"
import { EXTREME_EDA, HIGH_EDA, ULTRA_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import { BoundClassHistory } from "../../../../../src/scripts/jiNotationBoundClass/histories"
import { computeBoundClassHistoryPosition } from "../../../../../src/scripts/jiNotationBoundClass/history/historyPosition"
import { boundClassEventFixture } from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeBoundClassHistoryPosition", (): void => {
    it("returns the position of the bound class history's final bound class event", (): void => {
        const boundClassHistory: BoundClassHistory = [
            {
                ...boundClassEventFixture,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [27.5, HIGH_EDA],
                } as Scamon<{ rational: false }>,    // Not yet...
            },
            {
                ...boundClassEventFixture,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [33.5, ULTRA_EDA],
                } as Scamon<{ rational: false }>,    // Almost there...
            },
            {
                ...boundClassEventFixture,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [135.5, EXTREME_EDA],
                } as Scamon<{ rational: false }>,    // Final event
            },
        ]

        const actual = computeBoundClassHistoryPosition(boundClassHistory)

        const expected = {
            monzo: APOTOME.monzo,
            scaler: [135.5, EXTREME_EDA],
        } as Scamon<{ rational: false }>
        expect(actual).toEqual(expected)
    })
})
