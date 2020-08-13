import * as fs from "fs"
import * as path from "path"

const clearDebugLogFiles = () => {
    if (!fs.existsSync("dist")) return

    const directory = "dist/unpopularityMetric"

    if (!fs.existsSync(directory)) return

    const files = fs.readdirSync(directory)

    for (const file of files) {
        fs.unlinkSync(path.join(directory, file))
    }
}

export {
    clearDebugLogFiles,
}
