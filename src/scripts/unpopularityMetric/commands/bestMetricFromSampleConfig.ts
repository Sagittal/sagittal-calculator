// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

import "colors"
import { program } from "commander"
import { Parameter, SampleConfig } from "../types"
import { recursivelyFindUnpopularityMetric } from "../automator/process/recursivelyFind"

program
    .option("-r, --recursive", "recursive")
    .option("-d, --debug", "debug")
    // todo: take maximum unit as a parameter
    .parse(process.argv)

const recurse = !!program.recursive
const debug = !!program.debug

const sampleConfig = [
    {
        [ Parameter.K ]: { center: 1, range: 2 },
        [ Parameter.A ]: { center: 2.00001, range: 2 },
        [ Parameter.A_IS_BASE ]: true,
        [ Parameter.Y ]: { center: 2, range: 4 },
        [ Parameter.W ]: { center: -2.00001, range: 3 },
    },
] as SampleConfig

const bestMetric = recursivelyFindUnpopularityMetric(sampleConfig, { recurse, debug })

console.log(`\nbest metric: ${JSON.stringify(bestMetric)}`[ "green" ])
