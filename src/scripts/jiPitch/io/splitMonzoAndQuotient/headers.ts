import {
    Cell,
    formatIntegerDecimal,
    Formatted,
    indexOfFinalElement,
    isUndefined,
    parseInteger,
    Row,
} from "@sagittal/general"

const formatPrimeHeaders = <T>(
    headerRows: Array<Row<{of: T, header: true}>>,
): Array<Row<{of: T, header: true}>> => {
    return headerRows.map(
        (
            headerRow: Row<{of: T, header: true}>,
            index: number,
        ): Row<{of: T, header: true}> => {
            if (index === indexOfFinalElement(headerRows)) {
                return headerRow.map(
                    (headerCell: Cell<{of: T, header: true}>): Cell<{of: T, header: true}> => {
                        if (!isUndefined(headerCell) && headerCell.match(/^\d+$/)) {
                            return formatIntegerDecimal(
                                parseInteger(headerCell),
                                {align: true},
                            ) as Formatted as Formatted<T>
                        } else {
                            return headerCell
                        }
                    },
                ) as Row<{of: T, header: true}>
            } else {
                return headerRow
            }
        },
    )
}

export {
    formatPrimeHeaders,
}
