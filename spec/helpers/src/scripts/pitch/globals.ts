import { setAllPropertiesOfObjectOnAnother } from "../../../../../src/general/code/setAllPropertiesOfObjectOnAnother"
import { INITIAL_PITCH_SCRIPT_GROUP_SETTINGS } from "../../../../../src/scripts/pitch/constants"
import { pitchScriptGroupSettings } from "../../../../../src/scripts/pitch/globals"

afterEach(() => {
    setAllPropertiesOfObjectOnAnother({
        objectToChange: pitchScriptGroupSettings,
        objectWithProperties: INITIAL_PITCH_SCRIPT_GROUP_SETTINGS,
    })
})
