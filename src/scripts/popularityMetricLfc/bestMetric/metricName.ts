import { sort } from "../../../general"
import { MetricName, Scope } from "./types"

const computeMetricName = (scope: Scope): MetricName => {
    const submetricNames = scope.map(submetricScope => {
        return sort(Object.keys(submetricScope)).join(",")
    })

    return sort(submetricNames).map(submetricName => `{${submetricName}}`).join(",") as MetricName
}

export {
    computeMetricName,
}
