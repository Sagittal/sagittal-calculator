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
    const evo = {
        unicode: computeAccidentalUnicode(evoAccidental),
        ascii: computeAccidentalAscii(evoAccidental),
        smiley: computeAccidentalSmiley(evoAccidental),
    }

    const revoAccidental = computeRevoAccidentalFromFlacombo(flacombo)
    const revo = {
        unicode: computeAccidentalUnicode(revoAccidental),
        ascii: computeAccidentalAscii(revoAccidental),
        smiley: computeAccidentalSmiley(revoAccidental),
    }

    return {
        // Todo: BLOCKED ON FLACOMBO, SECTION, NOTATION GENERATION (JUST TESTING)
        //  I think we could put the flacombo on here, and/or the Section
        evo,
        revo,
    }
}

export {
    computeAccidentalExpectation,
}
