import { program } from "commander"
import {
    ANY_MONZO_CHARS,
    CommandFlag, computeMonzoFromInteger,
    computeMonzoFromRatio,
    Formatted,
    IDENTIFYING_COMMA_NAME_CHARS,
    Io,
    LogTarget,
    Monzo,
    Name,
    parseInteger,
    parseMonzo,
    parseRatio,
    Ratio,
    saveLog,
} from "../../../general"
import {
    AnalyzedRationalPitch,
    analyzeRationalPitch,
    computeMonzoFromFiveRoughRatioAndSizeCategoryName,
    parseCommaName,
} from "../../../sagittal"
import { PITCH_SCRIPT_GROUP } from "../constants"
import { pitchScriptGroupSettings } from "../globals"
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
        "comma name",
        (commaNameText: string) => parseCommaName(commaNameText as Name<AnalyzedRationalPitch>)
    )

applySharedPitchCommandSetup()

const rationalPitch = program.args[ 0 ] as Io
let monzo
if (rationalPitch) {
    if (rationalPitch.match(IDENTIFYING_COMMA_NAME_CHARS)) {
        const { fiveRoughRatio, sizeCategoryName } = parseCommaName(rationalPitch as Name<AnalyzedRationalPitch>)
        monzo = computeMonzoFromFiveRoughRatioAndSizeCategoryName({ fiveRoughRatio, sizeCategoryName })
    } else if (rationalPitch.includes("/")) {
        const ratio = parseRatio(rationalPitch as Formatted<Ratio>)
        monzo = computeMonzoFromRatio(ratio)
    } else if (rationalPitch.match(ANY_MONZO_CHARS)) {
        monzo = parseMonzo(rationalPitch as Formatted<Monzo>)
    } else {
        const integer = parseInteger(rationalPitch)
        monzo = computeMonzoFromInteger(integer)
    }
} else if (program.monzo) {
    monzo = program.monzo
} else if (program.ratio) {
    monzo = computeMonzoFromRatio(program.ratio)
} else if (program.commaName) {
    monzo = computeMonzoFromFiveRoughRatioAndSizeCategoryName(program.commaName)
}
if (!monzo) {
    throw new Error("Unable to determine monzo for rational pitch.")
}

// TODO:
/*
I think it should tell you what maxes, mins, etc. it used when it analyzes/finds pitches

and I also think it should adjust the defaults if your own rational pitch is outside them
so that it will always be the case that your rational pitch appears in its own notating commas list

the difference between

npm run analyze-rational-pitch 209/208

and

npm run analyze-rational-pitch 209/208 -- --max-n2d3p9 500
*/

const analyzedRationalPitch = analyzeRationalPitch(
    monzo,
    { giveName: false, ...pitchScriptGroupSettings.commaNameOptions },
)
saveLog(formatRationalPitch(analyzedRationalPitch), LogTarget.ALL, PITCH_SCRIPT_GROUP)

const notatingCommasFormattedTable = computeNotatingCommasTable(monzo)
saveLog(notatingCommasFormattedTable, LogTarget.ALL, PITCH_SCRIPT_GROUP)
