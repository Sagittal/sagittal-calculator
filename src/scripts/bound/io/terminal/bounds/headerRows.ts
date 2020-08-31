import { Column, computeHeaderRowsFromColumnTitleColumns, Row } from "../../../../../general"
import { AnalyzedBound } from "../../../analyzeBound"

const BOUNDS_ANALYSIS_COLUMN_TITLES = [
    "bound id",
    "lesser mina",
    "greater mina",
    "lesser extreme level symbol",
    "greater extreme level symbol",
    "medium level rank",
    "high level rank",
    "ultra level rank",
    "extreme level rank",
    "overall rank",
    "medium dstance moved",
    "high dstance moved",
    "ultra dstance moved",
    "extreme dstance moved",
    "overall dstance moved",
    "medium ina-dst moved",
    "high ina-dst moved",
    "ultra ina-dst moved",
    "extreme ina-dst moved",
    "overall ina-dst moved",
    "actual bound pos (¢)",
    "initial comma mean pos (¢)",
    "a.b.vs i.c.m. error (tinas)",
]

const computeBoundsAnalysisHeaderRows = (): Array<Row<AnalyzedBound, "Header">> => {
    const boundsAnalysisColumnTitleColumns: Array<Column<AnalyzedBound>> = BOUNDS_ANALYSIS_COLUMN_TITLES
        .map(columnTitle => columnTitle.split(" ")) as Array<Column<AnalyzedBound>>

    return computeHeaderRowsFromColumnTitleColumns(boundsAnalysisColumnTitleColumns, { includeSpacerRow: true })
}

export {
    computeBoundsAnalysisHeaderRows,
}
