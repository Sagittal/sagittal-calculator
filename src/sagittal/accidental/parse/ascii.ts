import {BLANK, Char, Count, increment, isEmpty, shallowClone} from "@sagittal/general"
import {AccentId, Arm, FlagId} from "../flacco"
import {Accidental, Compatible, EMPTY_ACCIDENTAL} from "../flavor"
import {Ascii, BLANK_ASCII, PARENTHETICAL_NATURAL_ASCII} from "../glyph"
import {Shafts} from "../sagittal"

const parseAscii = (ascii: Ascii): Accidental => {
    if (ascii === PARENTHETICAL_NATURAL_ASCII) return EMPTY_ACCIDENTAL

    const down = !!ascii.match(/[Y!]/g)

    let pastShaft = false

    const accidental = {} as Accidental

    let shaftCount = 0 as Count

    const arm = [] as Arm
    const left = [] as FlagId[]
    const right = [] as FlagId[]

    let accidentalText = shallowClone(ascii)
    if (accidentalText.match(/``/)) {
        down ?
            arm.push({id: AccentId.BIRD, anti: true}) :
            arm.push({id: AccentId.BIRD})
        accidentalText = accidentalText.replace(/``/, BLANK_ASCII) as Ascii
    }
    if (accidentalText.match(/,,/)) {
        down ?
            arm.push({id: AccentId.BIRD}) :
            arm.push({id: AccentId.BIRD, anti: true})
        accidentalText = accidentalText.replace(/,,/, BLANK_ASCII) as Ascii
    }

    if (accidentalText.match(/bb/)) {
        accidental.compatible = Compatible.DOUBLE_FLAT
    } else if (accidentalText.match(/>#/)) {
        accidental.compatible = Compatible.STEIN_SESQUISHARP
    } else if (accidentalText.match(/<b/)) {
        accidental.compatible = Compatible.ZIMMERMANN_SESQUIFLAT
    } else if (accidentalText.match(/>/)) {
        accidental.compatible = Compatible.STEIN_SEMISHARP
    } else if (accidentalText.match(/</)) {
        accidental.compatible = Compatible.STEIN_SEMIFLAT
    } else if (accidentalText.match(/\+/)) {
        accidental.compatible = Compatible.WILSON_PLUS
    } else if (accidentalText.match(/-/)) {
        accidental.compatible = Compatible.WILSON_MINUS
    } else if (accidentalText.match(/b/)) {
        accidental.compatible = Compatible.FLAT
    } else if (accidentalText.match(/#/)) {
        accidental.compatible = Compatible.SHARP
    } else if (accidentalText.match(/x/)) {
        accidental.compatible = Compatible.DOUBLE_SHARP
    }

    const accidentalChars = accidentalText.split(BLANK) as Char[]
    accidentalChars.forEach((sagittalChar: Char): void => {
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
            pastShaft ?
                right.push(FlagId.ARC) :        //      !)  or   |)
                left.push(FlagId.SCROLL)        //     )!   or  )|
        } else if (sagittalChar === "(") {
            pastShaft ?
                right.push(FlagId.SCROLL) :     //      !(  or   |(
                left.push(FlagId.ARC)           //     (!   or  (|
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

    if (down) accidental.down = down
    accidental.shafts = shaftCount === 1 ?
        Shafts.SINGLE :
        shaftCount === 2 ?
            Shafts.DOUBLE :
            shaftCount === 3 ?
                Shafts.TRIPLE :
                Shafts.EX
    if (!isEmpty(arm)) accidental.arm = arm
    if (!isEmpty(left)) accidental.left = left
    if (!isEmpty(right)) accidental.right = right

    return accidental
}

export {
    parseAscii,
}
