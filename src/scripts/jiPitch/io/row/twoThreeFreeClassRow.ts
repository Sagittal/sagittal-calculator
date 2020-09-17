import { format23FreeClass, formatInteger, formatNumber, Row, TwoThreeFreeClass } from "../../../../general"
import { JiPitchAnalysis } from "../../../../sagittal"

const compute23FreeClassRow = (jiPitchAnalysis: JiPitchAnalysis): Row<{ of: TwoThreeFreeClass }> => {
    const { primeLimit, twoThreeFreeClass, twoThreeFreeSopfr, n2d3p9 } = jiPitchAnalysis

    // TODO: shouldn't we just include the 2,3-free CoPFR too?
    return [
        formatInteger(primeLimit),
        format23FreeClass(twoThreeFreeClass),
        formatInteger(twoThreeFreeSopfr),
        formatNumber(n2d3p9),
    ] as Row<{ of: TwoThreeFreeClass }>
}

export {
    compute23FreeClassRow,
}
