import { INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS } from "./constants"
import { JiPitchScriptGroupSettings } from "./types"

// TODO: I should probably re-organize this to have a folder roughly corresponding to each command

const jiPitchScriptGroupSettings: JiPitchScriptGroupSettings =
    JSON.parse(JSON.stringify(INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS))

export {
    jiPitchScriptGroupSettings,
}
