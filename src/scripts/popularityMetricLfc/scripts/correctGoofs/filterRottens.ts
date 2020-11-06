import {
    COMMA_POPULARITIES,
    Filename,
    isNumber,
    LogTarget,
    Name,
    Ranked,
    saveLog,
    ScalaPopularityStat,
    stringify,
} from "../../../../general"
import {Metric} from "../../bestMetric"
import {popularityMetricLfcScriptGroupSettings} from "../../globals"
import {computeUnpopularities, LfcUnpopularityEstimate} from "../../sumOfSquares"
import {applySharedPopularityMetricLfcScriptSetup, load} from "../shared"

applySharedPopularityMetricLfcScriptSetup()

const potentiallyRottens = load("metrics" as Filename) as Record<Name<Metric>, Metric>

const popularities: Array<Ranked<ScalaPopularityStat>> = COMMA_POPULARITIES
    .slice(0, popularityMetricLfcScriptGroupSettings.onlyTop)

const potentiallyRottenEntries = Object.entries(potentiallyRottens) as Array<[Name<Metric>, Metric]>
const noRottens = potentiallyRottenEntries.reduce(
    (
        noRottens: Record<Name<Metric>, Metric>,
        [potentiallyRottenName, potentiallyRottenMetric]: [Name<Metric>, Metric],
    ): Record<Name<Metric>, Metric> => {
        const unpopularities = computeUnpopularities(popularities, potentiallyRottenMetric.submetrics)
        const gotNaNs = unpopularities
            .some((unpopularity: LfcUnpopularityEstimate): boolean => !isNumber(unpopularity.antivotes))
        if (gotNaNs) return noRottens

        return {
            ...noRottens,
            [potentiallyRottenName]: potentiallyRottenMetric,
        }
    },
    {} as Record<Name<Metric>, Metric>,
)

saveLog(stringify(noRottens, {multiline: true}), LogTarget.FINAL)
