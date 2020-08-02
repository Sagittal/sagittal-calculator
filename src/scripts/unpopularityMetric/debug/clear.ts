import * as fs from "fs"

const clearDebugLogFiles = () => {
    fs.rmdirSync("dist/unpopularityMetric", { recursive: true })
}

export {
    clearDebugLogFiles,
}
