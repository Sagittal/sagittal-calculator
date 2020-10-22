import {
    computeAccidentalAscii,
    computeAccidentalSmiley,
    computeAccidentalUnicode,
} from "../../../../../src/sagittal/accidental"
import {computeEvoAccidentalFromFlacombo} from "../../../../../src/sagittal/accidental/flavor/evo"
import {computeRevoAccidentalFromFlacombo} from "../../../../../src/sagittal/accidental/flavor/revo"
import {Flacombo} from "../../../../../src/sagittal/notations"
import {AccidentalExpectation} from "./types"

const computeAccidentalExpectation = (flacombo: Flacombo): AccidentalExpectation => {
    const evoAccidental = computeEvoAccidentalFromFlacombo(flacombo)
    const evoUnicode = computeAccidentalUnicode(evoAccidental)
    const evoAscii = computeAccidentalAscii(evoAccidental)
    const evoSmiley = computeAccidentalSmiley(evoAccidental)

    const revoAccidental = computeRevoAccidentalFromFlacombo(flacombo)
    const revoUnicode = computeAccidentalUnicode(revoAccidental)
    const revoAscii = computeAccidentalAscii(revoAccidental)
    const revoSmiley = computeAccidentalSmiley(revoAccidental)

    return {
        // Todo: BLOCKED ON FLACOMBO, SECTION, NOTATION GENERATION
        //  I think we could put the flacombo on here, and/or the Section
        //  And create a new test type that contains unicode, ascii, & smiley, and have one each for evo and revo
        //  And that type would be the one which is parameterized by flavor
        //  But let's wait on that until the dust settles with the flacombo/section structure
        evoUnicode,
        evoAscii,
        // EvoSmiley,
        revoUnicode,
        revoAscii,
        // RevoSmiley,
    }
}

export {
    computeAccidentalExpectation,
}
