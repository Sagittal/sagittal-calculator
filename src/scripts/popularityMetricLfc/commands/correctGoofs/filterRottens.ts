import {
    COMMA_POPULARITIES,
    Filename,
    Io,
    isNumber,
    LogTarget,
    Popularity,
    Ranked,
    saveLog,
    stringify,
} from "../../../../general"
import { Metric } from "../../bestMetric"
import { popularityMetricLfcScriptGroupSettings } from "../../globals"
import { computeUnpopularities } from "../../sumOfSquares"
import { applySharedPopularityMetricLfcCommandSetup, load } from "../shared"

applySharedPopularityMetricLfcCommandSetup()

const potentiallyRottens = load("metrics" as Filename) as Record<string, Metric>

const realPopularities: Array<Ranked<Popularity>> =
    COMMA_POPULARITIES.slice(0, popularityMetricLfcScriptGroupSettings.onlyTop)

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

saveLog(stringify(noRottens, { multiline: true }) as Io, LogTarget.ALL)
