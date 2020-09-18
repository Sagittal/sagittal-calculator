import { INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS } from "./constants"
import { JiPitchScriptGroupSettings } from "./types"

const jiPitchScriptGroupSettings: JiPitchScriptGroupSettings =
    JSON.parse(JSON.stringify(INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS))

export {
    jiPitchScriptGroupSettings,
}
