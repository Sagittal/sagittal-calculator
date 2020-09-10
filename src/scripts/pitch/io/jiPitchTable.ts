import {
    addTexts,
    BLANK, computeMonzoFromRatio,
    formatInteger,
    formatMonzo,
    formatNumber,
    formatRatio,
    formatTable,
    Io,
    Row,
    Table,
} from "../../../general"
import { AnalyzedJiPitch } from "../../../sagittal"
import { computeJiPitchHeaderRow } from "./headerRows"
import { JI_PITCH_TITLE } from "./titles"

// TODO: is this computeJiPitchTable or formatJiPitch? get these all straight
//  I think you already have a to-do re: this problem
//  this one, as opposed to formatRatio, is more of a table at this point

// TODO: I think now that we've clarified that this is the N2D3P9 of its 2,3-free class,
//  you should actually include the 2,3-free class on it!
//  but perhaps it's a branded Ratio type?

const formatJiPitch = (jiPitch: AnalyzedJiPitch): Io => {
    const { limit, twoThreeFreeSopfr, cents, monzo, ratio, apotomeSlope, n2d3p9 } = jiPitch

    const jiPitchTable: Table<AnalyzedJiPitch> = [
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
        ] as Row<{ of: AnalyzedJiPitch }>,
    ]

    return addTexts(JI_PITCH_TITLE, formatTable(jiPitchTable))
}

export {
    formatJiPitch,
}
