import { addTexts, ColorMethod, Count, formatTable, Io, Row, Table } from "../../../../../general"
import { JI_BOUNDS } from "../../../../../sagittal"
import { AnalyzedBound } from "../../../analyzeBound"
import { BOUND_COLORS } from "../boundColors"
import { computeBoundRow } from "./boundRow"
import { BOUNDS_ANALYSIS_TABLE_TITLE } from "./constants"
import { computeBoundsAnalysisHeaderRows } from "./headerRows"

// TODO: you could keep the color of the table rows test covered by testing at this level

const computeBoundsAnalysisTable = (boundsAnalysis: AnalyzedBound[]): Io => {
    const table: Table<AnalyzedBound> = computeBoundsAnalysisHeaderRows()
    const colors: ColorMethod[] = ["white", "white", "white", "white", "white", "white"]
    const headerRowCount: Count<Row<unknown, "Header">> = 5 as Count<Row<unknown, "Header">>

    boundsAnalysis.forEach((analyzedBound, index) => {
        const bound = JI_BOUNDS[ index ]
        table.push(computeBoundRow(analyzedBound, { bound }))
        colors.push(BOUND_COLORS[ analyzedBound.bestRank ])
    })

    return addTexts(BOUNDS_ANALYSIS_TABLE_TITLE, formatTable(table, { colors, headerRowCount }))
}

export {
    computeBoundsAnalysisTable,
}
