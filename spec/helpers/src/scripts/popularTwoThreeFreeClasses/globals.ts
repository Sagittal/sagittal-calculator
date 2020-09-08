import { setAllPropertiesOfObjectOnAnother } from "../../../../../src/general/code/setAllPropertiesOfObjectOnAnother"
import { INITIAL_POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP_SETTINGS } from "../../../../../src/scripts/popularTwoThreeFreeClasses/constants"
import { popularTwoThreeFreeClassesScriptGroupSettings } from "../../../../../src/scripts/popularTwoThreeFreeClasses/globals"

afterEach(() => {
    setAllPropertiesOfObjectOnAnother({
        objectToChange: popularTwoThreeFreeClassesScriptGroupSettings,
        objectWithProperties: INITIAL_POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP_SETTINGS,
    })
})
