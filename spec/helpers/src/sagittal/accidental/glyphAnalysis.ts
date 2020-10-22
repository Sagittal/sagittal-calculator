import {Compatible, computeUnicodeFromGlyph, CoreName, Glyph} from "../../../../../src/sagittal/accidental"
import {computeAsciiFromGlyph, computeSmileyFromGlyph} from "../../../../../src/sagittal/accidental/io"
import {computeAsciiFromCompatible} from "../../../../../src/sagittal/accidental/io/ascii"
import {computeSmileyFromCompatible} from "../../../../../src/sagittal/accidental/io/smiley"
import {computeUnicodeFromCompatible} from "../../../../../src/sagittal/accidental/io/unicode"
import {GlyphAnalysis} from "./types"

const analyzeGlyphEntry = ([name, glyph]: [CoreName, Glyph]): GlyphAnalysis =>
    ({
        name,
        ascii: computeAsciiFromGlyph(glyph),
        unicode: computeUnicodeFromGlyph(glyph),
        smiley: computeSmileyFromGlyph(glyph),
    })

const analyzeCompatible = (compatible: Compatible): GlyphAnalysis =>
    ({
        name: compatible,
        ascii: computeAsciiFromCompatible(compatible),
        unicode: computeUnicodeFromCompatible(compatible),
        smiley: computeSmileyFromCompatible(compatible),
    })

export {
    analyzeGlyphEntry,
    analyzeCompatible,
}
