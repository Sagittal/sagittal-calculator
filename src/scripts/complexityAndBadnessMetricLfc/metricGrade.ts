import {Comma, Grade, Sum} from "@sagittal/general"
import {CommaClassId} from "@sagittal/system"
import {EXCLUDED_COMMAS} from "./constants"
import {complexityAndBadnessMetricLfcScriptGroupSettings} from "./globals"
import {ComplexityMetric, ComplexityParameterSet} from "./types"
import {computeZoneComplexityMetricGrade} from "./zoneMetricGrade"

const computeMetricGradeForMetricAndParameterSet = (
    metric: ComplexityMetric,
    complexityParameterSet: ComplexityParameterSet,
): Sum<Grade<ComplexityMetric>> => {
    let metricGrade = 0 as Sum<Grade<ComplexityMetric>>

    complexityAndBadnessMetricLfcScriptGroupSettings.zoneCommaEntries
        .forEach(([commaClassId, commas]: [CommaClassId, Comma[]]): void => {
            if (EXCLUDED_COMMAS.includes(commaClassId)) return

            const complexityMetricGradeForCommaZone =
                computeZoneComplexityMetricGrade([commaClassId, commas], metric, complexityParameterSet)

            metricGrade = metricGrade + complexityMetricGradeForCommaZone as Sum<Grade<ComplexityMetric>>
        })

    return metricGrade
}

export {
    computeMetricGradeForMetricAndParameterSet,
}
