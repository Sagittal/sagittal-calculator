import { Io, Row, splitColumnTitlesIntoRowsBySpaces } from "../../../general"
import { Popular23FreeClassWithBestNotatingComma, Popular23FreeClassWithExactlyNotatingSymbolClasses } from "../types"

const POPULAR_2_3_FREE_CLASS_WITH_EXACTLY_NOTATING_SYMBOL_CLASSES_COLUMN_TITLES: Io[] = [
    "2,3- free class",
    "N2D3P9",
    "exactly notating JI symbol classes",
    "smallest JI notation symbol subset indices",
    "N2D3P9 rank",
    "Scala archive rank",
    "Scala archive occurrences",
] as Io[]

const POPULAR_2_3_FREE_CLASS_WITH_BEST_NOTATING_COMMA_COLUMN_TITLES: Io[] = [
    "2,3- free class",
    "N2D3P9 rank",
    "best notating comma cents",
    "best notating comma monzo",
    "best notating comma symbol class",
] as Io[]

const computePopular23FreeClassWithExactlyNotatingSymbolClassesHeaderRows =
    (): Array<Row<{ of: Popular23FreeClassWithExactlyNotatingSymbolClasses, header: true }>> =>
        splitColumnTitlesIntoRowsBySpaces(POPULAR_2_3_FREE_CLASS_WITH_EXACTLY_NOTATING_SYMBOL_CLASSES_COLUMN_TITLES)

const computePopular23FreeClassWithBestNotatingCommaHeaderRows =
    (): Array<Row<{ of: Popular23FreeClassWithBestNotatingComma, header: true }>> =>
        splitColumnTitlesIntoRowsBySpaces(POPULAR_2_3_FREE_CLASS_WITH_BEST_NOTATING_COMMA_COLUMN_TITLES)

export {
    computePopular23FreeClassWithExactlyNotatingSymbolClassesHeaderRows,
    computePopular23FreeClassWithBestNotatingCommaHeaderRows,
}
