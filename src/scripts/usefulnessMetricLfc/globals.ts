import {INITIAL_USEFULNESS_METRIC_LFC_SCRIPT_GROUP_SETTINGS} from "./constants"
import {UsefulnessMetricLfcScriptGroupSettings} from "./types"

const usefulnessMetricLfcScriptGroupSettings: UsefulnessMetricLfcScriptGroupSettings =
    JSON.parse(JSON.stringify(INITIAL_USEFULNESS_METRIC_LFC_SCRIPT_GROUP_SETTINGS))

export {
    usefulnessMetricLfcScriptGroupSettings,
}
