import { program } from "commander"
import {
    ANY_COMMA_NAME_CHARS,
    ANY_MONZO_CHARS,
    CommandFlag,
    computeMonzoFromRatio,
    Formatted,
    Io,
    LogTarget,
    Monzo, Name,
    parseMonzo,
    parseRatio,
    Ratio,
    saveLog,
} from "../../../general"
import { AnalyzedRationalPitch, computeMonzoFromCommaName } from "../../../sagittal"
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
    .option(
        `-${CommandFlag.COMMA_NAME}, --comma-name <commaName>`,
        "ratio",
    )

applySharedPitchCommandSetup()

const rationalPitch = program.args[ 0 ] as Io
let monzo
if (rationalPitch) {
    if (rationalPitch.match(ANY_COMMA_NAME_CHARS)) {
        monzo = computeMonzoFromCommaName(rationalPitch as Name<AnalyzedRationalPitch>)
    } else if (rationalPitch.includes("/")) {
        monzo = computeMonzoFromRatio(parseRatio(rationalPitch as Formatted<Ratio>))
    } else if (rationalPitch.match(ANY_MONZO_CHARS)) {
        monzo = parseMonzo(rationalPitch as Formatted<Monzo>)
    }
} else if (program.monzo) {
    monzo = program.monzo // todo why not parse here?
} else if (program.ratio) {
    monzo = computeMonzoFromRatio(program.ratio) // todo why not parse here? should? test drive out motivation to do so?
} else if (program.commaName) {
    monzo = computeMonzoFromCommaName(program.commaName)
}
if (!monzo) {
    throw new Error("Unable to determine monzo for rational pitch.")
}

const analyzedRationalPitch = analyzeRationalPitch(monzo, { giveName: false })
saveLog(formatRationalPitch(analyzedRationalPitch), LogTarget.ALL, PITCH_SCRIPT_GROUP)

const notatingCommasFormattedTable = computeNotatingCommasTable(monzo)
saveLog(notatingCommasFormattedTable, LogTarget.ALL, PITCH_SCRIPT_GROUP)
