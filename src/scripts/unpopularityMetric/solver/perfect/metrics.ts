import { DebugTarget, saveDebugMessage } from "../../debug"
import { bestMetrics, solverStatus } from "../../globals"
import { MAXIMUM_UNIT } from "../../bestMetric/scopeToSamples"
import { Unit } from "../../../../general"
import { ParameterValue } from "../../sumOfSquares"
import { perfectMetric } from "./metric"

const perfectMetrics = async () => {
    saveDebugMessage(`\n\nPERFECTING BEST METRICS`, DebugTarget.ALL)
    solverStatus.maximumUnit = MAXIMUM_UNIT / 10 as Unit<ParameterValue>

    const bestMetricsValues = Object.values(bestMetrics)
    const totalToPerfect = bestMetricsValues.length
    let perfectedCount = 0
    const perfectionPromises = bestMetricsValues.map((bestMetric) => {
        return new Promise(async (resolve) => {
            await perfectMetric(bestMetric)
            perfectedCount = perfectedCount + 1
            saveDebugMessage(`perfected ${perfectedCount}/${totalToPerfect}`, DebugTarget.ALL)
            resolve()
        })
    })

    await Promise.all(perfectionPromises)
}

export {
    perfectMetrics,
}
