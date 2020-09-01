import { BLANK, NEWLINE } from "../constants"
import { addTexts, join } from "../typedOperations"
import { Io } from "../types"
import { computeColumnRange } from "./columnRange"
import { DEFAULT_FORMAT_TABLE_OPTIONS } from "./constants"
import { computeJustifications, computeJustifiedCellForForum } from "./justification"
import { FormatTableOptions, Row, Table, TableForForumStuffOptions } from "./types"

const computeTableForForumStuff = ({ index, headerRowCount, colors }: TableForForumStuffOptions) => {
    const cellTag: Io = index < headerRowCount ? "th" as Io : "td" as Io

    const hiliteOpen: Io = colors ? `[hilite=${colors[ index ]}]` as Io : BLANK
    const hiliteClose: Io = colors ? "[/hilite]" as Io : BLANK

    const cellOpen: Io = `[${cellTag}]${hiliteOpen}` as Io
    const cellClose: Io = `${hiliteClose}[/${cellTag}]` as Io

    const rowOpen: Io = `[tr]${cellOpen}` as Io
    const rowClose: Io = `${cellClose}[/tr]` as Io

    const separator: Io = `${cellClose}${cellOpen}` as Io

    return { rowOpen, rowClose, separator }
}

const formatTableForForum = (table: Table, options?: Partial<FormatTableOptions>): Io => {
    const {
        justification = DEFAULT_FORMAT_TABLE_OPTIONS.justification,
        colors = DEFAULT_FORMAT_TABLE_OPTIONS.colors,
        headerRowCount = DEFAULT_FORMAT_TABLE_OPTIONS.headerRowCount,
    } = options || {}

    const columnRange = computeColumnRange(table)
    const justifications = computeJustifications(justification, columnRange)

    const formattedRows: Io[] = table.map((row: Row, index): Io => {
        const { rowOpen, rowClose, separator } = computeTableForForumStuff({ index, headerRowCount, colors })

        const finalCellIndex = row.length - 1
        const rowText = row.reduce(
            (justifiedRow: Io, cell, cellIndex): Io => {
                const columnJustification = justifications[ cellIndex ]

                const justifiedCell: Io = computeJustifiedCellForForum(cell, { columnJustification })

                const maybeSeparator: Io = cellIndex === finalCellIndex ? BLANK : separator

                return addTexts(justifiedRow, justifiedCell, maybeSeparator)
            },
            BLANK,
        )

        return addTexts(rowOpen, rowText, rowClose)
    })

    formattedRows.unshift("[table]" as Io)
    formattedRows.push("[/table]" as Io)

    const formattedTable: Io = join(formattedRows, NEWLINE)

    return addTexts(formattedTable, NEWLINE)
}

export {
    formatTableForForum,
}
