import { NEWLINE } from "./constants"
import { IO, Row, Table } from "./types"

// TODO: it could even automatically convert symbols to smileys?

const formatTableForForum = (table: Table): IO => {
    const formattedRows: IO[] = table.map((row: Row, index): IO => {
        const cellTag = index === 0 ? "th" : "td"

        return `[tr][${cellTag}]` + row.join(`[/${cellTag}][${cellTag}]`) + `[/${cellTag}][/tr]` as IO
    })

    formattedRows.unshift("[table]" as IO)
    formattedRows.push("[/table]" as IO)

    return formattedRows.join(NEWLINE) + NEWLINE as IO
}

export {
    formatTableForForum,
}
