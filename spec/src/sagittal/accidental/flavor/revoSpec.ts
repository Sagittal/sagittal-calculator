import {Accidental, FlaccoId, Flavor} from "../../../../../src/sagittal/accidental"
import {HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {computeRevoAccidentalFromCaptureZone} from "../../../../../src/sagittal/accidental/flavor/revo"
import {getCore} from "../../../../../src/sagittal/accidental/symbol"
import {BoundClassId} from "../../../../../src/sagittal/bound"
import {CommaClassId} from "../../../../../src/sagittal/ji/comma"
import {Section} from "../../../../../src/sagittal/notations"

describe("computeRevoAccidentalFromCaptureZone", (): void => {
    it("works for section U1A", (): void => {
        const captureZone = {
            boundClassId: BoundClassId.MINA_88,
            commaClassId: CommaClassId._1_25_S,
            negated: false,
            shifted: false,
            section: Section.A,
            flaccoId: FlaccoId.DOUBLE_LEFT_BARB,
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
