import {Aim, Compatible, computeCoreUnicode, Core, CoreName} from "../../../../../src/sagittal/accidental"
import {Accent} from "../../../../../src/sagittal/accidental/flacco"
import {
    computeAccentAscii,
    computeCompatibleAscii,
    computeCoreAscii,
    computeAccentSmiley,
    computeCompatibleSmiley,
    computeCoreSmiley,
    computeAccentUnicode,
    computeCompatibleUnicode,
} from "../../../../../src/sagittal/accidental/io"
import {GlyphAnalysis} from "./types"

const analyzeCoreGlyph = ([name, core]: [CoreName, Core]): GlyphAnalysis =>
    ({
        name,
        ascii: computeCoreAscii(core),
        unicode: computeCoreUnicode(core),
        smiley: computeCoreSmiley(core),
    })

const analyzeAccentGlyph = (accent: Accent, aim: Aim): GlyphAnalysis =>
    ({
        name: accent,
        ascii: computeAccentAscii(accent, aim),
        unicode: computeAccentUnicode(accent, aim),
        smiley: computeAccentSmiley(accent, aim),
    })

const analyzeCompatibleGlyph = (compatible: Compatible): GlyphAnalysis =>
    ({
        name: compatible,
        ascii: computeCompatibleAscii(compatible),
        unicode: computeCompatibleUnicode(compatible),
        smiley: computeCompatibleSmiley(compatible),
    })

export {
    analyzeCoreGlyph,
    analyzeAccentGlyph,
    analyzeCompatibleGlyph,
}
