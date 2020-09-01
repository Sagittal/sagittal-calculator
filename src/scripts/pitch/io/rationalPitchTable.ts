import {
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
import { AnalyzedRationalPitch } from "../../../sagittal"
import { computeRationalPitchHeaderRow } from "./headerRows"

const formatRationalPitch = (rationalPitch: AnalyzedRationalPitch): Io => {
    const { limit, fiveRoughSopfr, cents, monzo, ratio, apotomeSlope, n2d3p9 } = rationalPitch

    const rationalPitchTable: Table<AnalyzedRationalPitch> = [
        computeRationalPitchHeaderRow(),
        [
            BLANK,
            BLANK,
            formatRatio(ratio),
            formatMonzo(monzo),
            formatNumber(cents),
            formatNumber(apotomeSlope),
            formatInteger(limit),
            formatInteger(fiveRoughSopfr),
            formatNumber(n2d3p9),
        ] as Row<AnalyzedRationalPitch>,
    ]

    return formatTable(rationalPitchTable)
}

export {
    formatRationalPitch,
}
