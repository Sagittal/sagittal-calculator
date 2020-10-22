import {Apotome, Count, Direction, Id} from "../../../../../src/general"
import {Accidental, CoreName, CORES, Flacco, Flavor} from "../../../../../src/sagittal/accidental"
import {computeRevoAccidentalFromFlacombo} from "../../../../../src/sagittal/accidental/flavor/revo"
import {CommaClass} from "../../../../../src/sagittal/ji/comma"
import {BoundClass} from "../../../../../src/sagittal/notations"

describe("computeRevoAccidentalFromFlacombo", (): void => {
    it("works for section U1A", (): void => {
        const flacombo = {
            boundClassId: 92 as Id<BoundClass>,
            commaClassId: 92 as Id<CommaClass>,
            commaDirection: Direction.SUPER,
            apotomeCount: 0 as Count<Apotome>,
            flaccoId: 92 as Id<Flacco>,
        }

        const actual = computeRevoAccidentalFromFlacombo(flacombo)

        const expected = {
            core: CORES[CoreName.DOUBLE_LEFT_BARB_UP],
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    // Todo: BLOCKED ON FLACOMBO, SECTION, NOTATION GENERATION
    //  Add specs for the other 11 sections, but wait until sort it out (and make sure to update test descriptions)
})
