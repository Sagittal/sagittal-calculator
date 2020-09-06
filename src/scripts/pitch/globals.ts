import { deepClone } from "../../general"
import { INITIAL_PITCH_SCRIPT_GROUP_SETTINGS } from "./constants"

// TODO: and maybe the script group is called "jiPitch" since it's only about JI pitches

const pitchScriptGroupSettings = deepClone(INITIAL_PITCH_SCRIPT_GROUP_SETTINGS)

export {
    pitchScriptGroupSettings,
}
