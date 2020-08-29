import { colorize } from "../colorize"
import { Filename, IO } from "../types"
import { targetColors } from "./colors"
import { logTargets } from "./targets"
import { LogTarget, SaveLogOptions } from "./types"
import { write } from "./write"
import { ioSettings } from "../settings"

const saveLog = (message: IO, target: LogTarget, scriptGroup: Filename, options: SaveLogOptions = {}) => {
    const { useTargetColor = true, fileExtensionProvided = false, writeOnly = false } = options

    if (logTargets[ LogTarget.NONE ]) {
        return
    }

    if (logTargets[ LogTarget.ALL ] || logTargets[ target ] || target === LogTarget.ALL) {
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
