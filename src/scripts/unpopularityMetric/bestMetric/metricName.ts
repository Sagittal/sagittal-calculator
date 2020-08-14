import { MetricName, Scope } from "./types"

const computeMetricName = (scope: Scope): MetricName => {
    const submetricNames = scope.map(submetricScope => {
        return Object.keys(submetricScope).sort().join(",")
    })

    return submetricNames.sort().map(submetricName => `{${submetricName}}`).join(",") as MetricName
}

export {
    computeMetricName,
}
