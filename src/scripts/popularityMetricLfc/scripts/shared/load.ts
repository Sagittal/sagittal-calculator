import {Filename, Io, NEWLINE, readLines} from "../../../../general"
import {unformatParameters} from "../../solver"

const load = (filename: Filename): Object => {
    const fullFilename = `src/scripts/popularityMetricLfc/input/${filename}.txt` as Filename

    return JSON.parse(unformatParameters(readLines(fullFilename).join(NEWLINE) as Io))
}

export {
    load,
}
