import { Count } from "../types"
import { NEWLINE } from "./constants"
import { IO, Row, Table } from "./types"

// TODO: it could even automatically convert symbols to smileys?

// TODO: this should support colors and justifications, now that it shares options w/ for terminal version

const formatTableForForum = (table: Table, options: { headerRowCount?: Count<Row<unknown, "Header">> } = {}): IO => {
    const { headerRowCount = 1 as Count<Row> } = options

    const formattedRows: IO[] = table.map((row: Row, index): IO => {
        const cellTag = index < headerRowCount ? "th" : "td"

        return `[tr][${cellTag}]` + row.join(`[/${cellTag}][${cellTag}]`) + `[/${cellTag}][/tr]` as IO
    })

    formattedRows.unshift("[table]" as IO)
    formattedRows.push("[/table]" as IO)

    return formattedRows.join(NEWLINE) + NEWLINE as IO
}

export {
    formatTableForForum,
}
