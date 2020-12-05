import {Alignment, Cell, finalElement, isEmpty, Maybe, Row, TableAlignment} from "@sagittal/general"
import {
    INVISIBLE_MONZO_CLOSING_ANGLE_BRACKET_COLUMN_TITLE,
    INVISIBLE_MONZO_OPENING_SQUARE_BRACKET_COLUMN_TITLE,
} from "./constants"

const computeSplitMonzoAndQuotientTableAlignment = <T>(
    headerRows: Array<Row<{of: T, header: true}>>,
): TableAlignment => {
    if (isEmpty(headerRows)) return undefined

    const finalHeaderRow = finalElement(headerRows)

    let insideQuotientOrMonzo = false

    return finalHeaderRow.map((headerCell: Cell<{of: T, header: true}>): Maybe<Alignment> => {
        if (headerCell === INVISIBLE_MONZO_OPENING_SQUARE_BRACKET_COLUMN_TITLE || headerCell === "n") {
            insideQuotientOrMonzo = true
            return Alignment.RIGHT
        } else if (headerCell === "d" || headerCell === INVISIBLE_MONZO_CLOSING_ANGLE_BRACKET_COLUMN_TITLE) {
            insideQuotientOrMonzo = false
            return Alignment.LEFT
        } else if (insideQuotientOrMonzo) {
            return Alignment.CENTER
        } else {
            return undefined
        }
    })
}

export {
    computeSplitMonzoAndQuotientTableAlignment,
}
