import {BLANK, Cell, Column, count, Count, Formatted, isEmpty, max, Maybe, Row} from "../../../general"

const computeHeaderRowsFromFieldTitleColumns = <T>(
    fieldTitleColumns: Array<Column<{of: T, header: true}>>,
    {includeSpacerRow = false}: {includeSpacerRow?: boolean} = {},
): Array<Row<{of: T, header: true}>> => {
    const maxFieldTitleHeaderRowCount = isEmpty(fieldTitleColumns) ? 0 : max(
        ...fieldTitleColumns.map((fieldTitleColumn: Column<{of: T, header: true}>): Count<Maybe<Formatted<T>>> => {
            return count(fieldTitleColumn)
        }),
    )

    const rows: Array<Row<{of: T, header: true}>> = [...Array(maxFieldTitleHeaderRowCount).keys()]
        .map((_: number): Row<{of: T, header: true}> => [] as unknown[] as Row<{of: T, header: true}>)

    fieldTitleColumns.forEach((fieldTitleColumn: Column<{of: T, header: true}>): void => {
        while (fieldTitleColumn.length < maxFieldTitleHeaderRowCount) {
            fieldTitleColumn.unshift(BLANK as Formatted<T>)
        }

        fieldTitleColumn.forEach((fieldTitleCell: Cell<{of: T, header: true}>, index: number): void => {
            rows[index].push(fieldTitleCell)
        })
    })

    if (includeSpacerRow) {
        rows.push([...Array(fieldTitleColumns.length).keys()]
            .map((_: number): string => BLANK) as Row<{of: T, header: true}>)
    }

    return rows
}

export {
    computeHeaderRowsFromFieldTitleColumns,
}
