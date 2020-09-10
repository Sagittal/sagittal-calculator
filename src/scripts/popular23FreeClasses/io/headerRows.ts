import { Column, computeHeaderRowsFromColumnTitleColumns, Row } from "../../../general"
import { Popular23FreeClass } from "../types"

const POPULAR_TWO_THREE_FREE_CLASSES_COLUMN_TITLES = [
    "2,3- free class",
    "N2D3P9",
    "exactly notating JI symbols",
    "introducing symbol subset indices",
    "N2D3P9 rank",
    "Scala archive rank",
    "Scala archive occurrences",
]

const BEST_NOTATING_COMMA_COLUMN_TITLES = [
    "2,3- free class",
    "N2D3P9 rank",
    "best notating comma cents",
    "best notating comma monzo",
    "best notating comma symbol",
]

const computePopular23FreeClassesHeaderRows = (): Array<Row<{ of: Popular23FreeClass, header: true }>> => {
    const popular23FreeClassesColumnTitleColumns = POPULAR_TWO_THREE_FREE_CLASSES_COLUMN_TITLES
        .map(columnTitle => columnTitle.split(" ")) as Array<Column<Popular23FreeClass>>

    return computeHeaderRowsFromColumnTitleColumns(popular23FreeClassesColumnTitleColumns)
}

// TODO: this is a pattern now found I think in three places so clean that up
const computeBestNotatingCommaHeaderRows = (): Array<Row<{ of: Popular23FreeClass, header: true }>> => {
    const popular23FreeClassesColumnTitleColumns = BEST_NOTATING_COMMA_COLUMN_TITLES
        .map(columnTitle => columnTitle.split(" ")) as Array<Column<Popular23FreeClass>>

    return computeHeaderRowsFromColumnTitleColumns(popular23FreeClassesColumnTitleColumns)
}

export {
    computePopular23FreeClassesHeaderRows,
    computeBestNotatingCommaHeaderRows,
}
