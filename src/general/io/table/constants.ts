import {Count} from "../../types"
import {FormatTableOptions, Row} from "./types"

const DEFAULT_FORMAT_TABLE_OPTIONS: FormatTableOptions<unknown> = {
    justification: undefined,
    colors: undefined,
    headerRowCount: 1 as Count<Row<{of: unknown, header: true}>>,
}

export {
    DEFAULT_FORMAT_TABLE_OPTIONS,
}
