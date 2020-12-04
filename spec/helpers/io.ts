import {clearLogFiles, Filename, ioSettings, LogTarget} from "../../src/general"
import {setAllPropertiesOfObjectOnAnother} from "../../src/general/code/setAllPropertiesOfObjectOnAnother"
import {DEFAULT_IO_SETTINGS} from "../../src/general/io/constants"
import {ScriptGroup} from "../../src/scripts/types"

clearLogFiles(ScriptGroup.SPEC as Filename)

beforeEach((): void => {
    setAllPropertiesOfObjectOnAnother({
        objectToChange: ioSettings,
        objectWithProperties: {
            ...DEFAULT_IO_SETTINGS,
            scriptGroup: ScriptGroup.SPEC,
            logTargets: {[LogTarget.SPEC]: true},
        },
    })
})
