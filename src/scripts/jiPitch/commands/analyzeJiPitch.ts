import { program } from "commander"
import {
    addTexts,
    Comma,
    CommandFlag,
    Formatted,
    Integer,
    LogTarget,
    Monzo,
    Name,
    NEWLINE,
    parseInteger,
    parseMonzo,
    parseRatio,
    Ratio,
    saveLog,
} from "../../../general"
import { analyzeJiPitch, parseCommaName, ParsedCommaName } from "../../../sagittal"
import { accommodateJiPitchInSettings } from "../accommodateJiPitchInSettings"
import { computeNotatingCommasTable, formatJiPitch, formatSettings, parseJiPitch } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

program
    .option(
        `-${CommandFlag.MONZO}, --monzo <monzo>`,
        "monzo",
        (monzoText: string): Monzo => parseMonzo(monzoText as Formatted<Monzo>),
    )
    .option(
        `-${CommandFlag.RATIO}, --ratio <ratio>`,
        "ratio",
        (ratioText: string): Ratio => parseRatio(ratioText as Formatted<Ratio>),
    )
    .option(
        `-${CommandFlag.COMMA_NAME}, --comma-name <commaName>`,
        "comma name",
        (commaNameText: string): ParsedCommaName => parseCommaName(commaNameText as Name<Comma>),
    )
    .option(
        `-${CommandFlag.INTEGER}, --integer <integer>`,
        "comma name",
        (integerText: string): Integer => parseInteger(integerText),
    )
    .option(
        `-${CommandFlag.SUPPRESS_AUTOMATIC_ADJUSTING_OF_NOTATING_COMMA_FILTERS}, --suppress-automatic-adjusting-of-notating-comma-filters`,
        "suppress automatic adjusting of notating comma filters",
    )

applySharedPitchCommandSetup()

const jiPitch = parseJiPitch()

const jiPitchAnalysis = analyzeJiPitch(jiPitch)
saveLog(formatJiPitch(jiPitchAnalysis), LogTarget.ALL)

accommodateJiPitchInSettings(jiPitchAnalysis, { suppress: program.suppressAutomaticAdjustingOfNotatingCommaFilters })
saveLog(addTexts(NEWLINE, formatSettings(), NEWLINE), LogTarget.ALL)

const notatingCommasFormattedTable = computeNotatingCommasTable(jiPitch)
saveLog(notatingCommasFormattedTable, LogTarget.ALL)

// TODO: okay so I guess we still didn't actually get to it, but I'd like to see this:
//  extricate the limit, 2,3-free sopfr, N2D3P9 from above and put it in a new chart at the bottom
//  --- 2,3-free class ---
//  and then it can have simpler column titles
//  and I think it'll be clearer how that shares all the stuff with the above
//  and actually include the 2,3-free class itself on it!
//  - and along with this, you should try to pull analyzeJiPitch out of sagittal/comma and into music/ji
