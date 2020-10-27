import {isUndefined, join, sumTexts} from "../../../general"
import {Arm, OrientedAccent} from "../flacco"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Aim, Core, isSagittal, NullSagittal, Sagittal} from "../sagittal"
import {computeCompatibleAscii, computeCoreAscii, computeOrientedAccentAscii} from "./ascii"
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

const computeOrientedAccentSmiley = (orientedAccent: OrientedAccent, aim: Aim): Smiley =>
    convertAsciiToSmiley(computeOrientedAccentAscii(orientedAccent, aim))

const computeSagittalSmiley = (sagittal: NullSagittal | Sagittal): Smiley => {
    if (!isSagittal(sagittal)) return PARENTHETICAL_NATURAL_SMILEY
    const {arm, ...core} = sagittal

    const armSmiley = isUndefined(arm) ? BLANK_SMILEY : computeArmSmiley(arm, core.aim)
    const coreSmiley = computeCoreSmiley(core)

    return sumTexts(armSmiley, coreSmiley)
}

const computeArmSmiley = (arm: Arm, aim: Aim): Smiley =>
    join(
        arm.map((orientedAccent: OrientedAccent): Smiley => computeOrientedAccentSmiley(orientedAccent, aim)),
        BLANK_ASCII,
    )

const computeAccidentalSmiley = <T extends Flavor>({compatible, ...sagittal}: Accidental<T>): Smiley<T> => {
    const {arm, ...core} = sagittal

    const armSmiley = isUndefined(arm) ?
        BLANK_SMILEY :
        computeArmSmiley(arm, core.aim)

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
    computeOrientedAccentSmiley,
}
