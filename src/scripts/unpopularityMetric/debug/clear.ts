import * as fs from "fs"

const clearDebugLogFiles = () => {
    fs.existsSync("dist/unpopularityMetric") && fs.rmdirSync("dist/unpopularityMetric", { recursive: true })
}

export {
    clearDebugLogFiles,
}
