import { program } from "commander"
import { CommandFlag, LogTarget, parseCommands, saveLog } from "../../../general"
import { DEFAULT_MAX_N2D3P9_FOR_POPULAR_RATIOS, POPULAR_RATIOS_SCRIPT_GROUP } from "../constants"
import { computePopularRatiosTable } from "../io"
import { computeKnownPopularRatios } from "../knownPopularRatios"
import { computePopularRatios } from "../popularRatios"

// TODO: consider adding a layer which pre-calculates numerators up to 3501 per Dave's suggestion on the forum

program
    .option(`-${CommandFlag.MAX_N2D3P9}, --max-n2d3p9 [maxN2D3P9]`, "max N2D3P9", parseFloat)
    .option(`-${CommandFlag.KNOWN_POPULAR_RATIOS}, --known-popular-ratios`, "known popular ratios")

parseCommands(POPULAR_RATIOS_SCRIPT_GROUP)

const maxN2D3P9 = program.maxN2d3p9 || DEFAULT_MAX_N2D3P9_FOR_POPULAR_RATIOS
const knownPopularRatios = program.knownPopularRatios

const popularRatios = knownPopularRatios ? computeKnownPopularRatios() : computePopularRatios(maxN2D3P9)

saveLog(computePopularRatiosTable(popularRatios, maxN2D3P9), LogTarget.ALL, POPULAR_RATIOS_SCRIPT_GROUP)
