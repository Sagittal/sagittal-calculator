import { Column, computeHeaderRowsFromColumnTitleColumns, Row } from "../../../general"
import { PopularRatio } from "../types"

const POPULAR_RATIOS_COLUMN_TITLES = [
    "2,3-equivalent pitch ratio class",
    "N2D3P9",
    "exactly notating JI symbols",
    "introducing symbol subset indices",
    "N2D3P9 rank",
    "Scala archive rank",
    "Scala archive occurrences",
]

const computePopularRatiosHeaderRows = (): Array<Row<PopularRatio, "Header">> => {
    const popularRatiosColumnTitleColumns = POPULAR_RATIOS_COLUMN_TITLES
        .map(columnTitle => columnTitle.split(" ")) as Array<Column<PopularRatio>>

    return computeHeaderRowsFromColumnTitleColumns(popularRatiosColumnTitleColumns)
}

export {
    computePopularRatiosHeaderRows,
}
