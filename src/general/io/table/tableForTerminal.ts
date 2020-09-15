import { indexOfFinalElement, isUndefined, Maybe } from "../../code"
import { colorize } from "../colorize"
import { BLANK, NEWLINE, TAB } from "../constants"
import { Formatted } from "../format"
import { addTexts, join } from "../typedOperations"
import { ColorMethod, Io } from "../types"
import { computeColumnRange } from "./columnRange"
import { DEFAULT_FORMAT_TABLE_OPTIONS } from "./constants"
import { computeColumnWidths, computeJustifications, computeJustifiedCellForTerminal } from "./justification"
import { FormatTableOptions, Row, Table } from "./types"

const maybeColor = (rowText: Io, rowIndex: number, colors: Maybe<Array<Maybe<ColorMethod>>>): Io => {
    if (isUndefined(colors)) {
        return rowText
    }

    const rowColor: Maybe<ColorMethod> = colors[ rowIndex ]

    return rowColor ? colorize(rowText, rowColor) : rowText
}

const formatTableForTerminal = <T = unknown>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
    const {
        justification = DEFAULT_FORMAT_TABLE_OPTIONS.justification,
        colors = DEFAULT_FORMAT_TABLE_OPTIONS.colors,
        headerRowCount = DEFAULT_FORMAT_TABLE_OPTIONS.headerRowCount,
    } = options || {}

    const columnRange = computeColumnRange(table)
    const justifications = computeJustifications(justification, columnRange)

    const columnWidths = computeColumnWidths(table, columnRange)

    const formattedRows = table.map((row: Row<{ of: T }>, rowIndex: number): Io => {
        const rowText = row.reduce(
            (justifiedRow: Io, cell: Formatted<T>, cellIndex: number): Io => {
                const columnWidth = columnWidths[ cellIndex ]

                const columnJustification = justifications[ cellIndex ]

                const justifiedCell = computeJustifiedCellForTerminal(cell, { columnWidth, columnJustification })

                const maybeSeparator = cellIndex === indexOfFinalElement(row) ? BLANK : TAB

                return addTexts(justifiedRow, justifiedCell, maybeSeparator)
            },
            BLANK,
        )

        const maybeColoredRowText: Io = maybeColor(rowText, rowIndex, colors)
        if (rowIndex === headerRowCount - 1) {
            return colorize(maybeColoredRowText, "underline" as ColorMethod)
        }

        return maybeColoredRowText
    })

    const formattedTable: Io = join(formattedRows, NEWLINE)

    return addTexts(formattedTable, NEWLINE)
}

export {
    formatTableForTerminal,
}
