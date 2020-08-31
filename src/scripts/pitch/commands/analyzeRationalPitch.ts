import { program } from "commander"
import {
    ANY_MONZO_CHARS,
    BLANK,
    CommandFlag,
    computeMonzoFromRatio,
    formatTable,
    Formatted,
    IO,
    LogTarget,
    Monzo,
    parseMonzo,
    parseRatio,
    Ratio,
    saveLog,
    Table,
} from "../../../general"
import { addMaybeSagittalSymbol } from "../addMaybeSagittalSymbol"
import { analyzeRationalPitch } from "../analyzeRationalPitch"
import { PITCH_SCRIPT_GROUP } from "../constants"
import { pitchScriptGroupSettings } from "../globals"
import {
    computeNotatingCommaWithMaybeSagittalSymbolRow,
    formatRationalPitch,
    NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW,
} from "../io"
import { computeNotatingCommas } from "../notatingCommas"
import { AnalyzedRationalPitchWithMaybeSagittalSymbol } from "../types"
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
const rationalPitch = program.args[ 0 ] as IO
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
const analyzedRationalPitch = analyzeRationalPitch(monzo)
saveLog(formatRationalPitch(analyzedRationalPitch), LogTarget.ALL, PITCH_SCRIPT_GROUP)

// TODO: this like findCommas should probably have an io/table.ts which allows for either terminal or forum output
//  which would also take the stuff like a pre-header-row as we see in some of the others
const notatingCommas = computeNotatingCommas(monzo, pitchScriptGroupSettings)
const notatingCommaWithMaybeSagittalSymbols = notatingCommas.map(addMaybeSagittalSymbol)
const maybeNotatingCommaWithMaybeSagittalSymbolsTable: Table<AnalyzedRationalPitchWithMaybeSagittalSymbol> =
    notatingCommaWithMaybeSagittalSymbols.map(computeNotatingCommaWithMaybeSagittalSymbolRow)
maybeNotatingCommaWithMaybeSagittalSymbolsTable.unshift(NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW)
saveLog(BLANK, LogTarget.ALL, PITCH_SCRIPT_GROUP)
saveLog("   --- notating commas ---" as IO, LogTarget.ALL, PITCH_SCRIPT_GROUP)
saveLog(BLANK, LogTarget.ALL, PITCH_SCRIPT_GROUP)
saveLog(formatTable(maybeNotatingCommaWithMaybeSagittalSymbolsTable), LogTarget.ALL, PITCH_SCRIPT_GROUP)
