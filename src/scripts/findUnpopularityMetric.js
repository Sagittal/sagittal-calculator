// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

require("colors")
const {program} = require("commander")
const {SUBMETRIC_TYPE, PARAMETER} = require("./unpopularityMetric/constants")
const {RESOLUTION} = require("./unpopularityMetric/automator/constants")
const {recursivelyFindUnpopularityMetric} = require("./unpopularityMetric/automator/recursivelyFind")

program
    .option("-r, --recursive", "recursive")
    .option("-q, --quiet", "quiet")
    .parse(process.argv)

const recurse = !!program.recursive
const quiet = !!program.quiet

const configs = [
    {
        [PARAMETER.K]: {center: 1, range: 2, count: RESOLUTION},
        [PARAMETER.A]: {center: 2.00001, range: 2, count: RESOLUTION},
        [PARAMETER.A_IS_BASE]: true,
        [PARAMETER.Y]: {center: 2, range: 4, count: RESOLUTION},
        [PARAMETER.W]: {center: -2.00001, range: 3, count: RESOLUTION},
    },
]

const best = recursivelyFindUnpopularityMetric(configs, { recurse, quiet })

console.log(`\nfinal best: ${JSON.stringify(best)}`.green)
