import { ioSettings } from "./settings"
import { formatTableForForum } from "./tableForForum"
import { formatTableForTerminal } from "./tableForTerminal"
import { FormatTableOptions, Table } from "./types"

const formatTable = (table: Table, options: FormatTableOptions = {}) => {
    return ioSettings.forForum ? formatTableForForum(table, options) : formatTableForTerminal(table, options)
}

export {
    formatTable,
}
