import { Io } from "../types"
import { computeHeaderRowsFromColumnTitleColumns } from "./headerRowsFromColumnTitleColumns"
import { Column, Row } from "./types"

const splitColumnTitlesIntoRowsBySpaces = <T>(
    titles: Array<Io>,
    options: { includeSpacerRow?: boolean } = {}
    ): Array<Row<{ of: T, header: true }>> => {
    const popular23FreeClassesColumnTitleColumns = titles
        .map(columnTitle => columnTitle.split(" ")) as Array<Column<{ of: T }>>

    return computeHeaderRowsFromColumnTitleColumns(popular23FreeClassesColumnTitleColumns, options)
}

export {
    splitColumnTitlesIntoRowsBySpaces,
}
