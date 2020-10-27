import {BLANK, Char, Count, increment, isEmpty, shallowClone} from "../../../general"
import {Accent, Arm, Flag, Orientation} from "../flacco"
import {Aim, NullSagittal, NULL_SAGITTAL, Sagittal, Shafts} from "../sagittal"
import {PARENTHETICAL_NATURAL_ASCII} from "./constants"
import {Ascii} from "./types"

const parseAscii = (ascii: Ascii): Sagittal | NullSagittal => {
    if (ascii === PARENTHETICAL_NATURAL_ASCII) return NULL_SAGITTAL

    const aim = ascii.match(/[Y!]/g) ? Aim.DOWN : Aim.UP

    let pastShaft = false

    const sagittal = {} as Sagittal

    let shaftCount = 0 as Count

    const arm = [] as Arm
    const left = [] as Flag[]
    const right = [] as Flag[]

    let sagittalText = shallowClone(ascii)
    if (sagittalText.match("``")) {
        aim === Aim.UP ?
            arm.push({accent: Accent.BIRD, orientation: Orientation.WITH}) :
            arm.push({accent: Accent.BIRD, orientation: Orientation.AGAINST})
        sagittalText = sagittalText.replace("``", "") as Ascii
    }
    if (sagittalText.match(",,")) {
        aim === Aim.UP ?
            arm.push({accent: Accent.BIRD, orientation: Orientation.AGAINST}) :
            arm.push({accent: Accent.BIRD, orientation: Orientation.WITH})
        sagittalText = sagittalText.replace(",,", "") as Ascii
    }

    const sagittalChars = sagittalText.split(BLANK) as Char[]
    sagittalChars.forEach((sagittalChar: Char): void => {
        if (sagittalChar === "`") {
            aim === Aim.UP ?
                arm.push({accent: Accent.WING, orientation: Orientation.WITH}) :
                arm.push({accent: Accent.WING, orientation: Orientation.AGAINST})
        } else if (sagittalChar === ",") {
            aim === Aim.UP ?
                arm.push({accent: Accent.WING, orientation: Orientation.AGAINST}) :
                arm.push({accent: Accent.WING, orientation: Orientation.WITH})
        } else if (sagittalChar === "'") {
            aim === Aim.UP ?
                arm.push({accent: Accent.TICK, orientation: Orientation.WITH}) :
                arm.push({accent: Accent.TICK, orientation: Orientation.AGAINST})
        } else if (sagittalChar === ".") {
            aim === Aim.UP ?
                arm.push({accent: Accent.TICK, orientation: Orientation.AGAINST}) :
                arm.push({accent: Accent.TICK, orientation: Orientation.WITH})
        } else if (sagittalChar === "/") {
            aim === Aim.UP ?
                left.push(Flag.BARB) :
                right.push(Flag.BARB)
        } else if (sagittalChar === "\\") {
            aim === Aim.UP ?
                right.push(Flag.BARB) :
                left.push(Flag.BARB)
        } else if (sagittalChar === ")") {
            aim === Aim.UP ?
                pastShaft ? right.push(Flag.ARC) : left.push(Flag.SCROLL) :
                pastShaft ? right.push(Flag.SCROLL) : left.push(Flag.ARC)
        } else if (sagittalChar === "(") {
            aim === Aim.UP ?
                pastShaft ? right.push(Flag.SCROLL) : left.push(Flag.ARC) :
                pastShaft ? right.push(Flag.ARC) : left.push(Flag.SCROLL)
        } else if (sagittalChar === "~") {
            pastShaft ?
                right.push(Flag.BOATHOOK) :
                left.push(Flag.BOATHOOK)
        } else if (sagittalChar === "!" || sagittalChar === "|") {
            pastShaft = true
            shaftCount = increment(shaftCount)
        } else if (sagittalChar === "X" || sagittalChar === "Y") {
            pastShaft = true
            shaftCount = 4 as Count
        }
    })

    sagittal.aim = aim
    sagittal.shafts = shaftCount === 1 ?
        Shafts.SINGLE :
        shaftCount === 2 ?
            Shafts.DOUBLE :
            shaftCount === 3 ?
                Shafts.TRIPLE :
                Shafts.EX
    if (!isEmpty(arm)) sagittal.arm = arm
    if (!isEmpty(left)) sagittal.left = left
    if (!isEmpty(right)) sagittal.right = right

    return sagittal
}

export {
    parseAscii,
}
