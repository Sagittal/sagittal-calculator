import {
    addTexts,
    BLANK,
    formatInteger,
    formatMonzo,
    formatNumber,
    formatRatio,
    formatTable,
    Io,
    Row,
    Table,
} from "../../../general"
import { JiPitchAnalysis } from "../../../sagittal"
import { computeJiPitchHeaderRow } from "./headerRows"
import { JI_PITCH_TITLE } from "./titles"

const computeJiPitchOutput = (jiPitch: JiPitchAnalysis): Io => {
    const { limit, twoThreeFreeSopfr, cents, monzo, ratio, apotomeSlope, n2d3p9 } = jiPitch

    const jiPitchTable: Table<JiPitchAnalysis> = [
        computeJiPitchHeaderRow(),
        [
            BLANK,
            BLANK,
            formatRatio(ratio),
            formatMonzo(monzo),
            formatNumber(cents),
            formatNumber(apotomeSlope),
            formatInteger(limit),
            formatInteger(twoThreeFreeSopfr),
            formatNumber(n2d3p9),
        ] as Row<{ of: JiPitchAnalysis }>,
    ]

    return addTexts(JI_PITCH_TITLE, formatTable(jiPitchTable))
}

export {
    computeJiPitchOutput,
}
