import {Io, Row, splitFieldTitlesIntoRowsBySpaces} from "@sagittal/general"
import {Popular23FreeClass} from "../../types"
import {NotatingSymbolClassesProperties} from "../types"

const POPULAR_2_3_FREE_CLASS_WITH_NOTATING_SYMBOL_CLASSES_FIELD_TITLES: Io[] = [
    "2,3- free class name",
    "N2D3P9",
    "notating symbol classes",
    "smallest symbol subset indices",
    "N2D3P9 rank",
    "Scala archive rank",
    "Scala archive occurrences",
] as Io[]

const computePopular23FreeClassWithNotatingSymbolClassesHeaderRows =
    (): Array<Row<{of: Popular23FreeClass & NotatingSymbolClassesProperties, header: true}>> =>
        splitFieldTitlesIntoRowsBySpaces(POPULAR_2_3_FREE_CLASS_WITH_NOTATING_SYMBOL_CLASSES_FIELD_TITLES)

export {
    computePopular23FreeClassWithNotatingSymbolClassesHeaderRows,
}
