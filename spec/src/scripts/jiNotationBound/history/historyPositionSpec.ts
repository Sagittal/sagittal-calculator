import { Pitch } from "../../../../../src/general/music"
import { APOTOME } from "../../../../../src/sagittal"
import { EXTREME_EDA, HIGH_EDA, ULTRA_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import { BoundHistory } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeBoundHistoryPosition } from "../../../../../src/scripts/jiNotationBound/history/historyPosition"
import { boundEventFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeBoundHistoryPosition", (): void => {
    it("returns the position of the bound history's final bound event", (): void => {
        const boundHistory: BoundHistory = [
            {
                ...boundEventFixture,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [27.5, HIGH_EDA],
                } as Pitch<{ rational: false }>,    // Not yet...
            },
            {
                ...boundEventFixture,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [33.5, ULTRA_EDA],
                } as Pitch<{ rational: false }>,    // Almost there...
            },
            {
                ...boundEventFixture,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [135.5, EXTREME_EDA],
                } as Pitch<{ rational: false }>,    // Final event
            },
        ]

        const actual = computeBoundHistoryPosition(boundHistory)

        const expected = {
            monzo: APOTOME.monzo,
            scaler: [135.5, EXTREME_EDA],
        } as Pitch<{ rational: false }>
        expect(actual).toEqual(expected)
    })
})
