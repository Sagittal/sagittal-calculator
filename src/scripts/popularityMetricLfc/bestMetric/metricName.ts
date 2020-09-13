import { Name, sort } from "../../../general"
import { Submetric } from "../sumOfSquares"
import { MetricName, Scope, SubmetricScope } from "./types"

const computeMetricName = (scope: Scope): MetricName => {
    const submetricNames = scope.map((submetricScope: SubmetricScope): Name<Submetric> => {
        return sort(Object.keys(submetricScope)).join(",") as Name<Submetric>
    })

    return sort(submetricNames).map((submetricName: Name<Submetric>): string => {
        return `{${submetricName}}`
    }).join(",") as MetricName
}

export {
    computeMetricName,
}
