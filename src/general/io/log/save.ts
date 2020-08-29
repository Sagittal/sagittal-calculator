import * as fs from "fs"
import { removeColor } from "../removeColor"
import { Filename, IO } from "../types"
import { targetColors } from "./colors"
import { logSettings } from "./settings"
import { logTargets } from "./targets"
import { LogTarget, SaveLogOptions } from "./types"

const saveLog = (message: IO, target: LogTarget, scriptGroup: Filename, options: SaveLogOptions = {}) => {
    const { useTargetColor = true, fileExtensionProvided = false, writeOnly = false } = options

    if (logTargets[ LogTarget.NONE ]) {
        return
    }

    if (logTargets[ LogTarget.ALL ] || logTargets[ target ] || target === LogTarget.ALL) {
        if (!logSettings.noWrite) {
            fs.existsSync("dist") || fs.mkdirSync("dist")
            fs.existsSync(`dist/${scriptGroup}`) || fs.mkdirSync(`dist/${scriptGroup}`)
            fs.appendFileSync(`dist/${scriptGroup}/${target}${fileExtensionProvided ? "" : ".txt"}`, `${removeColor(message)}\n`)
        }

        if (!writeOnly) {
            const color = targetColors[ target ]
            // @ts-ignore // TODO: actually so you don't have to ts-ignore this in a million places just do a helper
            console.log(useTargetColor ? message[ color ] : message)
        }
    }
}

export {
    saveLog,
}
