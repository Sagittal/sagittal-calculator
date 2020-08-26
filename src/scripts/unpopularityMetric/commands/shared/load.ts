import * as fs from "fs"
import { unformat } from "../../solver"

const load = (filename: string): Object => {
    return JSON.parse(
        unformat(
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
