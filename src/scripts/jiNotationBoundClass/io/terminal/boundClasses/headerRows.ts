import {Io, Row, splitFieldTitlesIntoRowsBySpaces} from "@sagittal/general"
import {JiNotationBoundClassAnalysis} from "../../../boundClass"

const BOUND_ANALYSES_FIELD_TITLES: Io[] = [
    "bound class ID",
    "lesser mina name",
    "greater mina name",
    "lesser extreme comma class",
    "greater extreme comma class",
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
    "actual bound class pos (¢)",
    "initial comma mean pos (¢)",
    "a.b.c. vs i.c.m. error (tinas)",  // Actual bound class vs. initial comma mean
] as Io[]

const computeJiNotationBoundClassAnalysisHeaderRows =
    (): Array<Row<{of: JiNotationBoundClassAnalysis, header: true}>> =>
        splitFieldTitlesIntoRowsBySpaces(BOUND_ANALYSES_FIELD_TITLES, {includeSpacerRow: true})

export {
    computeJiNotationBoundClassAnalysisHeaderRows,
}
