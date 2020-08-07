import "colors"
import { isNumber } from "../../../general/code"
import { Metric } from "../bestMetric"
import { DebugTarget, saveDebugMessage, setDebugTargets } from "../debug"
import { CUT_OFF_POPULARITY } from "../sumOfSquares/constants"
import { COMMA_POPULARITIES } from "../sumOfSquares/popularities"
import { Popularity } from "../sumOfSquares/types"
import { computeUnpopularities } from "../sumOfSquares/unpopularities"

setDebugTargets(DebugTarget.ALL)

const potentiallyRottens = {} as unknown as Record<string, Metric> // paste things in from 1.txt, 2.txt, etc.

const realPopularities: Popularity[] = COMMA_POPULARITIES.slice(0, CUT_OFF_POPULARITY)

const noRottens = Object.entries(potentiallyRottens).reduce(
    (noRottens: Record<string, Metric>, [potentiallyRottenName, potentiallyRottenMetric]: [string, Metric]) => {
        const unpopularities = computeUnpopularities(realPopularities, potentiallyRottenMetric.submetrics)
        if (unpopularities.some(unpopularity => !isNumber(unpopularity.antivotes))) {
            console.log("nope")
            return noRottens
        }

        return {
            ...noRottens,
            [potentiallyRottenName]: potentiallyRottenMetric,
        }
    },
    {} as Record<string, Metric>,
)

saveDebugMessage(JSON.stringify(noRottens, null, 4), DebugTarget.ALL)
