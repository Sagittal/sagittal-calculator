import {
    COMMA_POPULARITIES,
    Filename,
    IO,
    isNumber,
    LogTarget,
    Popularity,
    Ranked,
    saveLog,
    stringify,
} from "../../../../general"
import { Metric } from "../../bestMetric"
import { LFC_SCRIPT_GROUP } from "../../constants"
import { lfcScriptGroupSettings } from "../../globals"
import { computeUnpopularities } from "../../sumOfSquares"
import { applySharedLfcCommandSetup, load } from "../shared"

applySharedLfcCommandSetup()

const potentiallyRottens = load("metrics" as Filename) as Record<string, Metric>

const realPopularities: Array<Ranked<Popularity>> = COMMA_POPULARITIES.slice(0, lfcScriptGroupSettings.onlyTop)

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

saveLog(stringify(noRottens, { multiline: true }) as IO, LogTarget.ALL, LFC_SCRIPT_GROUP)
