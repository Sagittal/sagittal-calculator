// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

import "colors"
import { program } from "commander"
import { Parameter, Scope } from "../types"
import { computeBestMetric } from "../solver/search/bestMetric"

program
    .option("-r, --recursive", "recursive")
    .option("-d, --debug", "debug")
    // todo: take maximum unit as a parameter
    .parse(process.argv)

const recurse = !!program.recursive
const debug = !!program.debug

const scope = [
    {
        [ Parameter.K ]: { center: 1, range: 2 },
        [ Parameter.A ]: { center: 2.00001, range: 2 },
        [ Parameter.A_IS_BASE ]: true,
        [ Parameter.Y ]: { center: 2, range: 4 },
        [ Parameter.W ]: { center: -2.00001, range: 3 },
    },
] as Scope

const bestMetric = computeBestMetric(scope, { recurse, debug })

console.log(`\nbest metric: ${JSON.stringify(bestMetric)}`[ "green" ])
