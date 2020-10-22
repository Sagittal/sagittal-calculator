import {deepEquals, isUndefined, join, stringify, sumTexts} from "../../../general"
import {Accent, Arm, Orientation, OrientedAccent} from "../flacco"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Aim, Core, CoreName, CORES, Symbol} from "../symbol"
import {BLANK_UNICODE, PARENTHETICAL_NATURAL_UNICODE} from "./constants"
import {Unicode} from "./types"

const CORE_UNICODE_EQUIVALENTS: Array<{core: Core, unicode: Unicode}> = [
    {core: CORES[CoreName.BARE_SHAFT_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BARE_SHAFT_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_SCROLL_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BOATHOOK_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_SCROLL_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BOATHOOK_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_SCROLL_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BOATHOOK_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BOATHOOK_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_BOATHOOK_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_ARC_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_ARC_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_ARC_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_SCROLL_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_BOATHOOK_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_ARC_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BOATHOOK_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_AND_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_ARC_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_AND_ARC_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_RIGHT_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_SCROLL_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BOATHOOK_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_SCROLL_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BOATHOOK_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_SCROLL_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BOATHOOK_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BOATHOOK_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_BOATHOOK_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_ARC_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_ARC_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_ARC_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_SCROLL_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_BOATHOOK_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_ARC_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BOATHOOK_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_AND_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_ARC_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_AND_ARC_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_RIGHT_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_ARC_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_SCROLL_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_ARC_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_ARC_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_ARC_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_SCROLL_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_SCROLL_DOUBLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_ARC_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_SCROLL_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_ARC_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_ARC_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_ARC_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_SCROLL_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_SCROLL_DOUBLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_SCROLL_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_SCROLL_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_SCROLL_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_SCROLL_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_AND_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_AND_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_RIGHT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_SCROLL_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_SCROLL_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_SCROLL_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_SCROLL_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_AND_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_AND_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_RIGHT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_BARB_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_ARC_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BARB_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_BARB_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_SCROLL_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_ARC_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_ARC_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_ARC_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BARB_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BARB_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_SCROLL_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_SCROLL_EX_UP], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_BARB_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_ARC_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BARB_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_BARB_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.ARC_AND_SCROLL_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BARB_AND_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_ARC_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BARB_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_ARC_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_ARC_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_ARC_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BARB_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.SCROLL_AND_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_BARB_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_LEFT_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.BOATHOOK_AND_SCROLL_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.RIGHT_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.LEFT_SCROLL_AND_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {core: CORES[CoreName.DOUBLE_SCROLL_EX_DOWN], unicode: "" as Unicode},
]

const ACCENT_TO_ORIENTATION_TO_AIM_TO_UNICODE_MAP: Record<Accent, Record<Orientation, Record<Aim, Unicode>>> = {
    [Accent.TICK]: {
        [Orientation.WITH]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
        [Orientation.AGAINST]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
    },
    [Accent.WING]: {
        [Orientation.WITH]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
        [Orientation.AGAINST]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
    },
    [Accent.BIRD]: {
        [Orientation.WITH]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
        [Orientation.AGAINST]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
    },
}

const COMPATIBLE_TO_UNICODE_MAP: Record<Compatible, Unicode> = {
    [Compatible.STEIN_SEMISHARP]: "" as Unicode,
    [Compatible.STEIN_SEMIFLAT]: "" as Unicode,
    [Compatible.STEIN_SESQUISHARP]: "" as Unicode,
    [Compatible.ZIMMERMANN_SESQUIFLAT]: "" as Unicode,
    [Compatible.WILSON_PLUS]: "" as Unicode,
    [Compatible.WILSON_MINUS]: "" as Unicode,
    [Compatible.NATURAL]: "" as Unicode,
    [Compatible.SHARP]: "" as Unicode,
    [Compatible.FLAT]: "" as Unicode,
    [Compatible.DOUBLE_SHARP]: "" as Unicode,
    [Compatible.DOUBLE_FLAT]: "" as Unicode,
}

const computeCoreUnicode = (core: Core): Unicode => {
    const maybeEquivalent = CORE_UNICODE_EQUIVALENTS
        .find((equivalent: {core: Core}): boolean => deepEquals(equivalent.core, core))

    if (isUndefined(maybeEquivalent)) {
        throw new Error(`Could not find unicode for core ${stringify(core, {multiline: true})}`)
    }

    return maybeEquivalent.unicode
}

const computeCompatibleUnicode = (compatible: Compatible): Unicode =>
    COMPATIBLE_TO_UNICODE_MAP[compatible]

const computeOrientedAccentUnicode = ({accent, orientation}: OrientedAccent, aim: Aim): Unicode =>
    ACCENT_TO_ORIENTATION_TO_AIM_TO_UNICODE_MAP[accent][orientation][aim]

const computeSymbolUnicode = ({arm, core}: Symbol): Unicode => {
    const armUnicode = isUndefined(arm) ?
        BLANK_UNICODE :
        computeArmUnicode(arm, core?.aim as Aim)

    const coreUnicode = isUndefined(core) ?
        PARENTHETICAL_NATURAL_UNICODE :
        computeCoreUnicode(core)

    return sumTexts(armUnicode, coreUnicode)
}

const computeArmUnicode = (arm: Arm, aim: Aim): Unicode =>
    join(
        arm.map((orientedAccent: OrientedAccent): Unicode => computeOrientedAccentUnicode(orientedAccent, aim)),
        BLANK_UNICODE,
    )

const computeAccidentalUnicode = <T extends Flavor>({arm, core, compatible}: Accidental<T>): Unicode<T> => {
    const armUnicode = isUndefined(arm) ?
        BLANK_UNICODE :
        computeArmUnicode(arm, core?.aim as Aim)

    const coreUnicode = isUndefined(core) ?
        isUndefined(compatible) ? PARENTHETICAL_NATURAL_UNICODE : BLANK_UNICODE :
        computeCoreUnicode(core)

    const compatibleUnicode = isUndefined(compatible) ?
        BLANK_UNICODE :
        computeCompatibleUnicode(compatible)

    return sumTexts(armUnicode, coreUnicode, compatibleUnicode) as Unicode<T>
}

export {
    computeCoreUnicode,
    computeAccidentalUnicode,
    computeCompatibleUnicode,
    computeSymbolUnicode,
    computeOrientedAccentUnicode,
}
