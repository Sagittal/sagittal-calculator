import {isUndefined, Maybe} from "../../code"
import {BLANK, NEWLINE} from "../constants"
import {Formatted} from "../format"
import {join, sumTexts} from "../typedOperations"
import {ColorMethod, Io} from "../types"
import {computeColumnRange} from "./columnRange"
import {DEFAULT_FORMAT_TABLE_OPTIONS} from "./constants"
import {computeJustifications} from "./justification"
import {FormatTableOptions, Justification, Row, Table} from "./types"

// TODO: TABLES FINESSE: FORUM ALIGNMENT
//  Use [td=2] to merge cells so that "monzo" and "quotient" don't take up so much space
//  See: http://forum.sagittal.org/viewtopic.php?p=2895#p2895

const computeMaybeColoredCell = <T = unknown>(cell: Formatted<T>, color: Maybe<ColorMethod>): Io =>
    isUndefined(color) ? cell : `[hilite=${color}]${cell}[/hilite]`

const formatTableForForum = <T = unknown>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
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

        const rowText = row.reduce(
            (justifiedRow: Io, cell: Maybe<Formatted<T>>, cellIndex: number): Io => {
                const columnJustification = justifications[cellIndex]
                const maybeColoredCell = isUndefined(cell) ? BLANK : computeMaybeColoredCell(cell, color)
                const justifiedCell =
                    isHeader ?
                        columnJustification === Justification.LEFT ?
                            `[thl]${maybeColoredCell}[/thl]` :
                            columnJustification === Justification.RIGHT ?
                                `[thr]${maybeColoredCell}[/thr]` :
                                `[th]${maybeColoredCell}[/th]` :
                        columnJustification === Justification.CENTER ?
                            `[tdc]${maybeColoredCell}[/tdc]` :
                            columnJustification === Justification.RIGHT ?
                                `[tdr]${maybeColoredCell}[/tdr]` :
                                `[td]${maybeColoredCell}[/td]`

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
