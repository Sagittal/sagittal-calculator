import {Maybe} from "../../../../../src/general/code"
import {camelCaseToConstantCase} from "../../../../../src/general/code/case"
import {Aim, Compatible, computeCoreUnicode} from "../../../../../src/sagittal/accidental"
import {Accent, FlagComboName, Orientation} from "../../../../../src/sagittal/accidental/flacco"
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
import {Shafts} from "../../../../../src/sagittal/accidental/symbol"
import {getCore} from "../../../../../src/sagittal/accidental/symbol/core"
import {GlyphExpectation} from "./types"

const computeCoreGlyphExpectation = (
    flagComboName: FlagComboName,
    shafts: Shafts,
    aim: Aim
): Maybe<GlyphExpectation> => {
    try {
        const core = getCore(flagComboName, shafts, aim)

        const nameArray = [camelCaseToConstantCase(flagComboName)] as string[]
        if (shafts !== Shafts.SINGLE) nameArray.push(camelCaseToConstantCase(shafts))
        nameArray.push(camelCaseToConstantCase(aim))

        return {
            name: nameArray.join("_"),
            ascii: computeCoreAscii(core),
            unicode: computeCoreUnicode(core),
            smiley: computeCoreSmiley(core),
        }
    } catch (e) {
        return undefined
    }
}

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
