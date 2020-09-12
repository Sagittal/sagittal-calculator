import * as fs from "fs"
import { Filename, Io } from "../../../../general"
import { unformatParameters } from "../../solver"

const load = (filename: Filename): Object => {
    // throw new Error("here5", filename)
    return JSON.parse(
        unformatParameters(
            fs.readFileSync(
                `src/scripts/popularityMetricLfc/input/${filename}.txt`,
                { encoding: "utf8" },
            ) as Io,
        ),
    )
}

export {
    load,
}
