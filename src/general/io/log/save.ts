import { colorize } from "../colorize"
import { ioSettings } from "../globals"
import { Io } from "../types"
import { targetColors } from "./colors"
import { LogTarget, SaveLogOptions } from "./types"
import { write } from "./write"

// TODO: the LogTargets should not have to do with the scripts, should be generic
//  And file name should be different
//  Maybe it should just be the friggin filename
//  and then also update filenames in results/ folders to match

const saveLog = (message: Io, target: LogTarget, options: SaveLogOptions = {}) => {
    const { useTargetColor = true, fileExtensionProvided = false, writeOnly = false } = options

    if (ioSettings.logTargets[ LogTarget.NONE ]) {
        return
    }

    if (ioSettings.logTargets[ LogTarget.ALL ] || ioSettings.logTargets[ target ] || target === LogTarget.ALL) {
        if (!ioSettings.noWrite) {
            write(message, target, ioSettings.scriptGroup, fileExtensionProvided)
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
