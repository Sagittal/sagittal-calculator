// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

import "colors"
import { program } from "commander"
import { RESOLUTION } from "../automator/constants"
import { recursivelyFindUnpopularityMetric } from "../automator/recursivelyFind"
import { Parameter, SubmetricConfig } from "../types"
import { Combination } from "../../../utilities/types"

program
    .option("-r, --recursive", "recursive")
    .option("-d, --debug", "debug")
    .parse(process.argv)

const recurse = !!program.recursive
const debug = !!program.debug

// todo and also should it be "sample configs" ? thought about it before... but it might clarify things... i just had a moment where i was like "best metric from config? well if i have the config already, don't i alreayd know the metric?" but the metric just is the metric, the config is for sampling a vicinity
const submetricConfigs = [ // todo: these should all be submetricConfigCombination... or Combo for short? in solidarity w/ config?
    {
        [ Parameter.K ]: { center: 1, range: 2, resolution: RESOLUTION },
        [ Parameter.A ]: { center: 2.00001, range: 2, resolution: RESOLUTION },
        [ Parameter.A_IS_BASE ]: true,
        [ Parameter.Y ]: { center: 2, range: 4, resolution: RESOLUTION },
        [ Parameter.W ]: { center: -2.00001, range: 3, resolution: RESOLUTION },
    },
] as Combination<SubmetricConfig>

const bestMetric = recursivelyFindUnpopularityMetric(submetricConfigs, { recurse, debug })

console.log(`\nbest metric: ${JSON.stringify(bestMetric)}`[ "green" ])
