import { addTexts, ColorMethod, formatTable, Io, Table } from "../../../../../general"
import { JI_BOUNDS } from "../../../../../sagittal"
import { AnalyzedBound } from "../../../analyzeBound"
import { BOUND_COLORS } from "../boundColors"
import { computeBoundRow } from "./boundRow"
import { computeBoundsAnalysisHeaderRows } from "./headerRows"

// TODO: you could keep the color of the table rows test covered by testing at this level

const computeBoundsAnalysisTable = (boundsAnalysis: AnalyzedBound[]): Io => {
    const table: Table<AnalyzedBound> = computeBoundsAnalysisHeaderRows()
    const colors: ColorMethod[] = ["white", "white", "white", "white", "white", "white"]

    boundsAnalysis.forEach((analyzedBound, index) => {
        const bound = JI_BOUNDS[ index ]
        table.push(computeBoundRow(analyzedBound, { bound }))
        colors.push(BOUND_COLORS[ analyzedBound.bestRank ])
    })

    const boundsAnalysisTableTitle = "   ---   Bound Analyses   ---   \n\n\n" as Io

    return addTexts(boundsAnalysisTableTitle, formatTable(table, { colors }))
}

export {
    computeBoundsAnalysisTable,
}
