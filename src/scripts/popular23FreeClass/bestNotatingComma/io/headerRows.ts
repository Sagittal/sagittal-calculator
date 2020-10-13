import { Io, Row, splitColumnTitlesIntoRowsBySpaces } from "../../../../general"
import { Popular23FreeClass } from "../../types"
import { BestNotatingCommaProperties } from "../types"

const POPULAR_2_3_FREE_CLASS_WITH_BEST_NOTATING_COMMA_COLUMN_TITLES: Io[] = [
    "2,3- free class name",
    "N2D3P9 rank",
    "best notating comma cents",
    "best notating comma monzo",
    "best notating comma maybe flacco",
] as Io[]

const computePopular23FreeClassWithBestNotatingCommaHeaderRows =
    (): Array<Row<{ of: Popular23FreeClass & BestNotatingCommaProperties, header: true }>> =>
        splitColumnTitlesIntoRowsBySpaces(POPULAR_2_3_FREE_CLASS_WITH_BEST_NOTATING_COMMA_COLUMN_TITLES)

export {
    computePopular23FreeClassWithBestNotatingCommaHeaderRows,
}
