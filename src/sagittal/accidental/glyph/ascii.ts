import {BLANK, isUndefined, join, sumTexts} from "../../../general"
import {Accent, AccentId, Arm, FlagId} from "../flacco"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Aim, Core, isSagittal, NullSagittal, Sagittal, Shafts} from "../sagittal"
import {BLANK_ASCII, PARENTHETICAL_NATURAL_ASCII} from "./constants"
import {Ascii} from "./types"

const SHAFTS_TO_AIM_TO_ASCII_MAP: Record<Shafts, Record<Aim, Ascii>> = {
    [Shafts.SINGLE]: {[Aim.UP]: "|" as Ascii, [Aim.DOWN]: "!" as Ascii},
    [Shafts.DOUBLE]: {[Aim.UP]: "||" as Ascii, [Aim.DOWN]: "!!" as Ascii},
    [Shafts.TRIPLE]: {[Aim.UP]: "|||" as Ascii, [Aim.DOWN]: "!!!" as Ascii},
    [Shafts.EX]: {[Aim.UP]: "X" as Ascii, [Aim.DOWN]: "Y" as Ascii},
}

const LEFT_FLAG_TO_AIM_TO_ASCII_MAP: Record<FlagId, Record<Aim, Ascii>> = {
    [FlagId.BARB]: {[Aim.UP]: "/" as Ascii, [Aim.DOWN]: "\\" as Ascii},
    [FlagId.ARC]: {[Aim.UP]: "(" as Ascii, [Aim.DOWN]: "(" as Ascii},
    [FlagId.SCROLL]: {[Aim.UP]: ")" as Ascii, [Aim.DOWN]: ")" as Ascii},
    [FlagId.BOATHOOK]: {[Aim.UP]: "~" as Ascii, [Aim.DOWN]: "~" as Ascii},
}

const RIGHT_FLAG_TO_AIM_TO_ASCII_MAP: Record<FlagId, Record<Aim, Ascii>> = {
    [FlagId.BARB]: {[Aim.DOWN]: "/" as Ascii, [Aim.UP]: "\\" as Ascii},
    [FlagId.ARC]: {[Aim.DOWN]: ")" as Ascii, [Aim.UP]: ")" as Ascii},
    [FlagId.SCROLL]: {[Aim.DOWN]: "(" as Ascii, [Aim.UP]: "(" as Ascii},
    [FlagId.BOATHOOK]: {[Aim.DOWN]: "~" as Ascii, [Aim.UP]: "~" as Ascii},
}

const ACCENT_TO_AIM_TO_ASCII_MAP: Record<AccentId, Record<Aim, Ascii>> = {
    [AccentId.TICK]: {[Aim.UP]: "'" as Ascii, [Aim.DOWN]: "." as Ascii,},
    [AccentId.WING]: {[Aim.UP]: "`" as Ascii, [Aim.DOWN]: "," as Ascii,},
    [AccentId.BIRD]: {[Aim.UP]: "``" as Ascii, [Aim.DOWN]: ",," as Ascii,},
}

const AGAINST_ACCENT_TO_AIM_TO_ASCII_MAP: Record<AccentId, Record<Aim, Ascii>> = {
    [AccentId.TICK]: {[Aim.UP]: "." as Ascii, [Aim.DOWN]: "'" as Ascii,},
    [AccentId.WING]: {[Aim.UP]: "," as Ascii, [Aim.DOWN]: "`" as Ascii,},
    [AccentId.BIRD]: {[Aim.UP]: ",," as Ascii, [Aim.DOWN]: "``" as Ascii,},
}

const COMPATIBLE_TO_ASCII_MAP: Record<Compatible, Ascii> = {
    [Compatible.STEIN_SEMISHARP]: ">" as Ascii,
    [Compatible.STEIN_SEMIFLAT]: "<" as Ascii,
    [Compatible.STEIN_SESQUISHARP]: ">#" as Ascii,
    [Compatible.ZIMMERMANN_SESQUIFLAT]: "<b" as Ascii,
    [Compatible.WILSON_PLUS]: "+" as Ascii,
    [Compatible.WILSON_MINUS]: "-" as Ascii,
    [Compatible.NATURAL]: "|//|" as Ascii,
    [Compatible.SHARP]: "#" as Ascii,
    [Compatible.FLAT]: "b" as Ascii,
    [Compatible.DOUBLE_SHARP]: "x" as Ascii,
    [Compatible.DOUBLE_FLAT]: "bb" as Ascii,
}

const computeCoreAscii = ({aim, shafts, left, right}: Core): Ascii => {
    const leftAscii = isUndefined(left) ?
        BLANK_ASCII :
        left.map((flagId: FlagId): Ascii => LEFT_FLAG_TO_AIM_TO_ASCII_MAP[flagId][aim]).join(BLANK)

    const shaftsAscii = SHAFTS_TO_AIM_TO_ASCII_MAP[shafts][aim]

    const rightAscii = isUndefined(right) ?
        BLANK_ASCII :
        right.map((flagId: FlagId): Ascii => RIGHT_FLAG_TO_AIM_TO_ASCII_MAP[flagId][aim]).join(BLANK)

    return sumTexts(leftAscii, shaftsAscii, rightAscii)
        .replace(/\|\|\|\|/, "X")
        .replace(/!!!!/, "Y") as Ascii
}

const computeCompatibleAscii = (compatible: Compatible): Ascii =>
    COMPATIBLE_TO_ASCII_MAP[compatible]

const computeAccentAscii = ({id, against}: Accent, aim: Aim): Ascii =>
    against ? AGAINST_ACCENT_TO_AIM_TO_ASCII_MAP[id][aim] : ACCENT_TO_AIM_TO_ASCII_MAP[id][aim]

const computeSagittalAscii = (sagittal: Sagittal | NullSagittal): Ascii => {
    if (!isSagittal(sagittal)) return PARENTHETICAL_NATURAL_ASCII
    const {arm, ...core} = sagittal

    const armAscii = isUndefined(arm) ? BLANK_ASCII : computeArmAscii(arm, core.aim)
    const coreAscii = computeCoreAscii(core)

    return sumTexts(armAscii, coreAscii)
}

const computeArmAscii = (arm: Arm, aim: Aim): Ascii =>
    join(
        arm.map((accent: Accent): Ascii => computeAccentAscii(accent, aim)),
        BLANK_ASCII,
    )

const computeAccidentalAscii = <T extends Flavor>({compatible, ...sagittal}: Accidental<T>): Ascii<T> => {
    const {arm, ...core} = sagittal

    const armAscii = isUndefined(arm) ?
        BLANK_ASCII :
        computeArmAscii(arm, core.aim)

    const coreAscii = !isSagittal(sagittal) ?
        isUndefined(compatible) ? PARENTHETICAL_NATURAL_ASCII : BLANK_ASCII :
        computeCoreAscii(core)

    const compatibleAscii = isUndefined(compatible) ?
        BLANK_ASCII :
        computeCompatibleAscii(compatible)

    return sumTexts(armAscii, coreAscii, compatibleAscii) as Ascii<T>
}

export {
    computeCoreAscii,
    computeAccidentalAscii,
    computeSagittalAscii,
    computeCompatibleAscii,
    computeAccentAscii,
}
