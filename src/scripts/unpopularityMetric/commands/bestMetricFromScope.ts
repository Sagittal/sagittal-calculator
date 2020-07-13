// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

import "colors"
import { program } from "commander"
import { DynamicParameterValue, Parameter, Scope } from "../types"
import { computeBestMetric } from "../solver/search/bestMetric/bestMetric"
import { computeResolution } from "../solver/search/scopeToSamples/resolution"
import { Span } from "../../../utilities/types"

program
    .option("-r, --recursive", "recursive")
    .option("-d, --debug", "debug")
    .option("-m, --maximum-unit", "maximum unit")
    .parse(process.argv)

const recurse = !!program.recursive
const debug = !!program.debug
const maximumUnit = program.maximumUnit

const scope = [
    {
        [ Parameter.K ]: { center: 1, span: 0.02, resolution: computeResolution(0.02 as Span<DynamicParameterValue>, { maximumUnit }) },
        [ Parameter.A ]: { center: 2.00001, span: 0.02, resolution: computeResolution(0.02 as Span<DynamicParameterValue>, { maximumUnit }) },
        [ Parameter.A_IS_BASE ]: true,
        [ Parameter.Y ]: { center: 2, span: 0.04, resolution: computeResolution(0.04 as Span<DynamicParameterValue>, { maximumUnit }) },
        [ Parameter.W ]: { center: -2.00001, span: 0.03, resolution: computeResolution(0.03 as Span<DynamicParameterValue>, { maximumUnit }) },
    },
] as Scope

const bestMetric = computeBestMetric(scope, { recurse, debug })

console.log(`\nbest metric: ${JSON.stringify(bestMetric)}`[ "green" ])
