import {Maybe} from "../../../../../src/general/code"
import {Aim, Compatible, computeCoreUnicode} from "../../../../../src/sagittal/accidental"
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
    shafts: Shafts = Shafts.SINGLE,
    aim: Aim = Aim.UP,
): Maybe<GlyphExpectation> => {
    try {
        const core = getCore(headId, shafts, aim)

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
    aim: Aim = Aim.UP,
): GlyphExpectation =>
    ({
        ascii: computeAccentAscii({id: accentId, against}, aim),
        unicode: computeAccentUnicode({id: accentId, against}, aim),
        smiley: computeAccentSmiley({id: accentId, against}, aim),
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
