import * as colors from "colors"
import { program } from "commander"
import { COMMA_POPULARITIES, isNumber, Popularity } from "../../../../general"
import { Metric } from "../../bestMetric"
import { clearDebugLogFiles, debugSettings, DebugTarget, saveDebugMessage, setDebugTargets } from "../../debug"
import { unpopularityMetricSettings } from "../../globals"
import { computeUnpopularities } from "../../sumOfSquares"
import { load } from "../shared"

program
    .option("-d, --debug-targets [debugTargets]", "debug targets")
    .option("-c, --no-color", "no color")
    .option("-w, --no-write", "no write")
    .parse(process.argv)

setDebugTargets(program.debugTargets || DebugTarget.ALL)
if (!program.color) {
    colors.disable()
}
debugSettings.noWrite = !program.write

if (!debugSettings.noWrite) {
    clearDebugLogFiles()
}

const potentiallyRottens = load("metrics") as unknown as Record<string, Metric>

const realPopularities: Popularity[] = COMMA_POPULARITIES.slice(0, unpopularityMetricSettings.onlyTop)

const noRottens = Object.entries(potentiallyRottens).reduce(
    (noRottens: Record<string, Metric>, [potentiallyRottenName, potentiallyRottenMetric]: [string, Metric]) => {
        const unpopularities = computeUnpopularities(realPopularities, potentiallyRottenMetric.submetrics)
        if (unpopularities.some(unpopularity => !isNumber(unpopularity.antivotes))) {
            return noRottens
        }

        return {
            ...noRottens,
            [ potentiallyRottenName ]: potentiallyRottenMetric,
        }
    },
    {} as Record<string, Metric>,
)

saveDebugMessage(JSON.stringify(noRottens, null, 4), DebugTarget.ALL)
