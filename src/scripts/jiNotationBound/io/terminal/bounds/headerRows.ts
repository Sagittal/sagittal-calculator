import { Io, Row, splitColumnTitlesIntoRowsBySpaces } from "../../../../../general"
import { JiNotationBoundAnalysis } from "../../../bound"

const BOUND_ANALYSES_COLUMN_TITLES: Io[] = [
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
] as Io[]

const computeJiNotationBoundAnalysesHeaderRows = (): Array<Row<{ of: JiNotationBoundAnalysis, header: true }>> =>
    splitColumnTitlesIntoRowsBySpaces(BOUND_ANALYSES_COLUMN_TITLES, { includeSpacerRow: true })

export {
    computeJiNotationBoundAnalysesHeaderRows,
}
