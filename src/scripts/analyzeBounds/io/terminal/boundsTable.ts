import { addTexts, formatTableForTerminal, IO, Table } from "../../../../general"
import { BOUNDS } from "../../../../notations"
import { ColorMethod } from "../../../../types"
import { AnalyzedBound } from "../../types"
import { computeBoundRow } from "./boundRow"
import { BOUND_COLORS } from "./boundColors"
import { computeBoundsAnalysisHeaderRows } from "./headerRows"

// TODO: you could keep the color of the table rows test covered by testing at this level

const computeBoundsAnalysisTable = (boundsAnalysis: AnalyzedBound[]): IO => {
    const table: Table = computeBoundsAnalysisHeaderRows()
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
