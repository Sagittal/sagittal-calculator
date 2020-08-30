import { ioSettings } from "./settings"
import { formatTableForForum } from "./tableForForum"
import { formatTableForTerminal } from "./tableForTerminal"
import { FormatTableOptions, Table } from "./types"

// TODO: it could even automatically convert symbols to smileys?
//  and share the logic from formatSymbolAscii
//  for centering symbols on shafts, ratios on slash, and monzos on terms
//  into the formatTableForTerminal method

const formatTable = (table: Table, options: FormatTableOptions = {}) => {
    return ioSettings.forForum ? formatTableForForum(table, options) : formatTableForTerminal(table, options)
}

export {
    formatTable,
}
