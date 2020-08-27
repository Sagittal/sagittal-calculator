import * as fs from "fs"
import { unformatParameters } from "../../solver"

const load = (filename: string): Object => {
    return JSON.parse(
        unformatParameters(
            fs.readFileSync(
                `src/scripts/unpopularityMetric/input/${filename}.txt`,
                { encoding: "utf8" },
            ),
        ),
    )
}

export {
    load,
}
