import {CommaClassId} from "../../sagittal"
import {Parameter} from "../types"
import {UsefulnessMetricLfcScriptGroupSettings} from "./types"

const INITIAL_USEFULNESS_METRIC_LFC_SCRIPT_GROUP_SETTINGS: UsefulnessMetricLfcScriptGroupSettings = {
    extremeCaptureZones: true,
    sosMode: false,
}

const EXCLUDED_COMMAS: CommaClassId[] = [
    CommaClassId._14641_k,
    CommaClassId._19_4375_s,
]

const DEFAULT_USEFULNESS_PARAMETER_VALUE = 1 as Parameter

export {
    INITIAL_USEFULNESS_METRIC_LFC_SCRIPT_GROUP_SETTINGS,
    EXCLUDED_COMMAS,
    DEFAULT_USEFULNESS_PARAMETER_VALUE,
}
