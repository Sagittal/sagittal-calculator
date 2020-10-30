import {BLANK, Char, Count, increment, isEmpty, Maybe, shallowClone} from "../../../general"
import {AccentId, Arm, FlagId} from "../flacco"
import {Sagittal, Shafts} from "../sagittal"
import {PARENTHETICAL_NATURAL_ASCII} from "./constants"
import {Ascii} from "./types"

const parseAscii = (ascii: Ascii): Maybe<Sagittal> => {
    if (ascii === PARENTHETICAL_NATURAL_ASCII) return

    const down = !!ascii.match(/[Y!]/g)

    let pastShaft = false

    const sagittal = {} as Sagittal

    let shaftCount = 0 as Count

    const arm = [] as Arm
    const left = [] as FlagId[]
    const right = [] as FlagId[]

    let sagittalText = shallowClone(ascii)
    if (sagittalText.match("``")) {
        down ?
            arm.push({id: AccentId.BIRD, anti: true}) :
            arm.push({id: AccentId.BIRD})
        sagittalText = sagittalText.replace("``", "") as Ascii
    }
    if (sagittalText.match(",,")) {
        down ?
            arm.push({id: AccentId.BIRD}) :
            arm.push({id: AccentId.BIRD, anti: true})
        sagittalText = sagittalText.replace(",,", "") as Ascii
    }

    const sagittalChars = sagittalText.split(BLANK) as Char[]
    sagittalChars.forEach((sagittalChar: Char): void => {
        if (sagittalChar === "`") {
            down ?
                arm.push({id: AccentId.WING, anti: true}) :
                arm.push({id: AccentId.WING})
        } else if (sagittalChar === ",") {
            down ?
                arm.push({id: AccentId.WING}) :
                arm.push({id: AccentId.WING, anti: true})
        } else if (sagittalChar === "'") {
            down ?
                arm.push({id: AccentId.TICK, anti: true}) :
                arm.push({id: AccentId.TICK})
        } else if (sagittalChar === ".") {
            down ?
                arm.push({id: AccentId.TICK}) :
                arm.push({id: AccentId.TICK, anti: true})
        } else if (sagittalChar === "/") {
            down ?
                right.push(FlagId.BARB) :
                left.push(FlagId.BARB)
        } else if (sagittalChar === "\\") {
            down ?
                left.push(FlagId.BARB) :
                right.push(FlagId.BARB)
        } else if (sagittalChar === ")") {
            down ?
                pastShaft ? right.push(FlagId.SCROLL) : left.push(FlagId.ARC) :
                pastShaft ? right.push(FlagId.ARC) : left.push(FlagId.SCROLL)
        } else if (sagittalChar === "(") {
            down ?
                pastShaft ? right.push(FlagId.ARC) : left.push(FlagId.SCROLL) :
                pastShaft ? right.push(FlagId.SCROLL) : left.push(FlagId.ARC)
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

    if (down) sagittal.down = down
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
