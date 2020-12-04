import {DEFAULT_COMPLEXITY_AND_BADNESS_METRIC_LFC_SCRIPT_GROUP_SETTINGS} from "./constants"
import {ComplexityAndBadnessMetricLfcScriptGroupSettings} from "./types"

const complexityAndBadnessMetricLfcScriptGroupSettings: ComplexityAndBadnessMetricLfcScriptGroupSettings =
    JSON.parse(JSON.stringify(DEFAULT_COMPLEXITY_AND_BADNESS_METRIC_LFC_SCRIPT_GROUP_SETTINGS))

export {
    complexityAndBadnessMetricLfcScriptGroupSettings,
}
