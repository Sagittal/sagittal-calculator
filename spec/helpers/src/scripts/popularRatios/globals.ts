import { setAllPropertiesOfObjectOnAnother } from "../../../../../src/general/code/setAllPropertiesOfObjectOnAnother"
import { INITIAL_POPULAR_RATIOS_SCRIPT_GROUP_SETTINGS } from "../../../../../src/scripts/popularRatios/constants"
import { popularRatiosScriptGroupSettings } from "../../../../../src/scripts/popularRatios/globals"

afterEach(() => {
    setAllPropertiesOfObjectOnAnother({
        objectToChange: popularRatiosScriptGroupSettings,
        objectWithProperties: INITIAL_POPULAR_RATIOS_SCRIPT_GROUP_SETTINGS,
    })
})
