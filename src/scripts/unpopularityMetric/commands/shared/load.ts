import { unformat } from "../../solver/unformat"
import * as fs from "fs"

const load = (filename: string) => {
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
