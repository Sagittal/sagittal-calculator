import { Id, Maybe, Zone } from "../../../../../../src/general"
import { JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS, SagittalComma, SymbolClass } from "../../../../../../src/sagittal"
import { JiNotationLevel } from "../../../../../../src/sagittal/notations/ji"
import { computeCaptureZone } from "../../../../../../src/sagittal/notations/ji/captureZone"

describe("capture zones", (): void => {
    it("Medium JI notation level capture zones check out", (): void => {
        const actual = JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.MEDIUM ]
            .map((mediumLevelSymbolClassId: Id<SymbolClass>): Maybe<Zone> => {
                return computeCaptureZone(mediumLevelSymbolClassId, JiNotationLevel.MEDIUM)
            })

        const expected = [
            [{ cents: 0.000000 }, { cents: 2.740244 }],
            [{ cents: 2.740244 }, { cents: 8.080207 }],
            [{ cents: 8.080207 }, { cents: 13.420170 }],
            [{ cents: 13.420170 }, { cents: 18.760133 }],
            [{ cents: 18.760133 }, { cents: 24.662198 }],
            [{ cents: 24.662198 }, { cents: 30.002161 }],
            [{ cents: 30.002161 }, { cents: 35.118091 }],
            [{ cents: 35.118091 }, { cents: 40.260512 }],
            [{ cents: 40.260512 }, { cents: 45.112497 }],
            [{ cents: 45.112497 }, { cents: 51.219540 }],
            [{ cents: 51.219540 }, { cents: 56.842503 }],
            [{ cents: 56.842503 }, { cents: 62.465465 }],
            [{ cents: 62.465465 }, { cents: 68.572508 }],
        ] as Array<Zone<SagittalComma>>
        expected.forEach((zone: Zone, index: number): void => {
            expect(actual[ index ]![ 0 ].cents).toBeCloseToTyped(zone[ 0 ].cents)
            expect(actual[ index ]![ 1 ].cents).toBeCloseToTyped(zone[ 1 ].cents)
        })
    })

    it("High JI notation level capture zones check out", (): void => {
        const actual = JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.HIGH ]
            .map((highLevelSymbolClassId: Id<SymbolClass>): Maybe<Zone> => {
                return computeCaptureZone(highLevelSymbolClassId, JiNotationLevel.HIGH)
            })

        const expected = [
            [{ cents: 0.000000 }, { cents: 1.194465 }],
            [{ cents: 1.194465 }, { cents: 4.567073 }],
            [{ cents: 4.567073 }, { cents: 6.534428 }],
            [{ cents: 6.534428 }, { cents: 9.063884 }],
            [{ cents: 9.063884 }, { cents: 11.031239 }],
            [{ cents: 11.031239 }, { cents: 13.420170 }],
            [{ cents: 13.420170 }, { cents: 15.387525 }],
            [{ cents: 15.387525 }, { cents: 17.354880 }],
            [{ cents: 17.354880 }, { cents: 18.760133 }],
            [{ cents: 18.760133 }, { cents: 20.305912 }],
            [{ cents: 20.305912 }, { cents: 22.694843 }],
            [{ cents: 22.694843 }, { cents: 26.067451 }],
            [{ cents: 26.067451 }, { cents: 28.596908 }],
            [{ cents: 28.596908 }, { cents: 30.985839 }],
            [{ cents: 30.985839 }, { cents: 32.391092 }],
            [{ cents: 32.391092 }, { cents: 34.358447 }],
            [{ cents: 34.358447 }, { cents: 37.309479 }],
            [{ cents: 37.309479 }, { cents: 38.061940 }],
            [{ cents: 38.061940 }, { cents: 39.698410 }],
            [{ cents: 39.698410 }, { cents: 41.665765 }],
            [{ cents: 41.665765 }, { cents: 45.112497 }],
            [{ cents: 45.112497 }, { cents: 47.567830 }],
            [{ cents: 47.567830 }, { cents: 49.535184 }],
            [{ cents: 49.535184 }, { cents: 51.924115 }],
            [{ cents: 51.924115 }, { cents: 53.891470 }],
            [{ cents: 53.891470 }, { cents: 55.858825 }],
            [{ cents: 55.858825 }, { cents: 57.826180 }],
            [{ cents: 57.826180 }, { cents: 59.793535 }],
            [{ cents: 59.793535 }, { cents: 61.760890 }],
            [{ cents: 61.760890 }, { cents: 64.149821 }],
            [{ cents: 64.149821 }, { cents: 66.117175 }],
            [{ cents: 66.117175 }, { cents: 68.572508 }],
        ] as Array<Zone<SagittalComma>>
        expected.forEach((zone: Zone, index: number): void => {
            expect(actual[ index ]![ 0 ].cents).toBeCloseToTyped(zone[ 0 ].cents)
            expect(actual[ index ]![ 1 ].cents).toBeCloseToTyped(zone[ 1 ].cents)
        })
    })

    it("Ultra JI notation level capture zones check out", (): void => {
        const actual = JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.ULTRA ]
            .map((ultraLevelSymbolClassId: Id<SymbolClass>): Maybe<Zone> => {
                return computeCaptureZone(ultraLevelSymbolClassId, JiNotationLevel.ULTRA)
            })

        const expected = [
            [{ cents: 0.000000 }, { cents: 1.194465 }],
            [{ cents: 1.194465 }, { cents: 1.756566 }],
            [{ cents: 1.756566 }, { cents: 2.740244 }],
            [{ cents: 2.740244 }, { cents: 4.567073 }],
            [{ cents: 4.567073 }, { cents: 6.534428 }],
            [{ cents: 6.534428 }, { cents: 7.096530 }],
            [{ cents: 7.096530 }, { cents: 8.080207 }],
            [{ cents: 8.080207 }, { cents: 9.063884 }],
            [{ cents: 9.063884 }, { cents: 11.031239 }],
            [{ cents: 11.031239 }, { cents: 12.014917 }],
            [{ cents: 12.014917 }, { cents: 12.436493 }],
            [{ cents: 12.436493 }, { cents: 13.420170 }],
            [{ cents: 13.420170 }, { cents: 15.387525 }],
            [{ cents: 15.387525 }, { cents: 17.354880 }],
            [{ cents: 17.354880 }, { cents: 18.760133 }],
            [{ cents: 18.760133 }, { cents: 19.743811 }],
            [{ cents: 19.743811 }, { cents: 20.305912 }],
            [{ cents: 20.305912 }, { cents: 22.694843 }],
            [{ cents: 22.694843 }, { cents: 23.116419 }],
            [{ cents: 23.116419 }, { cents: 23.955448 }],
            [{ cents: 23.955448 }, { cents: 24.885981 }],
            [{ cents: 24.885981 }, { cents: 26.067451 }],
            [{ cents: 26.067451 }, { cents: 28.596908 }],
            [{ cents: 28.596908 }, { cents: 30.002161 }],
            [{ cents: 30.002161 }, { cents: 30.985839 }],
            [{ cents: 30.985839 }, { cents: 31.407415 }],
            [{ cents: 31.407415 }, { cents: 32.391092 }],
            [{ cents: 32.391092 }, { cents: 34.358447 }],
            [{ cents: 34.358447 }, { cents: 35.118091 }],
            [{ cents: 35.118091 }, { cents: 36.325802 }],
            [{ cents: 36.325802 }, { cents: 37.309479 }],
            [{ cents: 37.309479 }, { cents: 37.871581 }],
            [{ cents: 37.871581 }, { cents: 38.061940 }],
            [{ cents: 38.061940 }, { cents: 39.698410 }],
            [{ cents: 39.698410 }, { cents: 40.260512 }],
            [{ cents: 40.260512 }, { cents: 41.665765 }],
            [{ cents: 41.665765 }, { cents: 44.195221 }],
            [{ cents: 44.195221 }, { cents: 45.112497 }],
            [{ cents: 45.112497 }, { cents: 47.567830 }],
            [{ cents: 47.567830 }, { cents: 49.535184 }],
            [{ cents: 49.535184 }, { cents: 49.956761 }],
            [{ cents: 49.956761 }, { cents: 51.219540 }],
            [{ cents: 51.219540 }, { cents: 51.924115 }],
            [{ cents: 51.924115 }, { cents: 53.891470 }],
            [{ cents: 53.891470 }, { cents: 55.095545 }],
            [{ cents: 55.095545 }, { cents: 55.858825 }],
            [{ cents: 55.858825 }, { cents: 57.826180 }],
            [{ cents: 57.826180 }, { cents: 58.589460 }],
            [{ cents: 58.589460 }, { cents: 59.793535 }],
            [{ cents: 59.793535 }, { cents: 61.760890 }],
            [{ cents: 61.760890 }, { cents: 62.465465 }],
            [{ cents: 62.465465 }, { cents: 63.728245 }],
            [{ cents: 63.728245 }, { cents: 64.149821 }],
            [{ cents: 64.149821 }, { cents: 66.117175 }],
            [{ cents: 66.117175 }, { cents: 68.572508 }],
        ] as Array<Zone<SagittalComma>>
        expected.forEach((zone: Zone, index: number): void => {
            expect(actual[ index ]![ 0 ].cents).toBeCloseToTyped(zone[ 0 ].cents)
            expect(actual[ index ]![ 1 ].cents).toBeCloseToTyped(zone[ 1 ].cents)
        })
    })

    it("Extreme JI notation level capture zones check out", (): void => {

        const actual = JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.EXTREME ]
            .map((extremeLevelSymbolClassId: Id<SymbolClass>): Maybe<Zone> => {
                return computeCaptureZone(extremeLevelSymbolClassId, JiNotationLevel.EXTREME)
            })

        const expected = [
            [{ cents: 0.000000 }, { cents: 0.210788 }],
            [{ cents: 0.210788 }, { cents: 0.772889 }],
            [{ cents: 0.772889 }, { cents: 1.194465 }],
            [{ cents: 1.194465 }, { cents: 1.756566 }],
            [{ cents: 1.756566 }, { cents: 2.178142 }],
            [{ cents: 2.178142 }, { cents: 2.740244 }],
            [{ cents: 2.740244 }, { cents: 3.161820 }],
            [{ cents: 3.161820 }, { cents: 3.723921 }],
            [{ cents: 3.723921 }, { cents: 4.145497 }],
            [{ cents: 4.145497 }, { cents: 4.567073 }],
            [{ cents: 4.567073 }, { cents: 5.129175 }],
            [{ cents: 5.129175 }, { cents: 5.550751 }],
            [{ cents: 5.550751 }, { cents: 6.112852 }],
            [{ cents: 6.112852 }, { cents: 6.534428 }],
            [{ cents: 6.534428 }, { cents: 7.096530 }],
            [{ cents: 7.096530 }, { cents: 7.518106 }],
            [{ cents: 7.518106 }, { cents: 8.080207 }],
            [{ cents: 8.080207 }, { cents: 8.501783 }],
            [{ cents: 8.501783 }, { cents: 9.063884 }],
            [{ cents: 9.063884 }, { cents: 9.485460 }],
            [{ cents: 9.485460 }, { cents: 10.047562 }],
            [{ cents: 10.047562 }, { cents: 10.469138 }],
            [{ cents: 10.469138 }, { cents: 11.031239 }],
            [{ cents: 11.031239 }, { cents: 11.452815 }],
            [{ cents: 11.452815 }, { cents: 12.014917 }],
            [{ cents: 12.014917 }, { cents: 12.436493 }],
            [{ cents: 12.436493 }, { cents: 12.998594 }],
            [{ cents: 12.998594 }, { cents: 13.420170 }],
            [{ cents: 13.420170 }, { cents: 13.841746 }],
            [{ cents: 13.841746 }, { cents: 14.403848 }],
            [{ cents: 14.403848 }, { cents: 14.825424 }],
            [{ cents: 14.825424 }, { cents: 15.387525 }],
            [{ cents: 15.387525 }, { cents: 15.809101 }],
            [{ cents: 15.809101 }, { cents: 16.371202 }],
            [{ cents: 16.371202 }, { cents: 16.792779 }],
            [{ cents: 16.792779 }, { cents: 17.354880 }],
            [{ cents: 17.354880 }, { cents: 17.776456 }],
            [{ cents: 17.776456 }, { cents: 18.338557 }],
            [{ cents: 18.338557 }, { cents: 18.760133 }],
            [{ cents: 18.760133 }, { cents: 19.322235 }],
            [{ cents: 19.322235 }, { cents: 19.743811 }],
            [{ cents: 19.743811 }, { cents: 20.305912 }],
            [{ cents: 20.305912 }, { cents: 20.727488 }],
            [{ cents: 20.727488 }, { cents: 21.289590 }],
            [{ cents: 21.289590 }, { cents: 21.711166 }],
            [{ cents: 21.711166 }, { cents: 22.132742 }],
            [{ cents: 22.132742 }, { cents: 22.694843 }],
            [{ cents: 22.694843 }, { cents: 23.116419 }],
            [{ cents: 23.116419 }, { cents: 23.678521 }],
            [{ cents: 23.678521 }, { cents: 23.955448 }],
            [{ cents: 23.955448 }, { cents: 24.100097 }],
            [{ cents: 24.100097 }, { cents: 24.662198 }],
            [{ cents: 24.662198 }, { cents: 24.885981 }],
            [{ cents: 24.885981 }, { cents: 25.083774 }],
            [{ cents: 25.083774 }, { cents: 25.645875 }],
            [{ cents: 25.645875 }, { cents: 26.067451 }],
            [{ cents: 26.067451 }, { cents: 26.629553 }],
            [{ cents: 26.629553 }, { cents: 27.051129 }],
            [{ cents: 27.051129 }, { cents: 27.613230 }],
            [{ cents: 27.613230 }, { cents: 28.034806 }],
            [{ cents: 28.034806 }, { cents: 28.596908 }],
            [{ cents: 28.596908 }, { cents: 29.018484 }],
            [{ cents: 29.018484 }, { cents: 29.580585 }],
            [{ cents: 29.580585 }, { cents: 30.002161 }],
            [{ cents: 30.002161 }, { cents: 30.564263 }],
            [{ cents: 30.564263 }, { cents: 30.985839 }],
            [{ cents: 30.985839 }, { cents: 31.407415 }],
            [{ cents: 31.407415 }, { cents: 31.969516 }],
            [{ cents: 31.969516 }, { cents: 32.391092 }],
            [{ cents: 32.391092 }, { cents: 32.953193 }],
            [{ cents: 32.953193 }, { cents: 33.374770 }],
            [{ cents: 33.374770 }, { cents: 33.936871 }],
            [{ cents: 33.936871 }, { cents: 34.358447 }],
            [{ cents: 34.358447 }, { cents: 34.920548 }],
            [{ cents: 34.920548 }, { cents: 35.118091 }],
            [{ cents: 35.118091 }, { cents: 35.342124 }],
            [{ cents: 35.342124 }, { cents: 35.904226 }],
            [{ cents: 35.904226 }, { cents: 36.325802 }],
            [{ cents: 36.325802 }, { cents: 36.887903 }],
            [{ cents: 36.887903 }, { cents: 37.309479 }],
            [{ cents: 37.309479 }, { cents: 37.871581 }],
            [{ cents: 37.871581 }, { cents: 38.061940 }],
            [{ cents: 38.061940 }, { cents: 38.293157 }],
            [{ cents: 38.293157 }, { cents: 38.855258 }],
            [{ cents: 38.855258 }, { cents: 39.276834 }],
            [{ cents: 39.276834 }, { cents: 39.698410 }],
            [{ cents: 39.698410 }, { cents: 40.260512 }],
            [{ cents: 40.260512 }, { cents: 40.682088 }],
            [{ cents: 40.682088 }, { cents: 41.244189 }],
            [{ cents: 41.244189 }, { cents: 41.665765 }],
            [{ cents: 41.665765 }, { cents: 42.227866 }],
            [{ cents: 42.227866 }, { cents: 42.649442 }],
            [{ cents: 42.649442 }, { cents: 43.211544 }],
            [{ cents: 43.211544 }, { cents: 43.633120 }],
            [{ cents: 43.633120 }, { cents: 44.195221 }],
            [{ cents: 44.195221 }, { cents: 44.616797 }],
            [{ cents: 44.616797 }, { cents: 45.112497 }],
            [{ cents: 45.112497 }, { cents: 45.600475 }],
            [{ cents: 45.600475 }, { cents: 46.162576 }],
            [{ cents: 46.162576 }, { cents: 46.584152 }],
            [{ cents: 46.584152 }, { cents: 47.146254 }],
            [{ cents: 47.146254 }, { cents: 47.567830 }],
            [{ cents: 47.567830 }, { cents: 48.129931 }],
            [{ cents: 48.129931 }, { cents: 48.551507 }],
            [{ cents: 48.551507 }, { cents: 48.973083 }],
            [{ cents: 48.973083 }, { cents: 49.535184 }],
            [{ cents: 49.535184 }, { cents: 49.956761 }],
            [{ cents: 49.956761 }, { cents: 50.518862 }],
            [{ cents: 50.518862 }, { cents: 50.940438 }],
            [{ cents: 50.940438 }, { cents: 51.219540 }],
            [{ cents: 51.219540 }, { cents: 51.502539 }],
            [{ cents: 51.502539 }, { cents: 51.924115 }],
            [{ cents: 51.924115 }, { cents: 52.486217 }],
            [{ cents: 52.486217 }, { cents: 52.907793 }],
            [{ cents: 52.907793 }, { cents: 53.469894 }],
            [{ cents: 53.469894 }, { cents: 53.891470 }],
            [{ cents: 53.891470 }, { cents: 54.453572 }],
            [{ cents: 54.453572 }, { cents: 54.875148 }],
            [{ cents: 54.875148 }, { cents: 55.095545 }],
            [{ cents: 55.095545 }, { cents: 55.437249 }],
            [{ cents: 55.437249 }, { cents: 55.858825 }],
            [{ cents: 55.858825 }, { cents: 56.420926 }],
            [{ cents: 56.420926 }, { cents: 56.842503 }],
            [{ cents: 56.842503 }, { cents: 57.264079 }],
            [{ cents: 57.264079 }, { cents: 57.826180 }],
            [{ cents: 57.826180 }, { cents: 58.247756 }],
            [{ cents: 58.247756 }, { cents: 58.589460 }],
            [{ cents: 58.589460 }, { cents: 58.809857 }],
            [{ cents: 58.809857 }, { cents: 59.231433 }],
            [{ cents: 59.231433 }, { cents: 59.793535 }],
            [{ cents: 59.793535 }, { cents: 60.215111 }],
            [{ cents: 60.215111 }, { cents: 60.777212 }],
            [{ cents: 60.777212 }, { cents: 61.198788 }],
            [{ cents: 61.198788 }, { cents: 61.760890 }],
            [{ cents: 61.760890 }, { cents: 62.182466 }],
            [{ cents: 62.182466 }, { cents: 62.465465 }],
            [{ cents: 62.465465 }, { cents: 62.744567 }],
            [{ cents: 62.744567 }, { cents: 63.166143 }],
            [{ cents: 63.166143 }, { cents: 63.728245 }],
            [{ cents: 63.728245 }, { cents: 64.149821 }],
            [{ cents: 64.149821 }, { cents: 64.711922 }],
            [{ cents: 64.711922 }, { cents: 65.133498 }],
            [{ cents: 65.133498 }, { cents: 65.555074 }],
            [{ cents: 65.555074 }, { cents: 66.117175 }],
            [{ cents: 66.117175 }, { cents: 66.538752 }],
            [{ cents: 66.538752 }, { cents: 67.100853 }],
            [{ cents: 67.100853 }, { cents: 67.522429 }],
            [{ cents: 67.522429 }, { cents: 68.084530 }],
            [{ cents: 68.084530 }, { cents: 68.572508 }],
        ] as Array<Zone<SagittalComma>>
        expected.forEach((zone: Zone, index: number): void => {
            expect(actual[ index ]![ 0 ].cents).toBeCloseToTyped(zone[ 0 ].cents)
            expect(actual[ index ]![ 1 ].cents).toBeCloseToTyped(zone[ 1 ].cents)
        })
    })
})
