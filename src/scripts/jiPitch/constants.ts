import {computeKeyPath} from "@sagittal/general"
import {JiPitchesOrFindCommasField, JiPitchScriptGroupSettings} from "./types"

const DEFAULT_JI_PITCH_SCRIPT_GROUP_EXCLUDED_FIELDS = [JiPitchesOrFindCommasField.SIZE_CATEGORY]

const DEFAULT_JI_PITCH_SCRIPT_GROUP_SETTINGS: JiPitchScriptGroupSettings = {
    sortBy: undefined,
    commaNameOptions: {},
    excludedFields: DEFAULT_JI_PITCH_SCRIPT_GROUP_EXCLUDED_FIELDS,
    orderedFields: undefined,
}

const DEFAULT_ANALYZE_JI_PITCH_AND_FIND_COMMAS_SORT_KEY = computeKeyPath("two3FreeClassAnalysis", "n2d3p9")

// We must use this enum rather than the union type because it's technically a "type" not an "enum"
// And only enums have that special duality as actual JS objects
// However, the JiPitchScriptGroupField enum actually encompasses all the same fields
// In other words, the union type isn't strictly necessary; it's mostly expressing the conceptual truth
const JI_PITCH_SCRIPT_GROUP_FIELDS = Object.values(JiPitchesOrFindCommasField)

export {
    DEFAULT_JI_PITCH_SCRIPT_GROUP_SETTINGS,
    DEFAULT_ANALYZE_JI_PITCH_AND_FIND_COMMAS_SORT_KEY,
    JI_PITCH_SCRIPT_GROUP_FIELDS,
}
