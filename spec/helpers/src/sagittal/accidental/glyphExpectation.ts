import {Aim, Compatible, computeCoreUnicode, Core, CoreName} from "../../../../../src/sagittal/accidental"
import {Accent, Orientation} from "../../../../../src/sagittal/accidental/flacco"
import {
    computeCompatibleAscii,
    computeCompatibleSmiley,
    computeCompatibleUnicode,
    computeCoreAscii,
    computeCoreSmiley,
    computeOrientedAccentAscii,
    computeOrientedAccentSmiley,
    computeOrientedAccentUnicode,
} from "../../../../../src/sagittal/accidental/io"
import {GlyphExpectation} from "./types"

const computeCoreGlyphExpectation = ([name, core]: [CoreName, Core]): GlyphExpectation =>
    ({
        name,
        ascii: computeCoreAscii(core),
        unicode: computeCoreUnicode(core),
        smiley: computeCoreSmiley(core),
    })

const computeAccentGlyphExpectation = (accent: Accent, orientation: Orientation, aim: Aim): GlyphExpectation =>
    ({
        name: accent,
        ascii: computeOrientedAccentAscii({accent, orientation}, aim),
        unicode: computeOrientedAccentUnicode({accent, orientation}, aim),
        smiley: computeOrientedAccentSmiley({accent, orientation}, aim),
    })

const computeCompatibleGlyphExpectation = (compatible: Compatible): GlyphExpectation =>
    ({
        name: compatible,
        ascii: computeCompatibleAscii(compatible),
        unicode: computeCompatibleUnicode(compatible),
        smiley: computeCompatibleSmiley(compatible),
    })

export {
    computeCoreGlyphExpectation,
    computeAccentGlyphExpectation,
    computeCompatibleGlyphExpectation,
}
