import { Metric } from "./bestMetric"
import { computeUnpopularities } from "./sumOfSquares/unpopularities"
import { isNumber } from "../../general/code"
import { Popularity } from "./sumOfSquares/types"
import { COMMA_POPULARITIES } from "./sumOfSquares/popularities"
import { CUT_OFF_POPULARITY } from "./sumOfSquares/constants"

const potentiallyRottens = {} as unknown as Record<string, Metric> // could paste things in from 1.txt, 2.txt, etc.

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

console.log(JSON.stringify(noRottens, null, 4))
