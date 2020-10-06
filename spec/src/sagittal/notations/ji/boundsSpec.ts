import {
    Cents,
    computeDecimalFromPitch,
    computePitchFromCents,
    computePitchFromDecimal,
    Decimal,
    Id,
    isCloseTo,
    Monzo,
    Pitch,
    pitchIsHigher,
    Quotient,
} from "../../../../../src/general"
import { APOTOME, JiNotationBound, JI_NOTATION_BOUNDS, TINA } from "../../../../../src/sagittal"
import { analyzePitch } from "../../../../helpers/src/general/music/analyzePitch"
import { PitchAnalysis } from "../../../../helpers/src/general/music/types"

describe("JI_NOTATION_BOUNDS", (): void => {
    it("almost every bound in the JI notation is snapped to a half-tina", (): void => {
        let currentHalfTina = 0.5

        const exceptionalJiNotationBoundIds: Array<Id<JiNotationBound>> = [
            49,     // Comma mean
            52,     // Comma mean
            74,     // Comma mean
            81,     // Comma mean
            96,     // Size category bound
            109,    // Comma mean
            118,    // Comma mean
            126,    // Comma mean
            135,    // Comma mean
            148,    // Size category bound
        ] as Array<Id<JiNotationBound>>

        JI_NOTATION_BOUNDS.forEach((jiNotationBound: JiNotationBound): void => {
            while (true) {
                const currentHalfTinaCents: Cents = TINA * currentHalfTina as Cents
                const currentHalfTinaPitch = computeDecimalFromPitch(computePitchFromCents(currentHalfTinaCents))

                if (isCloseTo(currentHalfTinaPitch, computeDecimalFromPitch(jiNotationBound.pitch))) {
                    break
                } else if (
                    pitchIsHigher(computePitchFromDecimal(currentHalfTinaPitch), jiNotationBound.pitch)
                ) {
                    if (!exceptionalJiNotationBoundIds.includes(jiNotationBound.id)) {
                        fail(`JI notation bound id ${jiNotationBound.id} was not close to a half-tina, nor registered as an exceptional bound.`)
                    }

                    break
                }

                currentHalfTina = currentHalfTina + 1
            }
        })
    })

    it("the bounds are in the correct positions", (): void => {
        const actual = JI_NOTATION_BOUNDS.map((jiNotationBound: JiNotationBound): PitchAnalysis => {
            return analyzePitch(jiNotationBound.pitch)
        })

        const expected = [
            {
                decimal: 1.000121 as Decimal,
                cents: 0.210788 as Cents,
                monzo: [
                    -0.0203955500618047,
                    0.012978986402966627,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [1.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.000446 as Decimal,
                cents: 0.772889 as Cents,
                monzo: [
                    -0.07478368355995055,
                    0.04758961681087762,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [5.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.000690 as Decimal,
                cents: 1.194465 as Cents,
                monzo: [
                    -0.11557478368355996,
                    0.07354758961681088,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [8.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.001015 as Decimal,
                cents: 1.756566 as Cents,
                monzo: [
                    -0.1699629171817058,
                    0.10815822002472188,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [12.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.001258 as Decimal,
                cents: 2.178142 as Cents,
                monzo: [
                    -0.21075401730531518,
                    0.13411619283065512,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [15.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.001584 as Decimal,
                cents: 2.740244 as Cents,
                monzo: [
                    -0.26514215080346104,
                    0.16872682323856614,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [19.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.001828 as Decimal,
                cents: 3.161820 as Cents,
                monzo: [
                    -0.30593325092707047,
                    0.1946847960444994,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [22.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.002153 as Decimal,
                cents: 3.723921 as Cents,
                monzo: [
                    -0.36032138442521633,
                    0.2292954264524104,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [26.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.002397 as Decimal,
                cents: 4.145497 as Cents,
                monzo: [
                    -0.40111248454882575,
                    0.25525339925834367,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [29.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.002641 as Decimal,
                cents: 4.567073 as Cents,
                monzo: [
                    -0.4419035846724351,
                    0.2812113720642769,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [32.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.002967 as Decimal,
                cents: 5.129175 as Cents,
                monzo: [
                    -0.49629171817058093,
                    0.3158220024721879,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [36.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.003211 as Decimal,
                cents: 5.550751 as Cents,
                monzo: [
                    -0.5370828182941904,
                    0.34177997527812115,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [39.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.003537 as Decimal,
                cents: 6.112852 as Cents,
                monzo: [
                    -0.5914709517923362,
                    0.37639060568603216,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [43.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.003781 as Decimal,
                cents: 6.534428 as Cents,
                monzo: [
                    -0.6322620519159456,
                    0.40234857849196537,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [46.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.004107 as Decimal,
                cents: 7.096530 as Cents,
                monzo: [
                    -0.6866501854140914,
                    0.4369592088998764,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [50.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.004352 as Decimal,
                cents: 7.518106 as Cents,
                monzo: [
                    -0.7274412855377009,
                    0.46291718170580964,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [53.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.004678 as Decimal,
                cents: 8.080207 as Cents,
                monzo: [
                    -0.7818294190358467,
                    0.49752781211372066,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [57.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.004922 as Decimal,
                cents: 8.501783 as Cents,
                monzo: [
                    -0.8226205191594562,
                    0.5234857849196539,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [60.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.005249 as Decimal,
                cents: 9.063884 as Cents,
                monzo: [
                    -0.877008652657602,
                    0.5580964153275649,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [64.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.005494 as Decimal,
                cents: 9.485460 as Cents,
                monzo: [
                    -0.9177997527812113,
                    0.5840543881334981,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [67.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.005820 as Decimal,
                cents: 10.047562 as Cents,
                monzo: [
                    -0.9721878862793573,
                    0.6186650185414092,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [71.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.006065 as Decimal,
                cents: 10.469138 as Cents,
                monzo: [
                    -1.0129789864029666,
                    0.6446229913473424,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [74.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.006392 as Decimal,
                cents: 11.031239 as Cents,
                monzo: [
                    -1.0673671199011125,
                    0.6792336217552534,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [78.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.006637 as Decimal,
                cents: 11.452815 as Cents,
                monzo: [
                    -1.108158220024722,
                    0.7051915945611866,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [81.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.006964 as Decimal,
                cents: 12.014917 as Cents,
                monzo: [
                    -1.1625463535228677,
                    0.7398022249690976,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [85.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.007209 as Decimal,
                cents: 12.436493 as Cents,
                monzo: [
                    -1.2033374536464772,
                    0.7657601977750309,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [88.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.007536 as Decimal,
                cents: 12.998594 as Cents,
                monzo: [
                    -1.257725587144623,
                    0.8003708281829419,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [92.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.007781 as Decimal,
                cents: 13.420170 as Cents,
                monzo: [
                    -1.2985166872682323,
                    0.8263288009888751,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [95.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.008027 as Decimal,
                cents: 13.841746 as Cents,
                monzo: [
                    -1.3393077873918418,
                    0.8522867737948084,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [98.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.008354 as Decimal,
                cents: 14.403848 as Cents,
                monzo: [
                    -1.3936959208899877,
                    0.8868974042027195,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [102.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.008600 as Decimal,
                cents: 14.825424 as Cents,
                monzo: [
                    -1.434487021013597,
                    0.9128553770086526,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [105.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.008927 as Decimal,
                cents: 15.387525 as Cents,
                monzo: [
                    -1.4888751545117431,
                    0.9474660074165637,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [109.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.009173 as Decimal,
                cents: 15.809101 as Cents,
                monzo: [
                    -1.529666254635352,
                    0.9734239802224969,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [112.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.009501 as Decimal,
                cents: 16.371202 as Cents,
                monzo: [
                    -1.584054388133498,
                    1.008034610630408,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [116.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.009747 as Decimal,
                cents: 16.792779 as Cents,
                monzo: [
                    -1.6248454882571075,
                    1.033992583436341,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [119.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.010074 as Decimal,
                cents: 17.354880 as Cents,
                monzo: [
                    -1.6792336217552533,
                    1.068603213844252,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [123.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.010320 as Decimal,
                cents: 17.776456 as Cents,
                monzo: [
                    -1.7200247218788627,
                    1.0945611866501854,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [126.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.010649 as Decimal,
                cents: 18.338557 as Cents,
                monzo: [
                    -1.7744128553770087,
                    1.1291718170580964,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [130.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.010895 as Decimal,
                cents: 18.760133 as Cents,
                monzo: [
                    -1.815203955500618,
                    1.1551297898640296,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [133.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.011223 as Decimal,
                cents: 19.322235 as Cents,
                monzo: [
                    -1.8695920889987638,
                    1.1897404202719406,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [137.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.011469 as Decimal,
                cents: 19.743811 as Cents,
                monzo: [
                    -1.9103831891223733,
                    1.215698393077874,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [140.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.011798 as Decimal,
                cents: 20.305912 as Cents,
                monzo: [
                    -1.9647713226205192,
                    1.250309023485785,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [144.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.012044 as Decimal,
                cents: 20.727488 as Cents,
                monzo: [
                    -2.0055624227441284,
                    1.2762669962917181,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [147.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.012373 as Decimal,
                cents: 21.289590 as Cents,
                monzo: [
                    -2.0599505562422746,
                    1.3108776266996292,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [151.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.012619 as Decimal,
                cents: 21.711166 as Cents,
                monzo: [
                    -2.100741656365884,
                    1.3368355995055625,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [154.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.012866 as Decimal,
                cents: 22.132742 as Cents,
                monzo: [
                    -2.141532756489493,
                    1.3627935723114957,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [157.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.013195 as Decimal,
                cents: 22.694843 as Cents,
                monzo: [
                    -2.1959208899876392,
                    1.3974042027194067,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [161.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.013442 as Decimal,
                cents: 23.116419 as Cents,
                monzo: [
                    -2.236711990111248,
                    1.4233621755253398,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [164.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.013771 as Decimal,
                cents: 23.678521 as Cents,
                monzo: [
                    -2.291100123609394,
                    1.4579728059332508,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [168.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.013933 as Decimal,
                cents: 23.955448 as Cents,
                monzo: [-8, 0, 1.5, 1, 0.5] as Monzo,
                pitch: {
                    monzo: [-16, 0, 3, 2, 1] as Monzo<{ rational: true }>,
                    scaler: [1, 2] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.014018 as Decimal,
                cents: 24.100097 as Cents,
                monzo: [
                    -2.331891223733004,
                    1.4839307787391842,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [171.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.014347 as Decimal,
                cents: 24.662198 as Cents,
                monzo: [
                    -2.3862793572311496,
                    1.5185414091470952,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [175.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.014478 as Decimal,
                cents: 24.885981 as Cents,
                monzo: [-2, -0.5, -0.5, 0, 0, 0.5, 0, 0.5] as Monzo,
                pitch: {
                    monzo: [-4, -1, -1, 0, 0, 1, 0, 1] as Monzo<{ rational: true }>,
                    scaler: [1, 2] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.014594 as Decimal,
                cents: 25.083774 as Cents,
                monzo: [
                    -2.427070457354759,
                    1.5444993819530284,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [178.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.014923 as Decimal,
                cents: 25.645875 as Cents,
                monzo: [
                    -2.4814585908529048,
                    1.5791100123609394,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [182.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.015171 as Decimal,
                cents: 26.067451 as Cents,
                monzo: [
                    -2.522249690976514,
                    1.6050679851668728,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [185.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.015500 as Decimal,
                cents: 26.629553 as Cents,
                monzo: [
                    -2.57663782447466,
                    1.6396786155747836,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [189.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.015748 as Decimal,
                cents: 27.051129 as Cents,
                monzo: [
                    -2.6174289245982694,
                    1.665636588380717,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [192.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.016077 as Decimal,
                cents: 27.613230 as Cents,
                monzo: [
                    -2.6718170580964156,
                    1.700247218788628,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [196.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.016325 as Decimal,
                cents: 28.034806 as Cents,
                monzo: [
                    -2.712608158220025,
                    1.7262051915945613,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [199.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.016655 as Decimal,
                cents: 28.596908 as Cents,
                monzo: [
                    -2.7669962917181707,
                    1.7608158220024723,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [203.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.016902 as Decimal,
                cents: 29.018484 as Cents,
                monzo: [
                    -2.8077873918417797,
                    1.7867737948084053,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [206.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.017233 as Decimal,
                cents: 29.580585 as Cents,
                monzo: [
                    -2.862175525339926,
                    1.8213844252163165,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [210.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.017480 as Decimal,
                cents: 30.002161 as Cents,
                monzo: [
                    -2.902966625463535,
                    1.8473423980222496,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [213.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.017811 as Decimal,
                cents: 30.564263 as Cents,
                monzo: [
                    -2.957354758961681,
                    1.8819530284301607,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [217.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.018059 as Decimal,
                cents: 30.985839 as Cents,
                monzo: [
                    -2.9981458590852905,
                    1.9079110012360938,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [220.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.018307 as Decimal,
                cents: 31.407415 as Cents,
                monzo: [
                    -3.0389369592089,
                    1.9338689740420274,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [223.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.018637 as Decimal,
                cents: 31.969516 as Cents,
                monzo: [
                    -3.0933250927070457,
                    1.9684796044499382,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [227.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.018885 as Decimal,
                cents: 32.391092 as Cents,
                monzo: [
                    -3.1341161928306556,
                    1.9944375772558716,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [230.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.019216 as Decimal,
                cents: 32.953193 as Cents,
                monzo: [
                    -3.188504326328801,
                    2.0290482076637826,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [234.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.019465 as Decimal,
                cents: 33.374770 as Cents,
                monzo: [
                    -3.22929542645241,
                    2.0550061804697153,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [237.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.019796 as Decimal,
                cents: 33.936871 as Cents,
                monzo: [
                    -3.283683559950556,
                    2.0896168108776267,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [241.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.020044 as Decimal,
                cents: 34.358447 as Cents,
                monzo: [
                    -3.3244746600741655,
                    2.11557478368356,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [244.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.020375 as Decimal,
                cents: 34.920548 as Cents,
                monzo: [
                    -3.3788627935723117,
                    2.150185414091471,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [248.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.020492 as Decimal,
                cents: 35.118091 as Cents,
                monzo: [2, -2.5, 1, -1, 0, 0, 0, 0, 0, 0, 0.5] as Monzo,
                pitch: {
                    monzo: [4, -5, 2, -2, 0, 0, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                    scaler: [1, 2] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.020624 as Decimal,
                cents: 35.342124 as Cents,
                monzo: [
                    -3.4196538936959207,
                    2.176143386897404,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [251.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.020955 as Decimal,
                cents: 35.904226 as Cents,
                monzo: [
                    -3.474042027194067,
                    2.210754017305315,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [255.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.021204 as Decimal,
                cents: 36.325802 as Cents,
                monzo: [
                    -3.514833127317676,
                    2.236711990111248,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [258.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.021535 as Decimal,
                cents: 36.887903 as Cents,
                monzo: [
                    -3.569221260815822,
                    2.2713226205191597,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [262.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.021784 as Decimal,
                cents: 37.309479 as Cents,
                monzo: [
                    -3.6100123609394315,
                    2.297280593325093,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [265.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.022116 as Decimal,
                cents: 37.871581 as Cents,
                monzo: [
                    -3.664400494437577,
                    2.331891223733004,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [269.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.022228 as Decimal,
                cents: 38.061940 as Cents,
                monzo: [-3, 1.5, -0.5, 0.5, 0, -0.5, 0, 0, 0.5] as Monzo,
                pitch: {
                    monzo: [-6, 3, -1, 1, 0, -1, 0, 0, 1] as Monzo<{ rational: true }>,
                    scaler: [1, 2] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.022365 as Decimal,
                cents: 38.293157 as Cents,
                monzo: [
                    -3.7051915945611866,
                    2.357849196538937,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [272.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.022697 as Decimal,
                cents: 38.855258 as Cents,
                monzo: [
                    -3.759579728059333,
                    2.392459826946848,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [276.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.022946 as Decimal,
                cents: 39.276834 as Cents,
                monzo: [
                    -3.800370828182942,
                    2.418417799752781,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [279.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.023195 as Decimal,
                cents: 39.698410 as Cents,
                monzo: [
                    -3.8411619283065517,
                    2.4443757725587147,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [282.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.023527 as Decimal,
                cents: 40.260512 as Cents,
                monzo: [
                    -3.895550061804697,
                    2.4789864029666253,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [286.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.023777 as Decimal,
                cents: 40.682088 as Cents,
                monzo: [
                    -3.936341161928307,
                    2.504944375772559,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [289.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.024109 as Decimal,
                cents: 41.244189 as Cents,
                monzo: [
                    -3.990729295426452,
                    2.5395550061804695,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [293.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.024359 as Decimal,
                cents: 41.665765 as Cents,
                monzo: [
                    -4.031520395550062,
                    2.5655129789864026,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [296.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.024691 as Decimal,
                cents: 42.227866 as Cents,
                monzo: [
                    -4.085908529048208,
                    2.600123609394314,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [300.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.024941 as Decimal,
                cents: 42.649442 as Cents,
                monzo: [
                    -4.126699629171817,
                    2.6260815822002472,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [303.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.025274 as Decimal,
                cents: 43.211544 as Cents,
                monzo: [
                    -4.1810877626699625,
                    2.6606922126081582,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [307.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.025523 as Decimal,
                cents: 43.633120 as Cents,
                monzo: [
                    -4.221878862793572,
                    2.6866501854140914,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [310.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.025856 as Decimal,
                cents: 44.195221 as Cents,
                monzo: [
                    -4.276266996291718,
                    2.7212608158220024,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [314.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.026106 as Decimal,
                cents: 44.616797 as Cents,
                monzo: [
                    -4.317058096415328,
                    2.7472187886279356,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [317.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.026400 as Decimal,
                cents: 45.112497 as Cents,
                monzo: [4, -2.5] as Monzo,
                pitch: {
                    monzo: [8, -5] as Monzo<{ rational: true }>,
                    scaler: [1, 2] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.026689 as Decimal,
                cents: 45.600475 as Cents,
                monzo: [
                    -4.412237330037082,
                    2.8077873918417797,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [324.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.027023 as Decimal,
                cents: 46.162576 as Cents,
                monzo: [
                    -4.4666254635352285,
                    2.842398022249691,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [328.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.027273 as Decimal,
                cents: 46.584152 as Cents,
                monzo: [
                    -4.507416563658838,
                    2.8683559950556243,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [331.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.027606 as Decimal,
                cents: 47.146254 as Cents,
                monzo: [
                    -4.561804697156984,
                    2.9029666254635353,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [335.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.027857 as Decimal,
                cents: 47.567830 as Cents,
                monzo: [
                    -4.6025957972805935,
                    2.9289245982694685,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [338.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.028190 as Decimal,
                cents: 48.129931 as Cents,
                monzo: [
                    -4.65698393077874,
                    2.9635352286773795,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [342.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.028441 as Decimal,
                cents: 48.551507 as Cents,
                monzo: [
                    -4.697775030902348,
                    2.9894932014833127,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [345.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.028691 as Decimal,
                cents: 48.973083 as Cents,
                monzo: [
                    -4.738566131025958,
                    3.015451174289246,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [348.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.029025 as Decimal,
                cents: 49.535184 as Cents,
                monzo: [
                    -4.792954264524104,
                    3.050061804697157,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [352.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.029276 as Decimal,
                cents: 49.956761 as Cents,
                monzo: [
                    -4.833745364647713,
                    3.07601977750309,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [355.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.029610 as Decimal,
                cents: 50.518862 as Cents,
                monzo: [
                    -4.8881334981458595,
                    3.1106304079110014,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [359.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.029861 as Decimal,
                cents: 50.940438 as Cents,
                monzo: [
                    -4.928924598269468,
                    3.136588380716934,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [362.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.030027 as Decimal,
                cents: 51.219540 as Cents,
                monzo: [-2, -2, 1.5, 0, 0.5] as Monzo,
                pitch: {
                    monzo: [-4, -4, 3, 0, 1] as Monzo<{ rational: true }>,
                    scaler: [1, 2] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.030195 as Decimal,
                cents: 51.502539 as Cents,
                monzo: [
                    -4.983312731767614,
                    3.1711990111248456,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [366.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.030446 as Decimal,
                cents: 51.924115 as Cents,
                monzo: [
                    -5.024103831891224,
                    3.1971569839307787,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [369.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.030781 as Decimal,
                cents: 52.486217 as Cents,
                monzo: [
                    -5.07849196538937,
                    3.2317676143386898,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [373.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.031032 as Decimal,
                cents: 52.907793 as Cents,
                monzo: [
                    -5.119283065512979,
                    3.257725587144623,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [376.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.031367 as Decimal,
                cents: 53.469894 as Cents,
                monzo: [
                    -5.173671199011125,
                    3.292336217552534,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [380.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.031618 as Decimal,
                cents: 53.891470 as Cents,
                monzo: [
                    -5.214462299134734,
                    3.318294190358467,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [383.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.031953 as Decimal,
                cents: 54.453572 as Cents,
                monzo: [
                    -5.26885043263288,
                    3.3529048207663785,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [387.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.032204 as Decimal,
                cents: 54.875148 as Cents,
                monzo: [
                    -5.30964153275649,
                    3.3788627935723117,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [390.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.032336 as Decimal,
                cents: 55.095545 as Cents,
                monzo: [-7.5, 4.5, 0.5, 0, 0.5, 0, 0, 0, 0, 0, -0.5] as Monzo,
                pitch: {
                    monzo: [-15, 9, 1, 0, 1, 0, 0, 0, 0, 0, -1] as Monzo<{ rational: true }>,
                    scaler: [1, 2] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.032540 as Decimal,
                cents: 55.437249 as Cents,
                monzo: [
                    -5.364029666254636,
                    3.4134734239802227,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [394.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.032791 as Decimal,
                cents: 55.858825 as Cents,
                monzo: [
                    -5.404820766378244,
                    3.439431396786156,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [397.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.033126 as Decimal,
                cents: 56.420926 as Cents,
                monzo: [
                    -5.459208899876391,
                    3.474042027194067,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [401.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.033378 as Decimal,
                cents: 56.842503 as Cents,
                monzo: [
                    -5.5,
                    3.5,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [404.5, 809] as Quotient,   // = 1/2
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.033630 as Decimal,
                cents: 57.264079 as Cents,
                monzo: [
                    -5.540791100123609,
                    3.5259579728059336,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [407.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.033965 as Decimal,
                cents: 57.826180 as Cents,
                monzo: [
                    -5.595179233621756,
                    3.560568603213844,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [411.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.034217 as Decimal,
                cents: 58.247756 as Cents,
                monzo: [
                    -5.635970333745365,
                    3.5865265760197778,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [414.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.034421 as Decimal,
                cents: 58.589460 as Cents,
                monzo: [-3.5, 2.5, -0.5, 0, -0.5, 0, 0, 0, 0, 0, 0.5] as Monzo,
                pitch: {
                    monzo: [-7, 5, -1, 0, -1, 0, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                    scaler: [1, 2] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.034553 as Decimal,
                cents: 58.809857 as Cents,
                monzo: [
                    -5.69035846724351,
                    3.6211372064276883,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [418.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.034805 as Decimal,
                cents: 59.231433 as Cents,
                monzo: [
                    -5.731149567367121,
                    3.647095179233622,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [421.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.035141 as Decimal,
                cents: 59.793535 as Cents,
                monzo: [
                    -5.785537700865266,
                    3.681705809641533,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [425.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.035393 as Decimal,
                cents: 60.215111 as Cents,
                monzo: [
                    -5.826328800988875,
                    3.707663782447466,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [428.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.035729 as Decimal,
                cents: 60.777212 as Cents,
                monzo: [
                    -5.880716934487021,
                    3.742274412855377,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [432.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.035982 as Decimal,
                cents: 61.198788 as Cents,
                monzo: [
                    -5.921508034610631,
                    3.7682323856613107,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [435.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.036318 as Decimal,
                cents: 61.760890 as Cents,
                monzo: [
                    -5.975896168108776,
                    3.8028430160692213,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [439.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.036570 as Decimal,
                cents: 62.182466 as Cents,
                monzo: [
                    -6.016687268232387,
                    3.828800988875155,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [442.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.036740 as Decimal,
                cents: 62.465465 as Cents,
                monzo: [-9, 9, -1.5, 0, -0.5] as Monzo,
                pitch: {
                    monzo: [-18, 18, -3, 0, -1] as Monzo<{ rational: true }>,
                    scaler: [1, 2] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.036907 as Decimal,
                cents: 62.744567 as Cents,
                monzo: [
                    -6.071075401730532,
                    3.863411619283066,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [446.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.037159 as Decimal,
                cents: 63.166143 as Cents,
                monzo: [
                    -6.111866501854141,
                    3.889369592088999,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [449.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.037496 as Decimal,
                cents: 63.728245 as Cents,
                monzo: [
                    -6.166254635352287,
                    3.92398022249691,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [453.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.037749 as Decimal,
                cents: 64.149821 as Cents,
                monzo: [
                    -6.207045735475897,
                    3.9499381953028436,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [456.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.038086 as Decimal,
                cents: 64.711922 as Cents,
                monzo: [
                    -6.261433868974042,
                    3.984548825710754,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [460.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.038339 as Decimal,
                cents: 65.133498 as Cents,
                monzo: [
                    -6.302224969097651,
                    4.010506798516687,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [463.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.038592 as Decimal,
                cents: 65.555074 as Cents,
                monzo: [
                    -6.34301606922126,
                    4.0364647713226205,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [466.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.038929 as Decimal,
                cents: 66.117175 as Cents,
                monzo: [
                    -6.3974042027194065,
                    4.071075401730531,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [470.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.039182 as Decimal,
                cents: 66.538752 as Cents,
                monzo: [
                    -6.438195302843016,
                    4.097033374536465,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [473.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.039519 as Decimal,
                cents: 67.100853 as Cents,
                monzo: [
                    -6.492583436341161,
                    4.131644004944375,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [477.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.039773 as Decimal,
                cents: 67.522429 as Cents,
                monzo: [
                    -6.5333745364647715,
                    4.157601977750309,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [480.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.040110 as Decimal,
                cents: 68.084530 as Cents,
                monzo: [
                    -6.587762669962917,
                    4.192212608158219,
                ] as Monzo,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [484.5, 809] as Quotient,
                } as Pitch<{ rational: false }>,
            },
            {
                decimal: 1.040403 as Decimal,
                cents: 68.572508 as Cents,
                monzo: [-15, 9.5] as Monzo,
                pitch: {
                    monzo: [-30, 19] as Monzo<{ rational: true }>,
                    scaler: [1, 2] as Quotient,
                } as Pitch<{ rational: false }>,
            },
        ]
        expect(actual).toBeCloseToObject(expected)
    })
})
