import { setAllPropertiesOfObjectOnAnother } from "../../../../../src/general/code/setAllPropertiesOfObjectOnAnother"
import { INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS } from "../../../../../src/scripts/jiPitch/constants"
import { jiPitchScriptGroupSettings } from "../../../../../src/scripts/jiPitch/globals"

afterEach(() => {
    setAllPropertiesOfObjectOnAnother({
        objectToChange: jiPitchScriptGroupSettings,
        objectWithProperties: INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS,
    })
})
