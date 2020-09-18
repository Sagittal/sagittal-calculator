import { count, formatTable, Io, sumTexts, Table, TwoThreeFreeClass } from "../../../../general"
import { TwoThreeFreeClassAnalysis } from "../../../../sagittal"
import { compute23FreeClassHeaderRows } from "../headerRows"
import { compute23FreeClassRow } from "../row"
import { TWO_THREE_FREE_CLASS_TITLE } from "../titles"

const compute23FreeClassOutput = (
    twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis,
): Io => {
    const twoThreeFreeClassHeaderRows = compute23FreeClassHeaderRows()
    const headerRowCount = count(twoThreeFreeClassHeaderRows)

    const twoThreeFreeClassTable: Table<TwoThreeFreeClass> = [
        ...twoThreeFreeClassHeaderRows,
        compute23FreeClassRow(twoThreeFreeClassAnalysis),
    ]

    return sumTexts(
        TWO_THREE_FREE_CLASS_TITLE,
        formatTable(twoThreeFreeClassTable, { headerRowCount }),
    )
}

export {
    compute23FreeClassOutput,
}
