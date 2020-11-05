import {INITIAL_COMPLEXITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS} from "./constants"
import {ComplexityMetricLfcScriptGroupSettings} from "./types"

const complexityMetricLfcScriptGroupSettings: ComplexityMetricLfcScriptGroupSettings =
    JSON.parse(JSON.stringify(INITIAL_COMPLEXITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS))

export {
    complexityMetricLfcScriptGroupSettings,
}
