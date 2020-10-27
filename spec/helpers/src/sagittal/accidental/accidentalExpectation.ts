import {
    computeAccidentalAscii,
    computeAccidentalSmiley,
    computeAccidentalUnicode,
} from "../../../../../src/sagittal/accidental"
import {computeEvoAccidentalFromCaptureZone} from "../../../../../src/sagittal/accidental/flavor/evo"
import {computeRevoAccidentalFromCaptureZone} from "../../../../../src/sagittal/accidental/flavor/revo"
import {CaptureZone} from "../../../../../src/sagittal/notation"
import {AccidentalExpectation} from "./types"

const computeAccidentalExpectation = (captureZone: CaptureZone): AccidentalExpectation => {
    const evoAccidental = computeEvoAccidentalFromCaptureZone(captureZone)
    const evo = {
        unicode: computeAccidentalUnicode(evoAccidental),
        ascii: computeAccidentalAscii(evoAccidental),
        smiley: computeAccidentalSmiley(evoAccidental),
    }

    const revoAccidental = computeRevoAccidentalFromCaptureZone(captureZone)
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
    computeAccidentalExpectation,
}
