import { program } from "commander"
import {
    ANY_MONZO_CHARS,
    CommandFlag,
    computeMonzoFromRatio,
    Formatted,
    Io,
    LogTarget,
    Monzo,
    parseMonzo,
    parseRatio,
    Ratio,
    saveLog,
} from "../../../general"
import { analyzeRationalPitch } from "../analyzeRationalPitch"
import { PITCH_SCRIPT_GROUP } from "../constants"
import { computeNotatingCommasTable, formatRationalPitch } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

program
    .option(
        `-${CommandFlag.MONZO}, --monzo <monzo>`,
        "monzo",
        (monzoText: string) => parseMonzo(monzoText as Formatted<Monzo>),
    )
    .option(
        `-${CommandFlag.RATIO}, --ratio <ratio>`,
        "ratio",
        (ratioText: string) => parseRatio(ratioText as Formatted<Ratio>),
    )

applySharedPitchCommandSetup()

// TODO: you should also make it accept -n name!
const rationalPitch = program.args[ 0 ] as Io
let monzo
if (rationalPitch) {
    if (rationalPitch.includes("/")) {
        monzo = computeMonzoFromRatio(parseRatio(rationalPitch as Formatted<Ratio>))
    }
    if (rationalPitch.match(ANY_MONZO_CHARS)) {
        monzo = parseMonzo(rationalPitch as Formatted<Monzo>)
    }
} else if (program.monzo) {
    monzo = program.monzo
} else if (program.ratio) {
    monzo = computeMonzoFromRatio(program.ratio)
}
if (!monzo) {
    throw new Error("Unable to determine monzo for rational pitch.")
}

// TODO: this should actually return the rational pitch info as a row,
//  so you can more easily compare it with the notating commas
//  in which case there's a chance that the method we're using to format comma multiline doesn't get used anymore
//  and that may actually be the only multiline thing left at all,
//  which doesn't play well with formatNumber aligning decimal points...
const analyzedRationalPitch = analyzeRationalPitch(monzo, { giveName: false })
saveLog(formatRationalPitch(analyzedRationalPitch), LogTarget.ALL, PITCH_SCRIPT_GROUP)

const notatingCommasFormattedTable = computeNotatingCommasTable(monzo)
saveLog(notatingCommasFormattedTable, LogTarget.ALL, PITCH_SCRIPT_GROUP)
