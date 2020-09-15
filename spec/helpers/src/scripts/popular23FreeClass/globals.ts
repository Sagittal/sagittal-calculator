import { setAllPropertiesOfObjectOnAnother } from "../../../../../src/general/code/setAllPropertiesOfObjectOnAnother"
import { INITIAL_POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP_SETTINGS } from "../../../../../src/scripts/popular23FreeClass/constants"
import { popular23FreeClassesScriptGroupSettings } from "../../../../../src/scripts/popular23FreeClass/globals"

afterEach((): void => {
    setAllPropertiesOfObjectOnAnother({
        objectToChange: popular23FreeClassesScriptGroupSettings,
        objectWithProperties: INITIAL_POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP_SETTINGS,
    })
})
