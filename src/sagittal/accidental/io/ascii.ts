import {BLANK, isUndefined, join, sumTexts} from "../../../general"
import {Accent, Flag} from "../flacco"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Aim, Core, Shafts, Symbol} from "../symbol"
import {BLANK_ASCII, PARENTHETICAL_NATURAL_ASCII} from "./constants"
import {Ascii} from "./types"

const SHAFTS_TO_AIM_TO_ASCII_MAP: Record<Shafts, Record<Aim, Ascii>> = {
    [Shafts.SINGLE]: {[Aim.UP]: "|" as Ascii, [Aim.DOWN]: "!" as Ascii},
    [Shafts.DOUBLE]: {[Aim.UP]: "||" as Ascii, [Aim.DOWN]: "!!" as Ascii},
    [Shafts.TRIPLE]: {[Aim.UP]: "|||" as Ascii, [Aim.DOWN]: "!!!" as Ascii},
    [Shafts.EX]: {[Aim.UP]: "X" as Ascii, [Aim.DOWN]: "Y" as Ascii},
}

const LEFT_FLAG_TO_AIM_TO_ASCII_MAP: Record<Flag, Record<Aim, Ascii>> = {
    [Flag.BARB]: {[Aim.UP]: "/" as Ascii, [Aim.DOWN]: "\\" as Ascii},
    [Flag.ARC]: {[Aim.UP]: "(" as Ascii, [Aim.DOWN]: "(" as Ascii},
    [Flag.SCROLL]: {[Aim.UP]: ")" as Ascii, [Aim.DOWN]: ")" as Ascii},
    [Flag.BOATHOOK]: {[Aim.UP]: "~" as Ascii, [Aim.DOWN]: "~" as Ascii},
}

const RIGHT_FLAG_TO_AIM_TO_ASCII_MAP: Record<Flag, Record<Aim, Ascii>> = {
    [Flag.BARB]: {[Aim.DOWN]: "/" as Ascii, [Aim.UP]: "\\" as Ascii},
    [Flag.ARC]: {[Aim.DOWN]: ")" as Ascii, [Aim.UP]: ")" as Ascii},
    [Flag.SCROLL]: {[Aim.DOWN]: "(" as Ascii, [Aim.UP]: "(" as Ascii},
    [Flag.BOATHOOK]: {[Aim.DOWN]: "~" as Ascii, [Aim.UP]: "~" as Ascii},
}

const ACCENT_TO_AIM_TO_ASCII_MAP: Record<Accent, Record<Aim, Ascii>> = {
    [Accent.TICK_WITH]: {[Aim.UP]: "'" as Ascii, [Aim.DOWN]: "." as Ascii},
    [Accent.TICK_AGAINST]: {[Aim.UP]: "." as Ascii, [Aim.DOWN]: "'" as Ascii},
    [Accent.WING_WITH]: {[Aim.UP]: "`" as Ascii, [Aim.DOWN]: "," as Ascii},
    [Accent.WING_AGAINST]: {[Aim.UP]: "," as Ascii, [Aim.DOWN]: "`" as Ascii},
    [Accent.BIRD_WITH]: {[Aim.UP]: "``" as Ascii, [Aim.DOWN]: ",," as Ascii},
    [Accent.BIRD_AGAINST]: {[Aim.UP]: ",," as Ascii, [Aim.DOWN]: "``" as Ascii},
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

const computeCoreAscii = ({ aim, shafts, left, right }: Core): Ascii => {
    const leftAscii = isUndefined(left) ?
        BLANK_ASCII :
        left.map((flag: Flag): Ascii => LEFT_FLAG_TO_AIM_TO_ASCII_MAP[flag][aim]).join(BLANK)

    const shaftsAscii = SHAFTS_TO_AIM_TO_ASCII_MAP[shafts][aim]

    const rightAscii = isUndefined(right) ?
        BLANK_ASCII :
        right.map((flag: Flag): Ascii => RIGHT_FLAG_TO_AIM_TO_ASCII_MAP[flag][aim]).join(BLANK)

    return sumTexts(leftAscii, shaftsAscii, rightAscii)
        .replace(/\|\|\|\|/, "X")
        .replace(/!!!!/, "Y") as Ascii
}

const computeCompatibleAscii = (compatible: Compatible): Ascii =>
    COMPATIBLE_TO_ASCII_MAP[compatible]

const computeAccentAscii = (accent: Accent, aim: Aim): Ascii =>
    ACCENT_TO_AIM_TO_ASCII_MAP[accent][aim]

const computeSymbolAscii = ({ accents, core }: Symbol): Ascii => {
    const accentsAscii = isUndefined(accents) ?
        BLANK_ASCII :
        computeAccentsAscii(accents, core?.aim as Aim)

    const coreAscii = isUndefined(core) ?
        PARENTHETICAL_NATURAL_ASCII :
        computeCoreAscii(core)

    return sumTexts(accentsAscii, coreAscii)
}

const computeAccentsAscii = (accents: Accent[], aim: Aim): Ascii =>
    join(accents.map((accent: Accent): Ascii => computeAccentAscii(accent, aim)), BLANK_ASCII)

const computeAccidentalAscii = <T extends Flavor>({ accents, core, compatible }: Accidental<T>): Ascii<T> => {
    const accentsAscii = isUndefined(accents) ?
        BLANK_ASCII :
        computeAccentsAscii(accents, core?.aim as Aim)

    const coreAscii = isUndefined(core) ?
        isUndefined(compatible) ? PARENTHETICAL_NATURAL_ASCII : BLANK_ASCII :
        computeCoreAscii(core)

    const compatibleAscii = isUndefined(compatible) ?
        BLANK_ASCII :
        computeCompatibleAscii(compatible)

    return sumTexts(accentsAscii, coreAscii, compatibleAscii) as Ascii<T>
}

export {
    computeCoreAscii,
    computeAccidentalAscii,
    computeSymbolAscii,
    computeCompatibleAscii,
    computeAccentAscii,
}
