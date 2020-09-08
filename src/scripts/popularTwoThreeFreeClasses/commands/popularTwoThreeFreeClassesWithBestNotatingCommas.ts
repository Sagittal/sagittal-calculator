import { program } from "commander"
import { CommandFlag, LogTarget, parseCommands, saveLog } from "../../../general"
import { DEFAULT_MAX_N2D3P9_FOR_POPULAR_TWO_THREE_FREE_CLASSES, POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP } from "../constants"
import { popularTwoThreeFreeClassesScriptGroupSettings } from "../globals"
import { computePopularTwoThreeFreeClassesWithBestNotatingCommasTable } from "../io"
import { computePopularTwoThreeFreeClassesWithBestNotatingCommas } from "../popularTwoThreeFreeClassesWithBestNotatingCommas"

program
    .option(`-${CommandFlag.MAX_N2D3P9}, --max-n2d3p9 [maxN2D3P9]`, "max N2D3P9", parseFloat)
    .option(`-${CommandFlag.USE_LATE}, --use-late`, "use LATE (instead of LAAS)")

parseCommands(POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP)

const maxN2D3P9 = program.maxN2d3p9 || DEFAULT_MAX_N2D3P9_FOR_POPULAR_TWO_THREE_FREE_CLASSES
popularTwoThreeFreeClassesScriptGroupSettings.useLate = program.useLate

const popularTwoThreeFreeClassesWithBestNotatingCommas =
    computePopularTwoThreeFreeClassesWithBestNotatingCommas(maxN2D3P9)

// TODO: obviously there's a horrendous amount of duplication being introduced in this commit
//  you'll eventually want to deal with that

saveLog(
    computePopularTwoThreeFreeClassesWithBestNotatingCommasTable(
        popularTwoThreeFreeClassesWithBestNotatingCommas,
        maxN2D3P9
    ),
    LogTarget.ALL,
    POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP,
)
