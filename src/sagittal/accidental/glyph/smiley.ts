import {deepEquals, isUndefined, join, Maybe, sumTexts} from "@sagittal/general"
import {Accent, Arm} from "../flacco"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Core, Sagittal} from "../sagittal"
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

const computeSagittalSmiley = (sagittal: Maybe<Sagittal>): Smiley => {
    if (isUndefined(sagittal)) return PARENTHETICAL_NATURAL_SMILEY
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

const computeAccidentalSmiley = <T extends Maybe<Flavor> = undefined>(
    accidental: Accidental<T>,
): Smiley<T> => {
    if (isUndefined(accidental)) return PARENTHETICAL_NATURAL_SMILEY as Smiley<T>
    const {arm, compatible, ...core} = accidental

    const armSmiley = isUndefined(arm) ?
        BLANK_SMILEY :
        computeArmSmiley(arm, core.down)

    const coreSmiley = deepEquals(core, {} as Core) ?
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
