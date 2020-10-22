import {Count} from "../../types"
import {FormatTableOptions, Justification, Row} from "./types"

const DEFAULT_FORMAT_TABLE_OPTIONS: FormatTableOptions<unknown> = {
    justification: Justification.LEFT,
    colors: undefined,
    headerRowCount: 1 as Count<Row<{of: unknown, header: true}>>,
}

export {
    DEFAULT_FORMAT_TABLE_OPTIONS,
}
