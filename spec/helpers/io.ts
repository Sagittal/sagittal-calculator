import { Filename, ioSettings } from "../../src/general/io"
import { clearLogFiles } from "../../src/general/io/log"
import { ScriptGroup } from "../../src/scripts/types"

const scriptGroup = ScriptGroup.SPEC as Filename
ioSettings.scriptGroup = scriptGroup
clearLogFiles(scriptGroup)
