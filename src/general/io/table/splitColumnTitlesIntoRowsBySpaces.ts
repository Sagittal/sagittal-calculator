import {Io} from "../types"
import {computeHeaderRowsFromColumnTitleColumns} from "./headerRowsFromColumnTitleColumns"
import {Column, Row} from "./types"

const splitColumnTitlesIntoRowsBySpaces = <T>(
    titles: Array<Io>,
    options: {includeSpacerRow?: boolean} = {},
): Array<Row<{of: T, header: true}>> => {
    const popular23FreeClassesColumnTitleColumns = titles.map((columnTitle: Io): Column<{of: T, header: true}> => {
        return columnTitle.split(" ") as Column<{of: T, header: true}>
    })

    return computeHeaderRowsFromColumnTitleColumns(popular23FreeClassesColumnTitleColumns, options)
}

export {
    splitColumnTitlesIntoRowsBySpaces,
}
