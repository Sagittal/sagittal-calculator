import * as fs from "fs"
import * as path from "path"

const clearDebugLogFiles = () => {
    const directory = "dist/unpopularityMetric"

    const files = fs.readdirSync(directory)

    for (const file of files) {
        fs.unlinkSync(path.join(directory, file))
    }
}

export {
    clearDebugLogFiles,
}
