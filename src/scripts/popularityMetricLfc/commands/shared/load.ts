import * as fs from "fs"
import { Filename, Io } from "../../../../general"
import { unformatParameters } from "../../solver"

const load = (filename: Filename): Object => {
    return JSON.parse(
        unformatParameters(
            // TODO: this should use the new readLines method
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
