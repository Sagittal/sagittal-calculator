import { Column } from "../../../general"
import { PopularRatio } from "../types"

const POPULAR_RATIOS_COLUMN_TITLE_COLUMNS = [
    "2,3-equivalent pitch ratio class",
    "N2D3P9",
    "symbol",
    "introducing symbol subset indices",
    "N2D3P9 rank",
    "Scala archive rank",
    "Scala archive occurrences",
].map(columnTitle => columnTitle.split(" ")) as Array<Column<PopularRatio>>

export {
    POPULAR_RATIOS_COLUMN_TITLE_COLUMNS,
}
