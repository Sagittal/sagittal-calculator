import { Column, computeHeaderRowsFromColumnTitleColumns, Row } from "../../../../general"

const BOUNDS_ANALYSIS_COLUMN_TITLE_COLUMNS = [
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
].map(columnTitle => columnTitle.split(" ")) as Column[]

const computeBoundsAnalysisHeaderRows = (): Row[] => {
    return [
        ...computeHeaderRowsFromColumnTitleColumns(BOUNDS_ANALYSIS_COLUMN_TITLE_COLUMNS),
        // TODO: perhaps there is a better way to just insert a blank space between the headers and the data rows...
        [...Array(BOUNDS_ANALYSIS_COLUMN_TITLE_COLUMNS.length).keys()].map(_ => "") as Row,
    ]
}

export {
    computeBoundsAnalysisHeaderRows,
}
