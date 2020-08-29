import "colors"
import { program } from "commander"
import { CommandFlag, Filename, LogTarget, parseCommands, saveLog } from "../../../general"
import { DEFAULT_MAX_N2D3P9 } from "../constants"
import { computePopularRatiosTable } from "../io"
import { computePopularRatios } from "../popularRatios"

// TODO: consider adding a layer which pre-calculates numerators up to 3501 per Dave's suggestion on the forum

program
    .option(`-${CommandFlag.MAX_N2D3P9}, --max-n2d3p9 [maxN2D3P9]`, "max N2D3P9", parseFloat)

parseCommands("popularRatios" as Filename)

const maxN2D3P9 = program.maxN2d3p9 || DEFAULT_MAX_N2D3P9

const popularRatios = computePopularRatios(maxN2D3P9)

saveLog(computePopularRatiosTable(popularRatios, maxN2D3P9), LogTarget.ALL, "popularRatios" as Filename)
