import {setAllPropertiesOfObjectOnAnother} from "@sagittal/general"
import {DEFAULT_JI_PITCH_SCRIPT_GROUP_SETTINGS} from "../../../../../src/scripts/jiPitch/constants"
import {jiPitchScriptGroupSettings} from "../../../../../src/scripts/jiPitch/globals"

afterEach((): void => {
    setAllPropertiesOfObjectOnAnother({
        objectToChange: jiPitchScriptGroupSettings,
        objectWithProperties: DEFAULT_JI_PITCH_SCRIPT_GROUP_SETTINGS,
    })
})
