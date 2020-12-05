import {BLANK, deepEquals, isUndefined, join, Maybe, sumTexts} from "@sagittal/general"
import {Accent, AccentId, Arm, FlagId} from "../flacco"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Core, Sagittal, Shafts} from "../sagittal"
import {BLANK_ASCII, PARENTHETICAL_NATURAL_ASCII} from "./constants"
import {Ascii} from "./types"

const SHAFTS_TO_ASCII_MAP: Record<Shafts, Ascii> = {
    [Shafts.SINGLE]: "|" as Ascii,
    [Shafts.DOUBLE]: "||" as Ascii,
    [Shafts.TRIPLE]: "|||" as Ascii,
    [Shafts.EX]: "X" as Ascii,
}

const DOWN_SHAFTS_TO_ASCII_MAP: Record<Shafts, Ascii> = {
    [Shafts.SINGLE]: "!" as Ascii,
    [Shafts.DOUBLE]: "!!" as Ascii,
    [Shafts.TRIPLE]: "!!!" as Ascii,
    [Shafts.EX]: "Y" as Ascii,
}

const LEFT_FLAG_TO_ASCII_MAP: Record<FlagId, Ascii> = {
    [FlagId.BARB]: "/" as Ascii,
    [FlagId.ARC]: "(" as Ascii,
    [FlagId.SCROLL]: ")" as Ascii,
    [FlagId.BOATHOOK]: "~" as Ascii,
}

const DOWN_LEFT_FLAG_TO_ASCII_MAP: Record<FlagId, Ascii> = {
    [FlagId.BARB]: "\\" as Ascii,
    [FlagId.ARC]: "(" as Ascii,
    [FlagId.SCROLL]: ")" as Ascii,
    [FlagId.BOATHOOK]: "~" as Ascii,
}

const RIGHT_FLAG_TO_ASCII_MAP: Record<FlagId, Ascii> = {
    [FlagId.BARB]: "\\" as Ascii,
    [FlagId.ARC]: ")" as Ascii,
    [FlagId.SCROLL]: "(" as Ascii,
    [FlagId.BOATHOOK]: "~" as Ascii,
}

const DOWN_RIGHT_FLAG_TO_ASCII_MAP: Record<FlagId, Ascii> = {
    [FlagId.BARB]: "/" as Ascii,
    [FlagId.ARC]: ")" as Ascii,
    [FlagId.SCROLL]: "(" as Ascii,
    [FlagId.BOATHOOK]: "~" as Ascii,
}

const ACCENT_TO_ASCII_MAP: Record<AccentId, Ascii> = {
    [AccentId.TICK]: "'" as Ascii,
    [AccentId.WING]: "`" as Ascii,
    [AccentId.BIRD]: "``" as Ascii,
    [AccentId.HORN]: "@1" as Ascii,
    [AccentId.WEDGE]: "@2" as Ascii,
    [AccentId.HORNWING]: "@4" as Ascii,
    [AccentId.WEDGEWING]: "@5" as Ascii,
    [AccentId.HORNBIRD]: "@7" as Ascii,
    [AccentId.WEDGEBIRD]: "@8" as Ascii,
    [AccentId.WINGBIRD]: "@9" as Ascii,
    [AccentId.DOT]: "@." as Ascii,
}

const DOWN_ACCENT_TO_ASCII_MAP: Record<AccentId, Ascii> = {
    [AccentId.TICK]: "." as Ascii,
    [AccentId.WING]: "," as Ascii,
    [AccentId.BIRD]: ",," as Ascii,
    [AccentId.HORN]: "l1" as Ascii,
    [AccentId.WEDGE]: "l2" as Ascii,
    [AccentId.HORNWING]: "l4" as Ascii,
    [AccentId.WEDGEWING]: "l5" as Ascii,
    [AccentId.HORNBIRD]: "l7" as Ascii,
    [AccentId.WEDGEBIRD]: "l8" as Ascii,
    [AccentId.WINGBIRD]: "l9" as Ascii,
    [AccentId.DOT]: "l." as Ascii,
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

const computeCoreAscii = ({down, shafts, left, right}: Core): Ascii => {
    const leftAscii = isUndefined(left) ?
        BLANK_ASCII :
        left.map((flagId: FlagId): Ascii => {
            return down ? DOWN_LEFT_FLAG_TO_ASCII_MAP[flagId] : LEFT_FLAG_TO_ASCII_MAP[flagId]
        }).join(BLANK)

    const shaftsAscii = down ? DOWN_SHAFTS_TO_ASCII_MAP[shafts] : SHAFTS_TO_ASCII_MAP[shafts]

    const rightAscii = isUndefined(right) ?
        BLANK_ASCII :
        right.map((flagId: FlagId): Ascii => {
            return down ? DOWN_RIGHT_FLAG_TO_ASCII_MAP[flagId] : RIGHT_FLAG_TO_ASCII_MAP[flagId]
        }).join(BLANK)

    return sumTexts(leftAscii, shaftsAscii, rightAscii)
        .replace(/\|\|\|\|/, "X")
        .replace(/!!!!/, "Y") as Ascii
}

const computeCompatibleAscii = (compatible: Compatible): Ascii =>
    COMPATIBLE_TO_ASCII_MAP[compatible]

const computeAccentAscii = ({id, anti}: Accent, down?: boolean): Ascii =>
    anti ?
        down ?
            ACCENT_TO_ASCII_MAP[id] :
            DOWN_ACCENT_TO_ASCII_MAP[id] :
        down ?
            DOWN_ACCENT_TO_ASCII_MAP[id] :
            ACCENT_TO_ASCII_MAP[id]

const computeSagittalAscii = (sagittal: Maybe<Sagittal>): Ascii => {
    if (isUndefined(sagittal)) return PARENTHETICAL_NATURAL_ASCII
    const {arm, ...core} = sagittal

    const armAscii = isUndefined(arm) ? BLANK_ASCII : computeArmAscii(arm, core.down)
    const coreAscii = computeCoreAscii(core)

    return sumTexts(armAscii, coreAscii)
}

const computeArmAscii = (arm: Arm, down?: boolean): Ascii =>
    join(
        arm.map((accent: Accent): Ascii => computeAccentAscii(accent, down)),
        BLANK_ASCII,
    )

const computeAccidentalAscii = <T extends Maybe<Flavor> = undefined>(
    accidental: Accidental<T>,
): Ascii<T> => {
    if (isUndefined(accidental)) return PARENTHETICAL_NATURAL_ASCII as Ascii<T>
    const {compatible, arm, ...core} = accidental

    const armAscii = isUndefined(arm) ?
        BLANK_ASCII :
        computeArmAscii(arm, core.down)

    const coreAscii = deepEquals(core, {} as Core) ?
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
