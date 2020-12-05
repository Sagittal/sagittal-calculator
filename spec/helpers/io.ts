import {
    clearLogFiles,
    DEFAULT_IO_SETTINGS,
    Filename,
    ioSettings,
    LogTarget,
    setAllPropertiesOfObjectOnAnother,
} from "@sagittal/general"
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
