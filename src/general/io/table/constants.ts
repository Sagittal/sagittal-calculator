import { Count } from "../../types"
import { FormatTableOptions, Justification, Row } from "./types"

const DEFAULT_FORMAT_TABLE_OPTIONS: FormatTableOptions = {
    justification: Justification.LEFT,
    colors: undefined, 
    headerRowCount: 1 as Count<Row<unknown, "Header">>,
}

export {
    DEFAULT_FORMAT_TABLE_OPTIONS,
}
