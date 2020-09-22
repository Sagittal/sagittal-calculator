import {
    COMMA_POPULARITIES,
    Filename,
    Io,
    isNumber,
    LogTarget,
    Name,
    Popularity,
    Ranked,
    saveLog,
    stringify,
} from "../../../../general"
import { Metric } from "../../bestMetric"
import { popularityMetricLfcScriptGroupSettings } from "../../globals"
import { computeUnpopularities, Unpopularity } from "../../sumOfSquares"
import { applySharedPopularityMetricLfcCommandSetup, load } from "../shared"

applySharedPopularityMetricLfcCommandSetup()

const potentiallyRottens = load("metrics" as Filename) as Record<Name<Metric>, Metric>

const realPopularities: Array<Ranked<Popularity>> =
    COMMA_POPULARITIES.slice(0, popularityMetricLfcScriptGroupSettings.onlyTop)

const potentiallyRottenEntries = Object.entries(potentiallyRottens) as Array<[Name<Metric>, Metric]>
const noRottens = potentiallyRottenEntries.reduce(
    (
        noRottens: Record<Name<Metric>, Metric>,
        [potentiallyRottenName, potentiallyRottenMetric]: [Name<Metric>, Metric],
    ): Record<Name<Metric>, Metric> => {
        const unpopularities = computeUnpopularities(realPopularities, potentiallyRottenMetric.submetrics)
        if (unpopularities.some((unpopularity: Unpopularity): boolean => !isNumber(unpopularity.antivotes))) {
            return noRottens
        }

        return {
            ...noRottens,
            [ potentiallyRottenName ]: potentiallyRottenMetric,
        }
    },
    {} as Record<Name<Metric>, Metric>,
)

saveLog(stringify(noRottens, { multiline: true }) as Io, LogTarget.FINAL)
