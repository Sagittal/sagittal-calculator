import { setAllPropertiesOfObjectOnAnother } from "../../../../../src/general/code/setAllPropertiesOfObjectOnAnother"
import { ioSettings } from "../../../../../src/general/io"
import { INITIAL_IO_SETTINGS } from "../../../../../src/general/io/constants"

afterEach((): void => {
    setAllPropertiesOfObjectOnAnother({ objectToChange: ioSettings, objectWithProperties: INITIAL_IO_SETTINGS })
    ioSettings.logTargets.spec = true
})
