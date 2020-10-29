import {isUndefined, join, sumTexts} from "../../../general"
import {Accent, Arm} from "../flacco"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Core, isSagittal, NullSagittal, Sagittal} from "../sagittal"
import {computeAccentAscii, computeCompatibleAscii, computeCoreAscii} from "./ascii"
import {BLANK_ASCII, BLANK_SMILEY, PARENTHETICAL_NATURAL_SMILEY} from "./constants"
import {Ascii, Smiley} from "./types"

const convertAsciiToSmiley = (ascii: Ascii): Smiley => {
    const massagedAscii = ascii
        .replace("|//|", "h")
        .replace(/\/\//g, "/ /")
        .replace(/\\\\/g, "\\ \\")

    return `:${massagedAscii}:` as Smiley
}

const computeCoreSmiley = (core: Core): Smiley =>
    convertAsciiToSmiley(computeCoreAscii(core))

const computeCompatibleSmiley = (compatible: Compatible): Smiley =>
    convertAsciiToSmiley(computeCompatibleAscii(compatible))

const computeAccentSmiley = (accent: Accent, down?: boolean): Smiley =>
    convertAsciiToSmiley(computeAccentAscii(accent, down))

const computeSagittalSmiley = (sagittal: NullSagittal | Sagittal): Smiley => {
    if (!isSagittal(sagittal)) return PARENTHETICAL_NATURAL_SMILEY
    const {arm, ...core} = sagittal

    const armSmiley = isUndefined(arm) ? BLANK_SMILEY : computeArmSmiley(arm, core.down)
    const coreSmiley = computeCoreSmiley(core)

    return sumTexts(armSmiley, coreSmiley)
}

const computeArmSmiley = (arm: Arm, down?: boolean): Smiley =>
    join(
        arm.map((accent: Accent): Smiley => computeAccentSmiley(accent, down)),
        BLANK_ASCII,
    )

const computeAccidentalSmiley = <T extends Flavor>({compatible, ...sagittal}: Accidental<T>): Smiley<T> => {
    const {arm, ...core} = sagittal

    const armSmiley = isUndefined(arm) ?
        BLANK_SMILEY :
        computeArmSmiley(arm, core.down)

    const coreSmiley = !isSagittal(sagittal) ?
        isUndefined(compatible) ? PARENTHETICAL_NATURAL_SMILEY : BLANK_SMILEY :
        computeCoreSmiley(core)

    const compatibleSmiley = isUndefined(compatible) ?
        BLANK_SMILEY :
        computeCompatibleSmiley(compatible)

    return sumTexts(armSmiley, coreSmiley, compatibleSmiley) as Smiley<T>
}

export {
    computeAccidentalSmiley,
    computeCoreSmiley,
    computeCompatibleSmiley,
    computeSagittalSmiley,
    computeAccentSmiley,
}
