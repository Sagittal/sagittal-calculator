import {Maybe} from "../../../../../src/general/code"
import {Compatible, computeCoreUnicode} from "../../../../../src/sagittal/accidental"
import {AccentId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {
    computeAccentAscii,
    computeAccentSmiley,
    computeAccentUnicode,
    computeCompatibleAscii,
    computeCompatibleSmiley,
    computeCompatibleUnicode,
    computeCoreAscii,
    computeCoreSmiley,
} from "../../../../../src/sagittal/accidental/glyph"
import {getCore, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {GlyphExpectation} from "./types"

const computeCoreGlyphExpectation = (
    headId: HeadId,
    {shafts = Shafts.SINGLE, down = false}: {shafts?: Shafts, down?: boolean} = {},
): Maybe<GlyphExpectation> => {
    try {
        const core = getCore(headId, {shafts, down})

        return {
            ascii: computeCoreAscii(core),
            unicode: computeCoreUnicode(core),
            smiley: computeCoreSmiley(core),
        }
    } catch (e) {
        return undefined
    }
}

const computeAccentGlyphExpectation = (
    accentId: AccentId,
    {against = false}: {against?: boolean} = {},
): GlyphExpectation =>
    ({
        ascii: computeAccentAscii({id: accentId, against}),
        unicode: computeAccentUnicode({id: accentId, against}),
        smiley: computeAccentSmiley({id: accentId, against}),
    })

const computeCompatibleGlyphExpectation = (compatible: Compatible): GlyphExpectation =>
    ({
        ascii: computeCompatibleAscii(compatible),
        unicode: computeCompatibleUnicode(compatible),
        smiley: computeCompatibleSmiley(compatible),
    })

export {
    computeCoreGlyphExpectation,
    computeAccentGlyphExpectation,
    computeCompatibleGlyphExpectation,
}
