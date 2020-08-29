import { clearLogFiles } from "./clear"
import { maybeClearLogFiles, setupToMaybeClearLogFiles } from "./maybeClear"
import { saveLog } from "./save"
import { setLogTargets } from "./set"
import { logSettings } from "./settings"
import { logTargets } from "./targets"
import { LogTarget } from "./types"

export {
    saveLog,
    clearLogFiles,
    logSettings,
    logTargets,
    LogTarget,
    setLogTargets,
    maybeClearLogFiles,
    setupToMaybeClearLogFiles,
}
