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
import { AnalyzedRationalPitch } from "../../../sagittal"
import { computeRationalPitchHeaderRow } from "./headerRows"
import { RATIONAL_PITCH_TITLE } from "./titles"

// TODO: is this computeRationalPitchTable or formatRationalPitch? get these all straight
//  I think you already have a to-do re: this problem

// TODO: I think now that we've clarified that this is the N2D3P9 of its 2,3-free class,
//  you should actually include the 2,3-free class on it!
//  but perhaps it's a branded Ratio type?

const formatRationalPitch = (rationalPitch: AnalyzedRationalPitch): Io => {
    const { limit, twoThreeFreeSopfr, cents, monzo, ratio, apotomeSlope, n2d3p9 } = rationalPitch

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
            formatInteger(twoThreeFreeSopfr),
            formatNumber(n2d3p9),
        ] as Row<AnalyzedRationalPitch>,
    ]

    return addTexts(RATIONAL_PITCH_TITLE, formatTable(rationalPitchTable))
}

export {
    formatRationalPitch,
}
