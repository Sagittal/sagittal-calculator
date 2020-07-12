// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

import "colors"
import { program } from "commander"
import { recursivelyFindUnpopularityMetric } from "../automator/recursivelyFind"
import { Parameter, SampleConfig } from "../types"
import { RESOLUTION } from "../automator/samples/constants"

program
    .option("-r, --recursive", "recursive")
    .option("-d, --debug", "debug")
    .parse(process.argv)

const recurse = !!program.recursive
const debug = !!program.debug

const sampleConfig = [
    {
        [ Parameter.K ]: { center: 1, range: 2, resolution: RESOLUTION },
        [ Parameter.A ]: { center: 2.00001, range: 2, resolution: RESOLUTION },
        [ Parameter.A_IS_BASE ]: true,
        [ Parameter.Y ]: { center: 2, range: 4, resolution: RESOLUTION },
        [ Parameter.W ]: { center: -2.00001, range: 3, resolution: RESOLUTION },
    },
] as SampleConfig

const bestMetric = recursivelyFindUnpopularityMetric(sampleConfig, { recurse, debug })

console.log(`\nbest metric: ${JSON.stringify(bestMetric)}`[ "green" ])
