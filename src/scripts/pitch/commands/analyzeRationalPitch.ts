import { program } from "commander"
import {
    addTexts,
    ANY_MONZO_CHARS,
    CommandFlag,
    computeMonzoFromInteger,
    computeMonzoFromRatio,
    Formatted,
    IDENTIFYING_COMMA_NAME_CHARS,
    Io,
    LogTarget,
    Monzo,
    Name, NEWLINE,
    parseInteger,
    parseMonzo,
    parseRatio,
    Ratio,
    RationalPitch,
    saveLog, stringify,
} from "../../../general"
import {
    analyzeRationalPitch,
    Comma,
    computeMonzoFrom23FreeClassAndSizeCategoryName,
    parseCommaName,
} from "../../../sagittal"
import { PITCH_SCRIPT_GROUP } from "../constants"
import { pitchScriptGroupSettings } from "../globals"
import { computeNotatingCommasTable, formatRationalPitch, formatSettings } from "../io"
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
        "comma name",
        (commaNameText: string) => parseCommaName(commaNameText as Name<Comma>),
    )

applySharedPitchCommandSetup()

const rationalPitchText = program.args[ 0 ] as Io
let monzo: Monzo
if (rationalPitchText) {
    if (rationalPitchText.match(IDENTIFYING_COMMA_NAME_CHARS)) {
        const { twoThreeFreeRatio, sizeCategoryName } = parseCommaName(rationalPitchText as Name<Comma>)
        monzo = computeMonzoFrom23FreeClassAndSizeCategoryName({ twoThreeFreeRatio, sizeCategoryName })
    } else if (rationalPitchText.includes("/")) {
        const ratio = parseRatio(rationalPitchText as Formatted<Ratio>)
        monzo = computeMonzoFromRatio(ratio)
    } else if (rationalPitchText.match(ANY_MONZO_CHARS)) {
        monzo = parseMonzo(rationalPitchText as Formatted<Monzo>)
    } else {
        const integer = parseInteger(rationalPitchText)
        monzo = computeMonzoFromInteger(integer)
    }
} else if (program.monzo) {
    monzo = program.monzo
} else if (program.ratio) {
    monzo = computeMonzoFromRatio(program.ratio)
} else if (program.commaName) {
    monzo = computeMonzoFrom23FreeClassAndSizeCategoryName(program.commaName)
} else {
    throw new Error("Unable to determine monzo for rational pitch.")
}

// TODO: it should adjust the defaults if your own rational pitch is outside them
//  so that it will always be the case that your rational pitch appears in its own notating commas list
//  the difference between
//  npm run analyze-rational-pitch 209/208
//  and
//  npm run analyze-rational-pitch 209/208 -- --max-n2d3p9 500

saveLog(addTexts(formatSettings(), NEWLINE), LogTarget.ALL, PITCH_SCRIPT_GROUP)

const rationalPitch: RationalPitch = { monzo }
const analyzedRationalPitch = analyzeRationalPitch(rationalPitch)
saveLog(formatRationalPitch(analyzedRationalPitch), LogTarget.ALL, PITCH_SCRIPT_GROUP)

// TODO: is this not tested, that the comma name options are supposed
//  to affect the notating commas, not the rational pitch?
const notatingCommasFormattedTable = computeNotatingCommasTable(monzo, pitchScriptGroupSettings.commaNameOptions)
saveLog(notatingCommasFormattedTable, LogTarget.ALL, PITCH_SCRIPT_GROUP)
