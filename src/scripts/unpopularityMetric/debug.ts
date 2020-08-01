import { Debug, DebugColor, DebugTarget } from "./types"
import * as fs from "fs"
import { EnumHash } from "../../general/code"

const debug: Debug = {
    [ DebugTarget.ALL ]: false,
    [ DebugTarget.SUBMETRIC_ANTIVOTES ]: false,
    [ DebugTarget.RANKED_UNPOPULARITIES ]: false,
    [ DebugTarget.SOLVER ]: false,
    [ DebugTarget.POPULATION ]: false,
    [ DebugTarget.NEW_BEST_METRIC ]: false,
    [ DebugTarget.LOCAL_MINIMUM ]: false,
    [ DebugTarget.SCOPE ]: false,
    [ DebugTarget.SUM_OF_SQUARES ]: false,
    [ DebugTarget.ERRORS ]: false,
    [ DebugTarget.KILLS ]: false,
}

const debugSettings = {
    noWrite: false
}

const targetColors: EnumHash<DebugTarget, DebugColor> = {
    [ DebugTarget.ALL ]: "green",
    [ DebugTarget.SUBMETRIC_ANTIVOTES ]: "white",
    [ DebugTarget.RANKED_UNPOPULARITIES ]: "white",
    [ DebugTarget.SOLVER ]: "yellow",
    [ DebugTarget.POPULATION ]: "cyan",
    [ DebugTarget.NEW_BEST_METRIC ]: "green",
    [ DebugTarget.LOCAL_MINIMUM ]: "yellow",
    [ DebugTarget.SCOPE ]: "yellow",
    [ DebugTarget.SUM_OF_SQUARES ]: "white",
    [ DebugTarget.ERRORS ]: "red",
    [ DebugTarget.KILLS ]: "red",
}

const saveLog = (message: string, target: DebugTarget) => {
    if (debug[ DebugTarget.ALL ] || debug[ target ] || target === DebugTarget.ALL) {
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

const clearLogs = () => {
    fs.rmdirSync("dist/unpopularityMetric", { recursive: true })
}

export {
    debug,
    saveLog,
    clearLogs,
    debugSettings,
}
