import { Combination } from "../../../general"
import { Submetric } from "../sumOfSquares"

const computeMetricName = (submetrics: Combination<Submetric>) => {
    const submetricNames = submetrics.map(submetric => {
        return Object.keys(submetric).sort().join(",")
    })

    return submetricNames.map(submetricName => `{${submetricName}}`).join(",")
}

export {
    computeMetricName,
}
