import {setAllPropertiesOfObjectOnAnother} from "@sagittal/general"
import {DEFAULT_POPULAR_2_3_FREE_CLASSES_SCRIPT_GROUP_SETTINGS} from "../../../../../src/scripts/popular23FreeClass/constants"
import {popular23FreeClassesScriptGroupSettings} from "../../../../../src/scripts/popular23FreeClass/globals"

afterEach((): void => {
    setAllPropertiesOfObjectOnAnother({
        objectToChange: popular23FreeClassesScriptGroupSettings,
        objectWithProperties: DEFAULT_POPULAR_2_3_FREE_CLASSES_SCRIPT_GROUP_SETTINGS,
    })
})
