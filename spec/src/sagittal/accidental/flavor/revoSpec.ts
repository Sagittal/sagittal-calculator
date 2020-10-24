import {Id} from "../../../../../src/general"
import {Accidental, Flacco, Flavor} from "../../../../../src/sagittal/accidental"
import {HeadName} from "../../../../../src/sagittal/accidental/flacco"
import {computeRevoAccidentalFromFlacombo} from "../../../../../src/sagittal/accidental/flavor/revo"
import {getCore} from "../../../../../src/sagittal/accidental/symbol"
import {CommaClass} from "../../../../../src/sagittal/ji/comma"
import {BoundClass, Section} from "../../../../../src/sagittal/notations"

describe("computeRevoAccidentalFromFlacombo", (): void => {
    it("works for section U1A", (): void => {
        const flacombo = {
            boundClassId: 92 as Id<BoundClass>,
            commaClassId: 92 as Id<CommaClass>,
            negated: false,
            shifted: false,
            section: Section.A,
            flaccoId: 92 as Id<Flacco>,
        }

        const actual = computeRevoAccidentalFromFlacombo(flacombo)

        const expected = {
            core: getCore(HeadName.DOUBLE_LEFT_BARB),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    // Todo: BLOCKED ON FLACOMBO, SECTION, NOTATION GENERATION (JUST TESTING)
    //  Add specs for the other 11 sections, but wait until sort it out (and make sure to update test descriptions)
})
