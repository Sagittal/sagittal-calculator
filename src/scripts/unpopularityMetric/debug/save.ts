import * as fs from "fs"
import { targetColors } from "./colors"
import { debugSettings } from "./settings"
import { debugTargets } from "./targets"
import { DebugTarget } from "./types"

const saveDebugMessage = (message: string, target: DebugTarget) => {
    if (debugTargets[ DebugTarget.NONE ]) return

    if (debugTargets[ DebugTarget.ALL ] || debugTargets[ target ] || target === DebugTarget.ALL) {
        if (!debugSettings.noWrite) {
            fs.existsSync("dist") || fs.mkdirSync("dist")
            fs.existsSync("dist/unpopularityMetric") || fs.mkdirSync("dist/unpopularityMetric")
            fs.appendFileSync(`dist/unpopularityMetric/${target}.txt`, `${message}\n`)
        }

        const color = targetColors[ target ]
        // @ts-ignore
        console.log(message[ color ])
    }
}

export {
    saveDebugMessage,
}