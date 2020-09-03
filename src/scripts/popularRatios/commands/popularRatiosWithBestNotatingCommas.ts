import { program } from "commander"
import { CommandFlag, LogTarget, parseCommands, saveLog } from "../../../general"
import { DEFAULT_MAX_N2D3P9, POPULAR_RATIOS_SCRIPT_GROUP } from "../constants"
import { computePopularRatiosWithBestNotatingCommasTable } from "../io"
import { computePopularRatiosWithBestNotatingCommas } from "../popularRatiosWithBestNotatingCommas"

program
    .option(`-${CommandFlag.MAX_N2D3P9}, --max-n2d3p9 [maxN2D3P9]`, "max N2D3P9", parseFloat)

parseCommands(POPULAR_RATIOS_SCRIPT_GROUP)

const maxN2D3P9 = program.maxN2d3p9 || DEFAULT_MAX_N2D3P9

const popularRatiosWithBestNotatingCommas = computePopularRatiosWithBestNotatingCommas(maxN2D3P9)

// TODO: obviously there's a horrendous amount of duplication being introduced in this commit
//  you'll eventually want to deal with that

saveLog(
    computePopularRatiosWithBestNotatingCommasTable(popularRatiosWithBestNotatingCommas, maxN2D3P9),
    LogTarget.ALL,
    POPULAR_RATIOS_SCRIPT_GROUP,
)
