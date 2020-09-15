import { Io, Row, splitColumnTitlesIntoRowsBySpaces } from "../../../general"
import { Popular23FreeClassAnalysis } from "../types"

const POPULAR_TWO_THREE_FREE_CLASSES_COLUMN_TITLES: Io[] = [
    "2,3- free class",
    "N2D3P9",
    "exactly notating JI symbols",
    "introducing symbol subset indices",
    "N2D3P9 rank",
    "Scala archive rank",
    "Scala archive occurrences",
] as Io[]

const BEST_NOTATING_COMMA_COLUMN_TITLES: Io[] = [
    "2,3- free class",
    "N2D3P9 rank",
    "best notating comma cents",
    "best notating comma monzo",
    "best notating comma symbol",
] as Io[]

const computePopular23FreeClassesHeaderRows = (): Array<Row<{ of: Popular23FreeClassAnalysis, header: true }>> =>
    splitColumnTitlesIntoRowsBySpaces(POPULAR_TWO_THREE_FREE_CLASSES_COLUMN_TITLES)

const computeBestNotatingCommaHeaderRows = (): Array<Row<{ of: Popular23FreeClassAnalysis, header: true }>> =>
    splitColumnTitlesIntoRowsBySpaces(BEST_NOTATING_COMMA_COLUMN_TITLES)

export {
    computePopular23FreeClassesHeaderRows,
    computeBestNotatingCommaHeaderRows,
}
