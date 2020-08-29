import { addTexts, ColorMethod, formatTableForTerminal, IO, Table } from "../../../../general"
import { BOUNDS } from "../../../../sagittal"
import { AnalyzedBound } from "../../types"
import { BOUND_COLORS } from "./boundColors"
import { computeBoundRow } from "./boundRow"
import { computeBoundsAnalysisHeaderRows } from "./headerRows"

// TODO: you could keep the color of the table rows test covered by testing at this level

const computeBoundsAnalysisTable = (boundsAnalysis: AnalyzedBound[]): IO => {
    const table: Table<AnalyzedBound> = computeBoundsAnalysisHeaderRows()
    const colors: ColorMethod[] = ["white", "white", "white", "white", "white", "white"]

    boundsAnalysis.forEach((analyzedBound, index) => {
        const bound = BOUNDS[ index ]
        table.push(computeBoundRow(analyzedBound, { bound }))
        colors.push(BOUND_COLORS[ analyzedBound.bestRank ])
    })

    const boundsAnalysisTableTitle = "   ---   Bound Analyses   ---   \n\n\n" as IO

    return addTexts(boundsAnalysisTableTitle, formatTableForTerminal(table, { colors }))
}

export {
    computeBoundsAnalysisTable,
}
