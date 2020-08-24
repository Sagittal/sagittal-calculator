import { COMMA_POPULARITIES, isNumber, Popularity } from "../../../../general"
import { Metric } from "../../bestMetric"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { unpopularityMetricSettings } from "../../globals"
import { computeUnpopularities } from "../../sumOfSquares"
import { applySharedUnpopularityMetricCommandSetup, load } from "../shared"

applySharedUnpopularityMetricCommandSetup()

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
