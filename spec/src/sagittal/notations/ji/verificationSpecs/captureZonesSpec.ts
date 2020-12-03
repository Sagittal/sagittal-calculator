import {computeIrrationalDecimalFromScamon, Decimal, Extrema, Maybe, Zone} from "../../../../../../src/general"
import {
    CommaClassId,
    computeJiNotationCaptureZone,
    JiNotationLevelId,
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
} from "../../../../../../src/sagittal"

describe("capture zones", (): void => {
    it("Medium JI notation level capture zones check out", (): void => {
        const actual = JI_NOTATION_LEVELS_COMMA_CLASS_IDS[JiNotationLevelId.MEDIUM]
            .map((mediumLevelCommaClassId: CommaClassId): Maybe<Zone> => {
                return computeJiNotationCaptureZone(mediumLevelCommaClassId, JiNotationLevelId.MEDIUM)
            })

        const expected = [
            [{decimal: 1.000000}, {decimal: 1.001584}], // [{ cents: 0.000000 }, { cents: 2.740244 }],
            [{decimal: 1.001584}, {decimal: 1.004678}], // [{ cents: 2.740244 }, { cents: 8.080207 }],
            [{decimal: 1.004678}, {decimal: 1.007781}], // [{ cents: 8.080207 }, { cents: 13.420170 }],
            [{decimal: 1.007781}, {decimal: 1.010895}], // [{ cents: 13.420170 }, { cents: 18.760133 }],
            [{decimal: 1.010895}, {decimal: 1.014347}], // [{ cents: 18.760133 }, { cents: 24.662198 }],
            [{decimal: 1.014347}, {decimal: 1.017480}], // [{ cents: 24.662198 }, { cents: 30.002161 }],
            [{decimal: 1.017480}, {decimal: 1.020492}], // [{ cents: 30.002161 }, { cents: 35.118091 }],
            [{decimal: 1.020492}, {decimal: 1.023527}], // [{ cents: 35.118091 }, { cents: 40.260512 }],
            [{decimal: 1.023527}, {decimal: 1.026400}], // [{ cents: 40.260512 }, { cents: 45.112497 }],
            [{decimal: 1.026400}, {decimal: 1.030027}], // [{ cents: 45.112497 }, { cents: 51.219540 }],
            [{decimal: 1.030027}, {decimal: 1.033378}], // [{ cents: 51.219540 }, { cents: 56.842503 }],
        ] as Array<Extrema<{of: {decimal: Decimal}}>>
        expected.forEach((extrema: Extrema<{of: {decimal: Decimal}}>, index: number): void => {
            expect(computeIrrationalDecimalFromScamon(actual[index]!.extrema[0]!)).toBeCloseTo(extrema[0].decimal!)
            expect(computeIrrationalDecimalFromScamon(actual[index]!.extrema[1]!)).toBeCloseTo(extrema[1].decimal!)
        })
    })

    it("High JI notation level capture zones check out", (): void => {
        const actual = JI_NOTATION_LEVELS_COMMA_CLASS_IDS[JiNotationLevelId.HIGH]
            .map((highLevelCommaClassId: CommaClassId): Maybe<Zone> => {
                return computeJiNotationCaptureZone(highLevelCommaClassId, JiNotationLevelId.HIGH)
            })

        const expected = [
            [{decimal: 1.000000}, {decimal: 1.000690}], // [{ cents: 0.000000 }, { cents: 1.194465 }],
            [{decimal: 1.000690}, {decimal: 1.002641}], // [{ cents: 1.194465 }, { cents: 4.567073 }],
            [{decimal: 1.002641}, {decimal: 1.003781}], // [{ cents: 4.567073 }, { cents: 6.534428 }],
            [{decimal: 1.003781}, {decimal: 1.005249}], // [{ cents: 6.534428 }, { cents: 9.063884 }],
            [{decimal: 1.005249}, {decimal: 1.006392}], // [{ cents: 9.063884 }, { cents: 11.031239 }],
            [{decimal: 1.006392}, {decimal: 1.007781}], // [{ cents: 11.031239 }, { cents: 13.420170 }],
            [{decimal: 1.007781}, {decimal: 1.008927}], // [{ cents: 13.420170 }, { cents: 15.387525 }],
            [{decimal: 1.008927}, {decimal: 1.010074}], // [{ cents: 15.387525 }, { cents: 17.354880 }],
            [{decimal: 1.010074}, {decimal: 1.010895}], // [{ cents: 17.354880 }, { cents: 18.760133 }],
            [{decimal: 1.010895}, {decimal: 1.011798}], // [{ cents: 18.760133 }, { cents: 20.305912 }],
            [{decimal: 1.011798}, {decimal: 1.013195}], // [{ cents: 20.305912 }, { cents: 22.694843 }],
            [{decimal: 1.013195}, {decimal: 1.015171}], // [{ cents: 22.694843 }, { cents: 26.067451 }],
            [{decimal: 1.015171}, {decimal: 1.016655}], // [{ cents: 26.067451 }, { cents: 28.596908 }],
            [{decimal: 1.016655}, {decimal: 1.018059}], // [{ cents: 28.596908 }, { cents: 30.985839 }],
            [{decimal: 1.018059}, {decimal: 1.018885}], // [{ cents: 30.985839 }, { cents: 32.391092 }],
            [{decimal: 1.018885}, {decimal: 1.020044}], // [{ cents: 32.391092 }, { cents: 34.358447 }],
            [{decimal: 1.020044}, {decimal: 1.021784}], // [{ cents: 34.358447 }, { cents: 37.309479 }],
            [{decimal: 1.021784}, {decimal: 1.022228}], // [{ cents: 37.309479 }, { cents: 38.061940 }],
            [{decimal: 1.022228}, {decimal: 1.023195}], // [{ cents: 38.061940 }, { cents: 39.698410 }],
            [{decimal: 1.023195}, {decimal: 1.024359}], // [{ cents: 39.698410 }, { cents: 41.665765 }],
            [{decimal: 1.024359}, {decimal: 1.026400}], // [{ cents: 41.665765 }, { cents: 45.112497 }],
            [{decimal: 1.026400}, {decimal: 1.027857}], // [{ cents: 45.112497 }, { cents: 47.567830 }],
            [{decimal: 1.027857}, {decimal: 1.029025}], // [{ cents: 47.567830 }, { cents: 49.535184 }],
            [{decimal: 1.029025}, {decimal: 1.030446}], // [{ cents: 49.535184 }, { cents: 51.924115 }],
            [{decimal: 1.030446}, {decimal: 1.031618}], // [{ cents: 51.924115 }, { cents: 53.891470 }],
            [{decimal: 1.031618}, {decimal: 1.032791}], // [{ cents: 53.891470 }, { cents: 55.858825 }],
            [{decimal: 1.032791}, {decimal: 1.033965}], // [{ cents: 55.858825 }, { cents: 56.842503 }],
        ] as Array<Extrema<{of: {decimal: Decimal}}>>
        expected.forEach((extrema: Extrema<{of: {decimal: Decimal}}>, index: number): void => {
            expect(computeIrrationalDecimalFromScamon(actual[index]!.extrema[0]!)).toBeCloseTo(extrema[0].decimal!)
            expect(computeIrrationalDecimalFromScamon(actual[index]!.extrema[1]!)).toBeCloseTo(extrema[1].decimal!)
        })
    })

    it("Ultra JI notation level capture zones check out", (): void => {
        const actual = JI_NOTATION_LEVELS_COMMA_CLASS_IDS[JiNotationLevelId.ULTRA]
            .map((ultraLevelCommaClassId: CommaClassId): Maybe<Zone> => {
                return computeJiNotationCaptureZone(ultraLevelCommaClassId, JiNotationLevelId.ULTRA)
            })

        const expected = [
            [{decimal: 1.000000}, {decimal: 1.000690}], // [{ cents: 0.000000 }, { cents: 1.194465 }],
            [{decimal: 1.000690}, {decimal: 1.001015}], // [{ cents: 1.194465 }, { cents: 1.756566 }],
            [{decimal: 1.001015}, {decimal: 1.001584}], // [{ cents: 1.756566 }, { cents: 2.740244 }],
            [{decimal: 1.001584}, {decimal: 1.002641}], // [{ cents: 2.740244 }, { cents: 4.567073 }],
            [{decimal: 1.002641}, {decimal: 1.003781}], // [{ cents: 4.567073 }, { cents: 6.534428 }],
            [{decimal: 1.003781}, {decimal: 1.004107}], // [{ cents: 6.534428 }, { cents: 7.096530 }],
            [{decimal: 1.004107}, {decimal: 1.004678}], // [{ cents: 7.096530 }, { cents: 8.080207 }],
            [{decimal: 1.004678}, {decimal: 1.005249}], // [{ cents: 8.080207 }, { cents: 9.063884 }],
            [{decimal: 1.005249}, {decimal: 1.006392}], // [{ cents: 9.063884 }, { cents: 11.031239 }],
            [{decimal: 1.006392}, {decimal: 1.006964}], // [{ cents: 11.031239 }, { cents: 12.014917 }],
            [{decimal: 1.006964}, {decimal: 1.007209}], // [{ cents: 12.014917 }, { cents: 12.436493 }],
            [{decimal: 1.007209}, {decimal: 1.007781}], // [{ cents: 12.436493 }, { cents: 13.420170 }],
            [{decimal: 1.007781}, {decimal: 1.008927}], // [{ cents: 13.420170 }, { cents: 15.387525 }],
            [{decimal: 1.008927}, {decimal: 1.010074}], // [{ cents: 15.387525 }, { cents: 17.354880 }],
            [{decimal: 1.010074}, {decimal: 1.010895}], // [{ cents: 17.354880 }, { cents: 18.760133 }],
            [{decimal: 1.010895}, {decimal: 1.011469}], // [{ cents: 18.760133 }, { cents: 19.743811 }],
            [{decimal: 1.011469}, {decimal: 1.011798}], // [{ cents: 19.743811 }, { cents: 20.305912 }],
            [{decimal: 1.011798}, {decimal: 1.013195}], // [{ cents: 20.305912 }, { cents: 22.694843 }],
            [{decimal: 1.013195}, {decimal: 1.013442}], // [{ cents: 22.694843 }, { cents: 23.116419 }],
            [{decimal: 1.013442}, {decimal: 1.013933}], // [{ cents: 23.116419 }, { cents: 23.955448 }],
            [{decimal: 1.013933}, {decimal: 1.014478}], // [{ cents: 23.955448 }, { cents: 24.885981 }], // look out
            [{decimal: 1.014478}, {decimal: 1.015171}], // [{ cents: 24.885981 }, { cents: 26.067451 }],
            [{decimal: 1.015171}, {decimal: 1.016655}], // [{ cents: 26.067451 }, { cents: 28.596908 }],
            [{decimal: 1.016655}, {decimal: 1.017480}], // [{ cents: 28.596908 }, { cents: 30.002161 }],
            [{decimal: 1.017480}, {decimal: 1.018059}], // [{ cents: 30.002161 }, { cents: 30.985839 }],
            [{decimal: 1.018059}, {decimal: 1.018307}], // [{ cents: 30.985839 }, { cents: 31.407415 }],
            [{decimal: 1.018307}, {decimal: 1.018885}], // [{ cents: 31.407415 }, { cents: 32.391092 }],
            [{decimal: 1.018885}, {decimal: 1.020044}], // [{ cents: 32.391092 }, { cents: 34.358447 }],
            [{decimal: 1.020044}, {decimal: 1.020492}], // [{ cents: 34.358447 }, { cents: 35.118091 }],
            [{decimal: 1.020492}, {decimal: 1.021204}], // [{ cents: 35.118091 }, { cents: 36.325802 }],
            [{decimal: 1.021204}, {decimal: 1.021784}], // [{ cents: 36.325802 }, { cents: 37.309479 }],
            [{decimal: 1.021784}, {decimal: 1.022116}], // [{ cents: 37.309479 }, { cents: 37.871581 }],
            [{decimal: 1.022116}, {decimal: 1.022228}], // [{ cents: 37.871581 }, { cents: 38.061940 }],
            [{decimal: 1.022228}, {decimal: 1.023195}], // [{ cents: 38.061940 }, { cents: 39.698410 }],
            [{decimal: 1.023195}, {decimal: 1.023527}], // [{ cents: 39.698410 }, { cents: 40.260512 }],
            [{decimal: 1.023527}, {decimal: 1.024359}], // [{ cents: 40.260512 }, { cents: 41.665765 }],
            [{decimal: 1.024359}, {decimal: 1.025856}], // [{ cents: 41.665765 }, { cents: 44.195221 }],
            [{decimal: 1.025856}, {decimal: 1.026400}], // [{ cents: 44.195221 }, { cents: 45.112497 }],
            [{decimal: 1.026400}, {decimal: 1.027857}], // [{ cents: 45.112497 }, { cents: 47.567830 }],
            [{decimal: 1.027857}, {decimal: 1.029025}], // [{ cents: 47.567830 }, { cents: 49.535184 }],
            [{decimal: 1.029025}, {decimal: 1.029276}], // [{ cents: 49.535184 }, { cents: 49.956761 }],
            [{decimal: 1.029276}, {decimal: 1.030027}], // [{ cents: 49.956761 }, { cents: 51.219540 }],
            [{decimal: 1.030027}, {decimal: 1.030446}], // [{ cents: 51.219540 }, { cents: 51.924115 }],
            [{decimal: 1.030446}, {decimal: 1.031618}], // [{ cents: 51.924115 }, { cents: 53.891470 }],
            [{decimal: 1.031618}, {decimal: 1.032336}], // [{ cents: 53.891470 }, { cents: 55.095545 }],
            [{decimal: 1.032336}, {decimal: 1.032791}], // [{ cents: 55.095545 }, { cents: 55.858825 }],
            [{decimal: 1.032791}, {decimal: 1.033965}], // [{ cents: 55.858825 }, { cents: 56.842503 }],
        ] as Array<Extrema<{of: {decimal: Decimal}}>>
        expected.forEach((extrema: Extrema<{of: {decimal: Decimal}}>, index: number): void => {
            expect(computeIrrationalDecimalFromScamon(actual[index]!.extrema[0]!)).toBeCloseTo(extrema[0].decimal!)
            expect(computeIrrationalDecimalFromScamon(actual[index]!.extrema[1]!)).toBeCloseTo(extrema[1].decimal!)
        })
    })

    it("Extreme JI notation level capture zones check out", (): void => {
        const actual = JI_NOTATION_LEVELS_COMMA_CLASS_IDS[JiNotationLevelId.EXTREME]
            .map((extremeLevelCommaClassId: CommaClassId): Maybe<Zone> => {
                return computeJiNotationCaptureZone(extremeLevelCommaClassId, JiNotationLevelId.EXTREME)
            })

        const expected = [
            [{decimal: 1.000000}, {decimal: 1.000121}], // [{ cents: 0.000000 }, { cents: 0.210788 }],
            [{decimal: 1.000121}, {decimal: 1.000446}], // [{ cents: 0.210788 }, { cents: 0.772889 }],
            [{decimal: 1.000446}, {decimal: 1.000690}], // [{ cents: 0.772889 }, { cents: 1.194465 }],
            [{decimal: 1.000690}, {decimal: 1.001015}], // [{ cents: 1.194465 }, { cents: 1.756566 }],
            [{decimal: 1.001015}, {decimal: 1.001258}], // [{ cents: 1.756566 }, { cents: 2.178142 }],
            [{decimal: 1.001258}, {decimal: 1.001584}], // [{ cents: 2.178142 }, { cents: 2.740244 }],
            [{decimal: 1.001584}, {decimal: 1.001828}], // [{ cents: 2.740244 }, { cents: 3.161820 }],
            [{decimal: 1.001828}, {decimal: 1.002153}], // [{ cents: 3.161820 }, { cents: 3.723921 }],
            [{decimal: 1.002153}, {decimal: 1.002397}], // [{ cents: 3.723921 }, { cents: 4.145497 }],
            [{decimal: 1.002397}, {decimal: 1.002641}], // [{ cents: 4.145497 }, { cents: 4.567073 }],
            [{decimal: 1.002641}, {decimal: 1.002967}], // [{ cents: 4.567073 }, { cents: 5.129175 }],
            [{decimal: 1.002967}, {decimal: 1.003211}], // [{ cents: 5.129175 }, { cents: 5.550751 }],
            [{decimal: 1.003211}, {decimal: 1.003537}], // [{ cents: 5.550751 }, { cents: 6.112852 }],
            [{decimal: 1.003537}, {decimal: 1.003781}], // [{ cents: 6.112852 }, { cents: 6.534428 }],
            [{decimal: 1.003781}, {decimal: 1.004107}], // [{ cents: 6.534428 }, { cents: 7.096530 }],
            [{decimal: 1.004107}, {decimal: 1.004352}], // [{ cents: 7.096530 }, { cents: 7.518106 }],
            [{decimal: 1.004352}, {decimal: 1.004678}], // [{ cents: 7.518106 }, { cents: 8.080207 }],
            [{decimal: 1.004678}, {decimal: 1.004922}], // [{ cents: 8.080207 }, { cents: 8.501783 }],
            [{decimal: 1.004922}, {decimal: 1.005249}], // [{ cents: 8.501783 }, { cents: 9.063884 }],
            [{decimal: 1.005249}, {decimal: 1.005494}], // [{ cents: 9.063884 }, { cents: 9.485460 }],
            [{decimal: 1.005494}, {decimal: 1.005820}], // [{ cents: 9.485460 }, { cents: 10.047562 }],
            [{decimal: 1.005820}, {decimal: 1.006065}], // [{ cents: 10.047562 }, { cents: 10.469138 }],
            [{decimal: 1.006065}, {decimal: 1.006392}], // [{ cents: 10.469138 }, { cents: 11.031239 }],
            [{decimal: 1.006392}, {decimal: 1.006637}], // [{ cents: 11.031239 }, { cents: 11.452815 }],
            [{decimal: 1.006637}, {decimal: 1.006964}], // [{ cents: 11.452815 }, { cents: 12.014917 }],
            [{decimal: 1.006964}, {decimal: 1.007209}], // [{ cents: 12.014917 }, { cents: 12.436493 }],
            [{decimal: 1.007209}, {decimal: 1.007536}], // [{ cents: 12.436493 }, { cents: 12.998594 }],
            [{decimal: 1.007536}, {decimal: 1.007781}], // [{ cents: 12.998594 }, { cents: 13.420170 }],
            [{decimal: 1.007781}, {decimal: 1.008027}], // [{ cents: 13.420170 }, { cents: 13.841746 }],
            [{decimal: 1.008027}, {decimal: 1.008354}], // [{ cents: 13.841746 }, { cents: 14.403848 }],
            [{decimal: 1.008354}, {decimal: 1.008600}], // [{ cents: 14.403848 }, { cents: 14.825424 }],
            [{decimal: 1.008600}, {decimal: 1.008927}], // [{ cents: 14.825424 }, { cents: 15.387525 }],
            [{decimal: 1.008927}, {decimal: 1.009173}], // [{ cents: 15.387525 }, { cents: 15.809101 }],
            [{decimal: 1.009173}, {decimal: 1.009501}], // [{ cents: 15.809101 }, { cents: 16.371202 }],
            [{decimal: 1.009501}, {decimal: 1.009747}], // [{ cents: 16.371202 }, { cents: 16.792779 }],
            [{decimal: 1.009747}, {decimal: 1.010074}], // [{ cents: 16.792779 }, { cents: 17.354880 }],
            [{decimal: 1.010074}, {decimal: 1.010320}], // [{ cents: 17.354880 }, { cents: 17.776456 }],
            [{decimal: 1.010320}, {decimal: 1.010649}], // [{ cents: 17.776456 }, { cents: 18.338557 }],
            [{decimal: 1.010649}, {decimal: 1.010895}], // [{ cents: 18.338557 }, { cents: 18.760133 }],
            [{decimal: 1.010895}, {decimal: 1.011223}], // [{ cents: 18.760133 }, { cents: 19.322235 }],
            [{decimal: 1.011223}, {decimal: 1.011469}], // [{ cents: 19.322235 }, { cents: 19.743811 }],
            [{decimal: 1.011469}, {decimal: 1.011798}], // [{ cents: 19.743811 }, { cents: 20.305912 }],
            [{decimal: 1.011798}, {decimal: 1.012044}], // [{ cents: 20.305912 }, { cents: 20.727488 }],
            [{decimal: 1.012044}, {decimal: 1.012373}], // [{ cents: 20.727488 }, { cents: 21.289590 }],
            [{decimal: 1.012373}, {decimal: 1.012619}], // [{ cents: 21.289590 }, { cents: 21.711166 }],
            [{decimal: 1.012619}, {decimal: 1.012866}], // [{ cents: 21.711166 }, { cents: 22.132742 }],
            [{decimal: 1.012866}, {decimal: 1.013195}], // [{ cents: 22.132742 }, { cents: 22.694843 }],
            [{decimal: 1.013195}, {decimal: 1.013442}], // [{ cents: 22.694843 }, { cents: 23.116419 }],
            [{decimal: 1.013442}, {decimal: 1.013771}], // [{ cents: 23.116419 }, { cents: 23.678521 }],
            [{decimal: 1.013771}, {decimal: 1.013933}], // [{ cents: 23.678521 }, { cents: 23.955448 }],
            [{decimal: 1.013933}, {decimal: 1.014018}], // [{ cents: 23.955448 }, { cents: 24.100097 }],
            [{decimal: 1.014018}, {decimal: 1.014347}], // [{ cents: 24.100097 }, { cents: 24.662198 }],
            [{decimal: 1.014347}, {decimal: 1.014478}], // [{ cents: 24.662198 }, { cents: 24.885981 }],
            [{decimal: 1.014478}, {decimal: 1.014594}], // [{ cents: 24.885981 }, { cents: 25.083774 }],
            [{decimal: 1.014594}, {decimal: 1.014923}], // [{ cents: 25.083774 }, { cents: 25.645875 }],
            [{decimal: 1.014923}, {decimal: 1.015171}], // [{ cents: 25.645875 }, { cents: 26.067451 }],
            [{decimal: 1.015171}, {decimal: 1.015500}], // [{ cents: 26.067451 }, { cents: 26.629553 }],
            [{decimal: 1.015500}, {decimal: 1.015748}], // [{ cents: 26.629553 }, { cents: 27.051129 }],
            [{decimal: 1.015748}, {decimal: 1.016077}], // [{ cents: 27.051129 }, { cents: 27.613230 }],
            [{decimal: 1.016077}, {decimal: 1.016325}], // [{ cents: 27.613230 }, { cents: 28.034806 }],
            [{decimal: 1.016325}, {decimal: 1.016655}], // [{ cents: 28.034806 }, { cents: 28.596908 }],
            [{decimal: 1.016655}, {decimal: 1.016902}], // [{ cents: 28.596908 }, { cents: 29.018484 }],
            [{decimal: 1.016902}, {decimal: 1.017233}], // [{ cents: 29.018484 }, { cents: 29.580585 }],
            [{decimal: 1.017233}, {decimal: 1.017480}], // [{ cents: 29.580585 }, { cents: 30.002161 }],
            [{decimal: 1.017480}, {decimal: 1.017811}], // [{ cents: 30.002161 }, { cents: 30.564263 }],
            [{decimal: 1.017811}, {decimal: 1.018059}], // [{ cents: 30.564263 }, { cents: 30.985839 }],
            [{decimal: 1.018059}, {decimal: 1.018307}], // [{ cents: 30.985839 }, { cents: 31.407415 }],
            [{decimal: 1.018307}, {decimal: 1.018637}], // [{ cents: 31.407415 }, { cents: 31.969516 }],
            [{decimal: 1.018637}, {decimal: 1.018885}], // [{ cents: 31.969516 }, { cents: 32.391092 }],
            [{decimal: 1.018885}, {decimal: 1.019216}], // [{ cents: 32.391092 }, { cents: 32.953193 }],
            [{decimal: 1.019216}, {decimal: 1.019465}], // [{ cents: 32.953193 }, { cents: 33.374770 }],
            [{decimal: 1.019465}, {decimal: 1.019796}], // [{ cents: 33.374770 }, { cents: 33.936871 }],
            [{decimal: 1.019796}, {decimal: 1.020044}], // [{ cents: 33.936871 }, { cents: 34.358447 }],
            [{decimal: 1.020044}, {decimal: 1.020375}], // [{ cents: 34.358447 }, { cents: 34.920548 }],
            [{decimal: 1.020375}, {decimal: 1.020492}], // [{ cents: 34.920548 }, { cents: 35.118091 }],
            [{decimal: 1.020492}, {decimal: 1.020624}], // [{ cents: 35.118091 }, { cents: 35.342124 }],
            [{decimal: 1.020624}, {decimal: 1.020955}], // [{ cents: 35.342124 }, { cents: 35.904226 }],
            [{decimal: 1.020955}, {decimal: 1.021204}], // [{ cents: 35.904226 }, { cents: 36.325802 }],
            [{decimal: 1.021204}, {decimal: 1.021535}], // [{ cents: 36.325802 }, { cents: 36.887903 }],
            [{decimal: 1.021535}, {decimal: 1.021784}], // [{ cents: 36.887903 }, { cents: 37.309479 }],
            [{decimal: 1.021784}, {decimal: 1.022116}], // [{ cents: 37.309479 }, { cents: 37.871581 }],
            [{decimal: 1.022116}, {decimal: 1.022228}], // [{ cents: 37.871581 }, { cents: 38.061940 }],
            [{decimal: 1.022228}, {decimal: 1.022365}], // [{ cents: 38.061940 }, { cents: 38.293157 }],
            [{decimal: 1.022365}, {decimal: 1.022697}], // [{ cents: 38.293157 }, { cents: 38.855258 }],
            [{decimal: 1.022697}, {decimal: 1.022946}], // [{ cents: 38.855258 }, { cents: 39.276834 }],
            [{decimal: 1.022946}, {decimal: 1.023195}], // [{ cents: 39.276834 }, { cents: 39.698410 }],
            [{decimal: 1.023195}, {decimal: 1.023527}], // [{ cents: 39.698410 }, { cents: 40.260512 }],
            [{decimal: 1.023527}, {decimal: 1.023777}], // [{ cents: 40.260512 }, { cents: 40.682088 }],
            [{decimal: 1.023777}, {decimal: 1.024109}], // [{ cents: 40.682088 }, { cents: 41.244189 }],
            [{decimal: 1.024109}, {decimal: 1.024359}], // [{ cents: 41.244189 }, { cents: 41.665765 }],
            [{decimal: 1.024359}, {decimal: 1.024691}], // [{ cents: 41.665765 }, { cents: 42.227866 }],
            [{decimal: 1.024691}, {decimal: 1.024941}], // [{ cents: 42.227866 }, { cents: 42.649442 }],
            [{decimal: 1.024941}, {decimal: 1.025274}], // [{ cents: 42.649442 }, { cents: 43.211544 }],
            [{decimal: 1.025274}, {decimal: 1.025523}], // [{ cents: 43.211544 }, { cents: 43.633120 }],
            [{decimal: 1.025523}, {decimal: 1.025856}], // [{ cents: 43.633120 }, { cents: 44.195221 }],
            [{decimal: 1.025856}, {decimal: 1.026106}], // [{ cents: 44.195221 }, { cents: 44.616797 }],
            [{decimal: 1.026106}, {decimal: 1.026400}], // [{ cents: 44.616797 }, { cents: 45.112497 }],
            [{decimal: 1.026400}, {decimal: 1.026689}], // [{ cents: 45.112497 }, { cents: 45.600475 }],
            [{decimal: 1.026689}, {decimal: 1.027023}], // [{ cents: 45.600475 }, { cents: 46.162576 }],
            [{decimal: 1.027023}, {decimal: 1.027273}], // [{ cents: 46.162576 }, { cents: 46.584152 }],
            [{decimal: 1.027273}, {decimal: 1.027606}], // [{ cents: 46.584152 }, { cents: 47.146254 }],
            [{decimal: 1.027606}, {decimal: 1.027857}], // [{ cents: 47.146254 }, { cents: 47.567830 }],
            [{decimal: 1.027857}, {decimal: 1.028190}], // [{ cents: 47.567830 }, { cents: 48.129931 }],
            [{decimal: 1.028190}, {decimal: 1.028441}], // [{ cents: 48.129931 }, { cents: 48.551507 }],
            [{decimal: 1.028441}, {decimal: 1.028691}], // [{ cents: 48.551507 }, { cents: 48.973083 }],
            [{decimal: 1.028691}, {decimal: 1.029025}], // [{ cents: 48.973083 }, { cents: 49.535184 }],
            [{decimal: 1.029025}, {decimal: 1.029276}], // [{ cents: 49.535184 }, { cents: 49.956761 }],
            [{decimal: 1.029276}, {decimal: 1.029610}], // [{ cents: 49.956761 }, { cents: 50.518862 }],
            [{decimal: 1.029610}, {decimal: 1.029861}], // [{ cents: 50.518862 }, { cents: 50.940438 }],
            [{decimal: 1.029861}, {decimal: 1.030027}], // [{ cents: 50.940438 }, { cents: 51.219540 }],
            [{decimal: 1.030027}, {decimal: 1.030195}], // [{ cents: 51.219540 }, { cents: 51.502539 }],
            [{decimal: 1.030195}, {decimal: 1.030446}], // [{ cents: 51.502539 }, { cents: 51.924115 }],
            [{decimal: 1.030446}, {decimal: 1.030781}], // [{ cents: 51.924115 }, { cents: 52.486217 }],
            [{decimal: 1.030781}, {decimal: 1.031032}], // [{ cents: 52.486217 }, { cents: 52.907793 }],
            [{decimal: 1.031032}, {decimal: 1.031367}], // [{ cents: 52.907793 }, { cents: 53.469894 }],
            [{decimal: 1.031367}, {decimal: 1.031618}], // [{ cents: 53.469894 }, { cents: 53.891470 }],
            [{decimal: 1.031618}, {decimal: 1.031953}], // [{ cents: 53.891470 }, { cents: 54.453572 }],
            [{decimal: 1.031953}, {decimal: 1.032204}], // [{ cents: 54.453572 }, { cents: 54.875148 }],
            [{decimal: 1.032204}, {decimal: 1.032336}], // [{ cents: 54.875148 }, { cents: 55.095545 }],
            [{decimal: 1.032336}, {decimal: 1.032540}], // [{ cents: 55.095545 }, { cents: 55.437249 }],
            [{decimal: 1.032540}, {decimal: 1.032791}], // [{ cents: 55.437249 }, { cents: 55.858825 }],
            [{decimal: 1.032791}, {decimal: 1.033126}], // [{ cents: 55.858825 }, { cents: 56.420926 }],
            [{decimal: 1.033126}, {decimal: 1.033378}], // [{ cents: 56.420926 }, { cents: 56.842503 }],
        ] as Array<Extrema<{of: {decimal: Decimal}}>>
        expected.forEach((extrema: Extrema<{of: {decimal: Decimal}}>, index: number): void => {
            expect(computeIrrationalDecimalFromScamon(actual[index]!.extrema[0]!)).toBeCloseTo(extrema[0].decimal!)
            expect(computeIrrationalDecimalFromScamon(actual[index]!.extrema[1]!)).toBeCloseTo(extrema[1].decimal!)
        })
    })
})
