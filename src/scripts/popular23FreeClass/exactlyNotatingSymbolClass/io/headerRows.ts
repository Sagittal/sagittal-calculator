import { Io, Row, splitColumnTitlesIntoRowsBySpaces } from "../../../../general"
import { Popular23FreeClass } from "../../types"
import { ExactlyNotatingSymbolClassProperties } from "../types"

const POPULAR_2_3_FREE_CLASS_WITH_EXACTLY_NOTATING_SYMBOL_CLASSES_COLUMN_TITLES: Io[] = [
    "2,3- free class",
    "N2D3P9",
    "exactly notating JI symbol classes",
    "smallest symbol subset indices",
    "N2D3P9 rank",
    "Scala archive rank",
    "Scala archive occurrences",
] as Io[]

const computePopular23FreeClassWithExactlyNotatingSymbolClassesHeaderRows =
    (): Array<Row<{ of: Popular23FreeClass & ExactlyNotatingSymbolClassProperties, header: true }>> =>
        splitColumnTitlesIntoRowsBySpaces(POPULAR_2_3_FREE_CLASS_WITH_EXACTLY_NOTATING_SYMBOL_CLASSES_COLUMN_TITLES)

export {
    computePopular23FreeClassWithExactlyNotatingSymbolClassesHeaderRows,
}
