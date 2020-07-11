// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

import "colors"
import { program } from "commander"
import { RESOLUTION } from "../automator/constants"
import { recursivelyFindUnpopularityMetric } from "../automator/recursivelyFind"
import { Parameter } from "../types"

program
    .option("-r, --recursive", "recursive")
    .option("-q, --quiet", "quiet")
    .parse(process.argv)

const recurse = !!program.recursive
const quiet = !!program.quiet

const configs = [
    {
        [ Parameter.K ]: { center: 1, range: 2, count: RESOLUTION },
        [ Parameter.A ]: { center: 2.00001, range: 2, count: RESOLUTION },
        [ Parameter.A_IS_BASE ]: true,
        [ Parameter.Y ]: { center: 2, range: 4, count: RESOLUTION },
        [ Parameter.W ]: { center: -2.00001, range: 3, count: RESOLUTION },
    },
]

const bestMetric = recursivelyFindUnpopularityMetric(configs, { recurse, quiet })

console.log(`\nfinal best: ${JSON.stringify(bestMetric)}`[ "green" ])
