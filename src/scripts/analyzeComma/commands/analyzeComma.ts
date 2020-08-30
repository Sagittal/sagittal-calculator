import { program } from "commander"
import {
    ANY_MONZO_CHARS,
    BLANK,
    CommandFlag,
    computeMonzoFromRatio,
    Filename,
    formatTable,
    Formatted,
    IO,
    LogTarget,
    Monzo,
    parseCommands,
    parseMonzo,
    parseRatio,
    Ratio,
    saveLog,
    Table,
} from "../../../general"
import { analyzeComma, computeExactlyNotatingJiSymbolIds, JiSymbol } from "../../../sagittal"
import { computeExactlyNotatingJiSymbolRow, formatComma, NOTATING_SYMBOLS_HEADER_ROW } from "../io"

// TODO: you should also make it accept -n name!

// TODO: perhaps this should actually return the comma info as a row,
//  so you can more easily compare it with the notating symbols
//  though that decision will be intertwined with the one below about the notating symbols table.ts
//  in which case there's a chance that the method we're using to format comma multiline doesn't get used anymore
//  and that may actually be the only multiline thing left at all,
//  which doesn't play well with formatNumber aligning decimal points...
//  okay, I think there's some confusion about what the purpose of this script is
//  between the analyzedComma part and the exactlyNotatingJiSymbols part...
//  the notating symobls needs to include all possible commas that would exactly notate it if they had a symbol
//  and include apotome slope
//  and then the top part needs to NOT return the 5-rough version
//  and the top part should be called "rational pitch" and this whole thing is analyze rational pitch
//  and the bottom part should be called "notating commas" and it should include the symbol subset too

// TODO: this like findCommas should probably have an io/table.ts which allows for either terminal or forum output
//  which would also take the stuff like a pre-header-row as we see in some of the others

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

parseCommands("analyzeComma" as Filename)

const comma = program.args[ 0 ] as IO

let monzo
if (comma) {
    if (comma.includes("/")) {
        monzo = computeMonzoFromRatio(parseRatio(comma as Formatted<Ratio>))
    }
    if (comma.match(ANY_MONZO_CHARS)) {
        monzo = parseMonzo(comma as Formatted<Monzo>)
    }
} else if (program.monzo) {
    monzo = program.monzo
} else if (program.ratio) {
    monzo = computeMonzoFromRatio(program.ratio)
}

if (!monzo) {
    throw new Error("Unable to determine monzo for comma.")
}

const analyzedComma = analyzeComma(monzo)

saveLog(formatComma(analyzedComma), LogTarget.ALL, "analyzeComma" as Filename)

const notatingSymbolIds = computeExactlyNotatingJiSymbolIds(monzo)

const notatingSymbolTable: Table<JiSymbol> = notatingSymbolIds.map(computeExactlyNotatingJiSymbolRow)

notatingSymbolTable.unshift(NOTATING_SYMBOLS_HEADER_ROW)

saveLog(BLANK, LogTarget.ALL, "notatingSymbols" as Filename)
saveLog("   --- notating symbols ---" as IO, LogTarget.ALL, "notatingSymbols" as Filename)
saveLog(BLANK, LogTarget.ALL, "notatingSymbols" as Filename)

saveLog(formatTable(notatingSymbolTable), LogTarget.ALL, "notatingSymbols" as Filename)
