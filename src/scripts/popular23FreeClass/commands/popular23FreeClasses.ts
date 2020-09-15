import { program } from "commander"
import { CommandFlag, Filename, Io, ioSettings, LogTarget, parseCommands, saveLog, time } from "../../../general"
import { ScriptGroup } from "../../types"
import { DEFAULT_MAX_N2D3P9_FOR_POPULAR_TWO_THREE_FREE_CLASSES } from "../constants"
import { popular23FreeClassesScriptGroupSettings } from "../globals"
import { computePopular23FreeClassesOutput } from "../io"
import { computePopular23FreeClasses } from "../popular23FreeClasses"

// TODO: consider adding a layer which pre-calculates numerators up to 3501 per Dave's suggestion on the forum

program
    .option(`-${CommandFlag.MAX_N2D3P9}, --max-n2d3p9 [maxN2D3P9]`, "max N2D3P9", parseFloat)
    .option(`-${CommandFlag.USE_KNOWN_POPULAR_TWO_THREE_FREE_CLASSES}, --use-known`, "use known popular 2,3-free classes")

parseCommands(ScriptGroup.POPULAR_2_3_FREE_CLASSES as Filename)

const maxN2D3P9 = program.maxN2d3p9 || DEFAULT_MAX_N2D3P9_FOR_POPULAR_TWO_THREE_FREE_CLASSES
popular23FreeClassesScriptGroupSettings.useKnown = program.useKnown

ioSettings.scriptGroup = ScriptGroup.POPULAR_2_3_FREE_CLASSES as Filename

const popular23FreeClasses = computePopular23FreeClasses(maxN2D3P9)

const popular23FreeClassesOutput: Io = computePopular23FreeClassesOutput(popular23FreeClasses, maxN2D3P9)
saveLog(popular23FreeClassesOutput, LogTarget.ALL)

if (ioSettings.time) saveLog(`\ntook ${time()}` as Io, LogTarget.ALL)
