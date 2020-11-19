import {isUndefined, Maybe} from "../../code"
import {BLANK, NEWLINE} from "../constants"
import {join, sumTexts} from "../typedOperations"
import {ColorMethod, Io} from "../types"
import {computeColumnRange} from "./columnRange"
import {computeColumnSpans} from "./columnSpans"
import {DEFAULT_FORMAT_TABLE_OPTIONS} from "./constants"
import {computeJustifications} from "./justification"
import {Cell, FormatTableOptions, Justification, Row, Table} from "./types"

const computeMaybeColoredCell = <T>(cell: Cell<{of: T}>, color: Maybe<ColorMethod>): Io =>
    isUndefined(color) ? (cell || BLANK) : `[hilite=${color}]${cell}[/hilite]`

const formatTableForForum = <T>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
    const {
        justification = DEFAULT_FORMAT_TABLE_OPTIONS.justification,
        colors = DEFAULT_FORMAT_TABLE_OPTIONS.colors,
        headerRowCount = DEFAULT_FORMAT_TABLE_OPTIONS.headerRowCount,
    } = options || {}

    const columnRange = computeColumnRange(table)
    const justifications = computeJustifications(justification, columnRange)

    const formattedRows: Io[] = table.map((row: Row<{of: T}>, rowIndex: number): Io => {
        const isHeader = rowIndex < headerRowCount
        const color = colors ? colors[rowIndex] : undefined

        const spans = computeColumnSpans(row)

        const rowText = row.reduce(
            (justifiedRow: Io, cell: Cell<{of: T}>, cellIndex: number): Io => {
                const columnSpan = spans[cellIndex]
                if (columnSpan === 0) return justifiedRow
                const isMergedCell = columnSpan > 1
                const cellSpan = isMergedCell ? `=${columnSpan}` : BLANK

                const columnJustification = justifications[cellIndex]
                const maybeColoredCell = isUndefined(cell) ? BLANK : computeMaybeColoredCell(cell, color)
                const cellTag = isHeader ?
                    isMergedCell ? "th" :
                        columnJustification === Justification.LEFT ?
                            "thl" :
                            columnJustification === Justification.RIGHT ? "thr" : "th" :
                    isMergedCell ? "td" :
                        columnJustification === Justification.CENTER ?
                            "tdc" :
                            columnJustification === Justification.RIGHT ? "tdr" : "td"

                const justifiedCell = `[${cellTag}${cellSpan}]${maybeColoredCell}[/${cellTag}]`

                return sumTexts(justifiedRow, justifiedCell as Io)
            },
            BLANK,
        )

        return sumTexts("[tr]" as Io, rowText, "[/tr]" as Io)
    })

    formattedRows.unshift("[table]" as Io)
    formattedRows.push("[/table]" as Io)

    const formattedTable: Io = join(formattedRows, NEWLINE)

    return sumTexts(formattedTable, NEWLINE)
}

export {
    formatTableForForum,
}
