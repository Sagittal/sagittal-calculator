import { INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS } from "./constants"
import { JiPitchScriptGroupSettings } from "./types"

// TODO: I should probably re-organize this to have a folder roughly corresponding to each command
//  ... or either that slice it the other way, and divide up rows from outputs etc.

const jiPitchScriptGroupSettings: JiPitchScriptGroupSettings =
    JSON.parse(JSON.stringify(INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS))

export {
    jiPitchScriptGroupSettings,
}
