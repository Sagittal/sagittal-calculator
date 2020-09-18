import { count, formatTable, Io, sumTexts, Table } from "../../../../general"
import { JiPitchAnalysis } from "../../../../sagittal"
import { computeJiPitchHeaderRows } from "../headerRows"
import { computeJiPitchRow } from "../row"
import { JI_PITCH_TITLE } from "../titles"

const computeJiPitchOutput = (
    jiPitchAnalysis: JiPitchAnalysis
): Io => {
    const jiPitchHeaderRows = computeJiPitchHeaderRows()
    const headerRowCount = count(jiPitchHeaderRows)

    const jiPitchTable: Table<JiPitchAnalysis> = [
        ...jiPitchHeaderRows,
        computeJiPitchRow(jiPitchAnalysis),
    ]

    return sumTexts(
        JI_PITCH_TITLE,
        formatTable(jiPitchTable, { headerRowCount })
    )
}

export {
    computeJiPitchOutput,
}
