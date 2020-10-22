import {Aim, Compatible, computeCoreUnicode, Core, CoreName} from "../../../../../src/sagittal/accidental"
import {Accent} from "../../../../../src/sagittal/accidental/flacco"
import {
    computeAccentAscii,
    computeAccentSmiley,
    computeAccentUnicode,
    computeCompatibleAscii,
    computeCompatibleSmiley,
    computeCompatibleUnicode,
    computeCoreAscii,
    computeCoreSmiley,
} from "../../../../../src/sagittal/accidental/io"
import {GlyphExpectation} from "./types"

const computeCoreGlyphExpectation = ([name, core]: [CoreName, Core]): GlyphExpectation =>
    ({
        name,
        ascii: computeCoreAscii(core),
        unicode: computeCoreUnicode(core),
        smiley: computeCoreSmiley(core),
    })

const computeAccentGlyphExpectation = (accent: Accent, aim: Aim): GlyphExpectation =>
    ({
        name: accent,
        ascii: computeAccentAscii(accent, aim),
        unicode: computeAccentUnicode(accent, aim),
        smiley: computeAccentSmiley(accent, aim),
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
