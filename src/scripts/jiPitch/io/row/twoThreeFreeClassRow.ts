import { format23FreeClass, formatInteger, formatNumber, Row, TwoThreeFreeClass } from "../../../../general"
import { TwoThreeFreeClassAnalysis } from "../../../../sagittal"

const compute23FreeClassRow = (
    twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis,
): Row<{ of: TwoThreeFreeClass }> => {
    const { twoThreeFreePrimeLimit, twoThreeFreeCopfr, twoThreeFreeSopfr, n2d3p9 } = twoThreeFreeClassAnalysis

    return [
        formatInteger(twoThreeFreePrimeLimit),
        format23FreeClass(twoThreeFreeClassAnalysis),
        formatInteger(twoThreeFreeCopfr),
        formatInteger(twoThreeFreeSopfr),
        formatNumber(n2d3p9),
    ] as Row<{ of: TwoThreeFreeClass }>
}

export {
    compute23FreeClassRow,
}
