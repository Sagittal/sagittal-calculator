import { finalElement, Formatted, Justification, JustificationOption, Maybe, Row } from "../../../../general"
import { JiPitchAnalysis } from "../../../../sagittal"

const computeMonzoAndQuotientJustification = (
    headerRows: Array<Row<{ of: JiPitchAnalysis, header: true }>>,
): JustificationOption => {
    const finalHeaderRow = finalElement(headerRows)

    let insideQuotientOrMonzo = false

    return finalHeaderRow.map((headerCell: Maybe<Formatted>): Justification => {
        if (headerCell === "[" || headerCell === "n") {
            insideQuotientOrMonzo = true
            return Justification.RIGHT
        } else if (headerCell === "d" || headerCell === "⟩") {
            insideQuotientOrMonzo = false
            return Justification.LEFT
        } else if (insideQuotientOrMonzo) {
            return Justification.CENTER
        } else {
            return Justification.LEFT
        }
    })
}

export {
    computeMonzoAndQuotientJustification,
}
