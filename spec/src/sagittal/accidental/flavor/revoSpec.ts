import {Accidental, Flavor, SymbolClassId} from "../../../../../src/sagittal/accidental"
import {HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {computeRevoAccidentalFromCaptureZone} from "../../../../../src/sagittal/accidental/flavor/revo"
import {getCore} from "../../../../../src/sagittal/accidental/symbol"
import {BoundClassId} from "../../../../../src/sagittal/bound"
import {CaptureZone} from "../../../../../src/sagittal/notations"

describe("computeRevoAccidentalFromCaptureZone", (): void => {
    it("works for section P1A", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_88,
            section: {
                negated: false,
                shifted: false,
                mirrored: false,
            },
            symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
        }

        const actual = computeRevoAccidentalFromCaptureZone(captureZone)

        const expected = {
            core: getCore(HeadId.DOUBLE_LEFT_BARB),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    // Todo: BLOCKED ON FLACOMBO, SECTION, NOTATION GENERATION (JUST TESTING)
    //  Add specs for the other 11 sections, but wait until sort it out (and make sure to update test descriptions)
})
