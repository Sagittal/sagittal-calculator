import { Count } from "../types"
import { NEWLINE } from "./constants"
import { Io, Row, Table } from "./types"

// TODO: this should support colors and justifications, now that it shares options w/ for terminal version

const formatTableForForum = (table: Table, options: { headerRowCount?: Count<Row<unknown, "Header">> } = {}): Io => {
    const { headerRowCount = 1 as Count<Row> } = options

    const formattedRows: Io[] = table.map((row: Row, index): Io => {
        const cellTag = index < headerRowCount ? "th" : "td"

        return `[tr][${cellTag}]` + row.join(`[/${cellTag}][${cellTag}]`) + `[/${cellTag}][/tr]` as Io
    })

    formattedRows.unshift("[table]" as Io)
    formattedRows.push("[/table]" as Io)

    return formattedRows.join(NEWLINE) + NEWLINE as Io
}

export {
    formatTableForForum,
}
