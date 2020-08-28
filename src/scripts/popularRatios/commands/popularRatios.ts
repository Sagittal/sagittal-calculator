import { program } from "commander"
import { DEFAULT_MAX_N2D3P9 } from "../constants"
import { computePopularRatiosTable } from "../io"
import { computePopularRatios } from "../popularRatios"

// TODO: consider adding a layer which pre-calculates numerators up to 3501 per Dave's suggestion on the forum

program
    .option("-m, --max-n2d3p9 [maxN2D3P9]", "max N2D3P9", parseFloat)
    .parse(process.argv)

const maxN2D3P9 = program.maxN2d3p9 || DEFAULT_MAX_N2D3P9

const popularRatios = computePopularRatios(maxN2D3P9)

console.log(computePopularRatiosTable(popularRatios, maxN2D3P9))
