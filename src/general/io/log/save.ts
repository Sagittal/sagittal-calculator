import { colorize } from "../colorize"
import { ioSettings } from "../settings"
import { Filename, IO } from "../types"
import { targetColors } from "./colors"
import { LogTarget, SaveLogOptions } from "./types"
import { write } from "./write"

const saveLog = (message: IO, target: LogTarget, scriptGroup: Filename, options: SaveLogOptions = {}) => {
    const { useTargetColor = true, fileExtensionProvided = false, writeOnly = false } = options

    if (ioSettings.logTargets[ LogTarget.NONE ]) {
        return
    }

    if (ioSettings.logTargets[ LogTarget.ALL ] || ioSettings.logTargets[ target ] || target === LogTarget.ALL) {
        if (!ioSettings.noWrite) {
            write(message, target, scriptGroup, fileExtensionProvided)
        }

        if (!writeOnly) {
            const color = targetColors[ target ]
            console.log(useTargetColor ? colorize(message, color) : message)
        }
    }
}

export {
    saveLog,
}
