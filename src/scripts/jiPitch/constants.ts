import {KeyPath} from "../../general"
import {JiPitchesOrFindCommasField, JiPitchScriptGroupSettings} from "./types"

const INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS: JiPitchScriptGroupSettings = {
    sortKey: ["two3FreeClassAnalysis", "n2d3p9"] as KeyPath,
    commaNameOptions: {},
    excludedFields: [JiPitchesOrFindCommasField.SIZE_CATEGORY],
    orderedFields: undefined,
}

// We must use this enum rather than the union type because it's technically a "type" not an "enum"
// And only enums have that special duality as actual JS objects
// However, the JiPitchScriptGroupField enum actually encompasses all the same fields
// In other words, the union type isn't strictly necessary; it's mostly expressing the conceptual truth
const JI_PITCH_SCRIPT_GROUP_FIELDS = Object.values(JiPitchesOrFindCommasField)

export {
    INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS,
    JI_PITCH_SCRIPT_GROUP_FIELDS,
}
