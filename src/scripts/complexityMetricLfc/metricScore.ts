import {Comma, LogTarget, saveLog, Score, Sum} from "../../general"
import {CommaClassId} from "../../sagittal"
import {EXCLUDED_COMMAS} from "./constants"
import {complexityMetricLfcScriptGroupSettings} from "./globals"
import {ComplexityMetric, ComplexityParameterSet} from "./types"
import {computeZoneComplexityMetricScore} from "./zoneMetricScore"

const computeMetricScoreForMetricAndParameterSet = (
    metric: ComplexityMetric,
    complexityParameterSet: ComplexityParameterSet,
): Sum<Score<ComplexityMetric>> => {
    let metricScore = 0 as Sum<Score<ComplexityMetric>>

    complexityMetricLfcScriptGroupSettings.zoneCommaEntries
        .forEach(([commaClassId, commas]: [CommaClassId, Comma[]]): void => {
            if (EXCLUDED_COMMAS.includes(commaClassId)) return

            const complexityMetricScoreForCommaZone =
                computeZoneComplexityMetricScore([commaClassId, commas], metric, complexityParameterSet)
            saveLog(
                `complexity metric score for ${commaClassId}: ${complexityMetricScoreForCommaZone}`,
                LogTarget.DETAILS,
            )
            metricScore = metricScore + complexityMetricScoreForCommaZone as Sum<Score<ComplexityMetric>>
        })

    return metricScore
}

export {
    computeMetricScoreForMetricAndParameterSet,
}
