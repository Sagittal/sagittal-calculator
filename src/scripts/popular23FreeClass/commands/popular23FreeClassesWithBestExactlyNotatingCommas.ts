import { program } from "commander"
import { CommandFlag, Filename, Io, ioSettings, LogTarget, parseCommands, saveLog, time } from "../../../general"
import { ScriptGroup } from "../../types"
import { DEFAULT_MAX_N2D3P9_FOR_POPULAR_TWO_THREE_FREE_CLASSES } from "../constants"
import { popular23FreeClassesScriptGroupSettings } from "../globals"
import { computePopular23FreeClassesWithBestExactlyNotatingCommasOutput } from "../io"
import { computePopular23FreeClassesWithBestExactlyNotatingCommas } from "../popular23FreeClassesWithBestExactlyNotatingCommas"

program
    .option(`-${CommandFlag.MAX_N2D3P9}, --max-n2d3p9 [maxN2D3P9]`, "max N2D3P9", parseFloat)
    .option(`-${CommandFlag.USE_LATE}, --use-late`, "use LATE (instead of LAAS)")

parseCommands(ScriptGroup.POPULAR_2_3_FREE_CLASSES as Filename)

const maxN2D3P9 = program.maxN2d3p9 || DEFAULT_MAX_N2D3P9_FOR_POPULAR_TWO_THREE_FREE_CLASSES
popular23FreeClassesScriptGroupSettings.useLate = program.useLate

ioSettings.scriptGroup = ScriptGroup.POPULAR_2_3_FREE_CLASSES as Filename

const popular23FreeClassesWithBestExactlyNotatingCommas =
    computePopular23FreeClassesWithBestExactlyNotatingCommas(maxN2D3P9)

// TODO: obviously there's a horrendous amount of duplication being introduced in this commit
//  between the "with best notating commas" or not versions of everything
//  and you should increase the unit test coverage when you get to that

const popular23FreeClassesWithBestExactlyNotatingCommasOutput: Io =
    computePopular23FreeClassesWithBestExactlyNotatingCommasOutput(
        popular23FreeClassesWithBestExactlyNotatingCommas,
        maxN2D3P9,
    )
saveLog(popular23FreeClassesWithBestExactlyNotatingCommasOutput, LogTarget.ALL)

if (ioSettings.time) saveLog(`\ntook ${time()}` as Io, LogTarget.ALL)
