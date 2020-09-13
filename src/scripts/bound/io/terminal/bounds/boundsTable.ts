import { addTexts, ColorMethod, Count, formatTable, Io, Row, Table } from "../../../../../general"
import { JI_BOUNDS } from "../../../../../sagittal"
import { BoundAnalysis } from "../../../analyzeBound"
import { BOUND_COLORS } from "../boundColors"
import { computeBoundRow } from "./boundRow"
import { BOUNDS_ANALYSIS_TABLE_TITLE } from "./constants"
import { computeBoundsAnalysisHeaderRows } from "./headerRows"

const computeBoundsAnalysisTable = (boundsAnalysis: BoundAnalysis[]): Io => {
    const table: Table<BoundAnalysis> = computeBoundsAnalysisHeaderRows()
    const colors: ColorMethod[] = ["white", "white", "white", "white", "white", "white"]
    const headerRowCount: Count<Row<{ of: BoundAnalysis, header: true }>> =
        5 as Count<Row<{ of: BoundAnalysis, header: true }>>

    boundsAnalysis.forEach((boundAnalysis: BoundAnalysis, index: number): void => {
        const bound = JI_BOUNDS[ index ]
        table.push(computeBoundRow(boundAnalysis, { bound }))
        colors.push(BOUND_COLORS[ boundAnalysis.bestRank ])
    })

    return addTexts(BOUNDS_ANALYSIS_TABLE_TITLE, formatTable(table, { colors, headerRowCount }))
}

export {
    computeBoundsAnalysisTable,
}
