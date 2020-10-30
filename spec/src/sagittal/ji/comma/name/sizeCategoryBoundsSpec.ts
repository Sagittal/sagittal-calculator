// tslint:disable comment-format

import {Cents, Decimal, EMPTY_MONZO, HALF_SCALER, Monzo, Scamon} from "../../../../../../src/general"
import {APOTOME, SizeCategoryBound, SIZE_CATEGORY_BOUNDS} from "../../../../../../src/sagittal"
import {computePitchExpectation} from "../../../../../helpers/src/general/music/pitchExpectation"
import {PitchExpectation} from "../../../../../helpers/src/general/music/types"

describe("SIZE_CATEGORY_BOUNDS", (): void => {
    it("the bounds have the correct cents values and such", (): void => {
        const actual = SIZE_CATEGORY_BOUNDS
            .map((sizeCategoryBound: SizeCategoryBound): PitchExpectation => {
                return computePitchExpectation(sizeCategoryBound.pitch)
            })

        expect(actual).toBeCloseToObject([
            {
                // u|n
                pitch: {
                    monzo: EMPTY_MONZO as Monzo<{rational: true}>,
                } as Scamon<{rational: false}>,
                monzo: EMPTY_MONZO as Monzo,
                cents: 0.000000 as Cents,
                decimal: 1.000000 as Decimal,
            },
            {
                // n|s
                pitch: {
                    monzo: [-84, 53] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-42, 26.5] as Monzo,
                cents: 1.807522 as Cents,
                decimal: 1.001044 as Decimal,
            },
            {
                // s|k
                pitch: {
                    monzo: [317, -200] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [158.5, -100] as Monzo,
                cents: 4.499913 as Cents,
                decimal: 1.002602 as Decimal,
            },
            {
                // k|C
                pitch: {
                    monzo: [-19, 12] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-9.5, 6] as Monzo,
                cents: 11.730005 as Cents,
                decimal: 1.006798 as Decimal,
            },
            {
                // C|S
                pitch: {
                    monzo: [27, -17] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [13.5, -8.5] as Monzo,
                cents: 33.382492 as Cents,
                decimal: 1.019469 as Decimal,
            },
            {
                // S|M
                pitch: {
                    monzo: [8, -5] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [4, -2.5] as Monzo,
                cents: 45.112497 as Cents,
                decimal: 1.026400 as Decimal,
            },
            {
                // M|L
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-5.5, 3.5] as Monzo,
                cents: 56.842503 as Cents,
                decimal: 1.033378 as Decimal,
            },
            {
                // L|SS
                pitch: {
                    monzo: [-30, 19] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-15, 9.5] as Monzo,
                cents: 68.572508 as Cents,
                decimal: 1.040403 as Decimal,
            },
            {
                // SS|MS
                pitch: {
                    monzo: [-49, 31] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-24.5, 15.5] as Monzo,
                cents: 80.302513 as Cents,
                decimal: 1.047477 as Decimal,
            },
            {
                // MS|LS
                pitch: {
                    monzo: [-3, 2] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-1.5, 1] as Monzo,
                cents: 101.955000 as Cents,
                decimal: 1.060660 as Decimal,
            },
            {
                // LS|A
                pitch: {
                    monzo: [62, -39] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [31, -19.5] as Monzo,
                cents: 111.877483 as Cents,
                decimal: 1.066756 as Decimal,
            },
            {
                // A|s+A
                pitch: {
                    monzo: [-106, 67] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-53, 33.5] as Monzo,
                cents: 115.492528 as Cents,
                decimal: 1.068986 as Decimal,
            },
            {
                // s+A|k+A
                pitch: {
                    monzo: [295, -186] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [147.5, -93] as Monzo,
                cents: 118.184919 as Cents,
                decimal: 1.070650 as Decimal,
            },
            {
                // k+A|C+A
                pitch: {
                    monzo: [-41, 26] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-20.5, 13] as Monzo,
                cents: 125.415011 as Cents,
                decimal: 1.075131 as Decimal,
            },
            {
                // C+A|S+A
                pitch: {
                    monzo: [5, -3] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [2.5, -1.5] as Monzo,
                cents: 147.067498 as Cents,
                decimal: 1.088662 as Decimal,
            },
            {
                // S+A|M+A
                pitch: {
                    monzo: [-14, 9] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-7, 4.5] as Monzo,
                cents: 158.797503 as Cents,
                decimal: 1.096063 as Decimal,
            },
            {
                // M+A|L+A
                pitch: {
                    monzo: [-33, 21] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-16.5, 10.5] as Monzo,
                cents: 170.527509 as Cents,
                decimal: 1.103515 as Decimal,
            },
            {
                // L+A|SS+A
                pitch: {
                    monzo: [-52, 33] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-26, 16.5] as Monzo,
                cents: 182.257514 as Cents,
                decimal: 1.111017 as Decimal,
            },
            {
                // SS+A|MS+A
                pitch: {
                    monzo: [-71, 45] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-35.5, 22.5] as Monzo,
                cents: 193.987519 as Cents,
                decimal: 1.118570 as Decimal,
            },
            {
                // MS+A|LS+A
                pitch: {
                    monzo: [-25, 16] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-12.5, 8] as Monzo,
                cents: 215.640006 as Cents,
                decimal: 1.132648 as Decimal,
            },
            {
                // LS+A|A+A
                pitch: {
                    monzo: [40, -25] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [20, -12.5] as Monzo,
                cents: 225.562489 as Cents,
                decimal: 1.139158 as Decimal,
            },
            {
                // A+A|
                pitch: {
                    monzo: [-44, 28] as Monzo<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Scamon<{rational: false}>,
                monzo: [-22, 14] as Monzo,
                cents: 227.370012 as Cents,
                decimal: 1.140348 as Decimal,
            },
        ])
    })
})
