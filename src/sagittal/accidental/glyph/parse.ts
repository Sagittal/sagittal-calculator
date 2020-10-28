import {BLANK, Char, Count, increment, isEmpty, shallowClone} from "../../../general"
import {AccentId, Arm, FlagId} from "../flacco"
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
    const left = [] as FlagId[]
    const right = [] as FlagId[]

    let sagittalText = shallowClone(ascii)
    if (sagittalText.match("``")) {
        aim === Aim.UP ?
            arm.push({id: AccentId.BIRD}) :
            arm.push({id: AccentId.BIRD, against: true})
        sagittalText = sagittalText.replace("``", "") as Ascii
    }
    if (sagittalText.match(",,")) {
        aim === Aim.UP ?
            arm.push({id: AccentId.BIRD, against: true}) :
            arm.push({id: AccentId.BIRD})
        sagittalText = sagittalText.replace(",,", "") as Ascii
    }

    const sagittalChars = sagittalText.split(BLANK) as Char[]
    sagittalChars.forEach((sagittalChar: Char): void => {
        if (sagittalChar === "`") {
            aim === Aim.UP ?
                arm.push({id: AccentId.WING}) :
                arm.push({id: AccentId.WING, against: true})
        } else if (sagittalChar === ",") {
            aim === Aim.UP ?
                arm.push({id: AccentId.WING, against: true}) :
                arm.push({id: AccentId.WING})
        } else if (sagittalChar === "'") {
            aim === Aim.UP ?
                arm.push({id: AccentId.TICK}) :
                arm.push({id: AccentId.TICK, against: true})
        } else if (sagittalChar === ".") {
            aim === Aim.UP ?
                arm.push({id: AccentId.TICK, against: true}) :
                arm.push({id: AccentId.TICK})
        } else if (sagittalChar === "/") {
            aim === Aim.UP ?
                left.push(FlagId.BARB) :
                right.push(FlagId.BARB)
        } else if (sagittalChar === "\\") {
            aim === Aim.UP ?
                right.push(FlagId.BARB) :
                left.push(FlagId.BARB)
        } else if (sagittalChar === ")") {
            aim === Aim.UP ?
                pastShaft ? right.push(FlagId.ARC) : left.push(FlagId.SCROLL) :
                pastShaft ? right.push(FlagId.SCROLL) : left.push(FlagId.ARC)
        } else if (sagittalChar === "(") {
            aim === Aim.UP ?
                pastShaft ? right.push(FlagId.SCROLL) : left.push(FlagId.ARC) :
                pastShaft ? right.push(FlagId.ARC) : left.push(FlagId.SCROLL)
        } else if (sagittalChar === "~") {
            pastShaft ?
                right.push(FlagId.BOATHOOK) :
                left.push(FlagId.BOATHOOK)
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
