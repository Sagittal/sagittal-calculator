import {Cell, finalElement, Justification, JustificationOption, Maybe, Row} from "../../../../general"
import {
    INVISIBLE_MONZO_CLOSING_ANGLE_BRACKET_COLUMN_TITLE,
    INVISIBLE_MONZO_OPENING_SQUARE_BRACKET_COLUMN_TITLE,
} from "./constants"

const computeMonzoAndQuotientJustification = <T>(
    headerRows: Array<Row<{of: T, header: true}>>,
): JustificationOption => {
    const finalHeaderRow = finalElement(headerRows)

    let insideQuotientOrMonzo = false

    return finalHeaderRow.map((headerCell: Cell<{of: T, header: true}>): Maybe<Justification> => {
        if (headerCell === INVISIBLE_MONZO_OPENING_SQUARE_BRACKET_COLUMN_TITLE || headerCell === "n") {
            insideQuotientOrMonzo = true
            return Justification.RIGHT
        } else if (headerCell === "d" || headerCell === INVISIBLE_MONZO_CLOSING_ANGLE_BRACKET_COLUMN_TITLE) {
            insideQuotientOrMonzo = false
            return Justification.LEFT
        } else if (insideQuotientOrMonzo) {
            return Justification.CENTER
        } else {
            return undefined
        }
    })
}

export {
    computeMonzoAndQuotientJustification,
}
