import * as fs from "fs"
import { removeColor } from "../removeColor"
import { Filename, IO } from "../types"
import { targetColors } from "./colors"
import { logSettings } from "./settings"
import { logTargets } from "./targets"
import { LogTarget } from "./types"

// TODO: this should be options... got out of hand
const saveLog = (
    message: IO,
    target: LogTarget,
    scriptGroup: Filename,
    useTargetColor: boolean = true,
    fileExtensionProvided: boolean = false,
    writeOnly: boolean = false,
) => {
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
            console.log(useTargetColor ? message[ color ] : message)
        }
    }
}

export {
    saveLog,
}
