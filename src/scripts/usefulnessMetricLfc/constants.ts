import {CommaClassId} from "../../sagittal"
import {UsefulnessMetricLfcScriptGroupSettings} from "./types"

const INITIAL_USEFULNESS_METRIC_LFC_SCRIPT_GROUP_SETTINGS: UsefulnessMetricLfcScriptGroupSettings = {
    extremeCaptureZones: true,
    maxError: 1,
}

const EXCLUDED_COMMAS: CommaClassId[] = [
    CommaClassId._14641_k,
    CommaClassId._19_4375_s,
]

export {
    INITIAL_USEFULNESS_METRIC_LFC_SCRIPT_GROUP_SETTINGS,
    EXCLUDED_COMMAS,
}
