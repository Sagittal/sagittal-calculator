import {Parameter} from "../../general"
import {CommaClassId} from "../../sagittal"
import {ComplexityMetricLfcScriptGroupSettings} from "./types"

const INITIAL_COMPLEXITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS: ComplexityMetricLfcScriptGroupSettings = {
    extremeCaptureZones: true,
    sosMode: false,
}

const EXCLUDED_COMMAS: CommaClassId[] = [
    CommaClassId._14641_k,
    CommaClassId._19_4375_s,
]

const DEFAULT_COMPLEXITY_PARAMETER_VALUE = 1 as Parameter

export {
    INITIAL_COMPLEXITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS,
    EXCLUDED_COMMAS,
    DEFAULT_COMPLEXITY_PARAMETER_VALUE,
}
