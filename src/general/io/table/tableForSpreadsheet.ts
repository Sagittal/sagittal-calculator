import { indexOfFinalElement, isUndefined, Maybe } from "../../code"
import { colorize } from "../colorize"
import { BLANK, NEWLINE, TAB } from "../constants"
import { Formatted } from "../format"
import { join, sumTexts } from "../typedOperations"
import { ColorMethod, Io } from "../types"
import { DEFAULT_FORMAT_TABLE_OPTIONS } from "./constants"
import { maybeColorize } from "./maybeColorize"
import { FormatTableOptions, Row, Table } from "./types"

const formatTableForSpreadsheet = <T = unknown>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
    const {
        colors = DEFAULT_FORMAT_TABLE_OPTIONS.colors,
        headerRowCount = DEFAULT_FORMAT_TABLE_OPTIONS.headerRowCount,
    } = options || {}

    const formattedRows = table.map((row: Row<{ of: T }>, rowIndex: number): Io => {
        const rowText = row.reduce(
            (justifiedRow: Io, cell: Maybe<Formatted<T>>, cellIndex: number): Io => {
                const justifiedCell = isUndefined(cell) ? BLANK : cell

                const maybeSeparator = cellIndex === indexOfFinalElement(row) ? BLANK : TAB

                return sumTexts(justifiedRow, justifiedCell, maybeSeparator)
            },
            BLANK,
        )

        const maybeColoredRowText: Io = maybeColorize(rowText, rowIndex, colors)
        if (rowIndex === headerRowCount - 1) {
            return colorize(maybeColoredRowText, "underline" as ColorMethod)
        }

        return maybeColoredRowText
    })

    const formattedTable: Io = join(formattedRows, NEWLINE)

    return sumTexts(formattedTable, NEWLINE)
}

export {
    formatTableForSpreadsheet,
}