import {
    computeAccidentalAscii,
    computeAccidentalSmiley,
    computeAccidentalUnicode,
} from "../../../../../../src/sagittal/accidental"
import {computeEvoAccidentalFromCaptureZone} from "../../../../../../src/sagittal/accidental/flavor/evo"
import {computeRevoAccidentalFromCaptureZone} from "../../../../../../src/sagittal/accidental/flavor/revo"
import {CaptureZone} from "../../../../../../src/sagittal/notation"
import {FlavorsExpectation} from "./types"

const computeFlavorsExpectation = ({ symbolClassId, section }: CaptureZone): FlavorsExpectation => {
    const evoAccidental = computeEvoAccidentalFromCaptureZone(symbolClassId, section)
    const evo = {
        unicode: computeAccidentalUnicode(evoAccidental),
        ascii: computeAccidentalAscii(evoAccidental),
        smiley: computeAccidentalSmiley(evoAccidental),
    }

    const revoAccidental = computeRevoAccidentalFromCaptureZone(symbolClassId, section)
    const revo = {
        unicode: computeAccidentalUnicode(revoAccidental),
        ascii: computeAccidentalAscii(revoAccidental),
        smiley: computeAccidentalSmiley(revoAccidental),
    }

    return {
        evo,
        revo,
    }
}

export {
    computeFlavorsExpectation,
}
