import { format23FreeClass, formatInteger, formatNumber, JiPitch, Row, TwoThreeFreeClass } from "../../../../general"
import { TwoThreeFreeClassAnalysis } from "../../../../sagittal"

const compute23FreeClassRow = (
    twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis
): Row<{ of: TwoThreeFreeClass }> => {
    const { twoThreeFreePrimeLimit, twoThreeFreeSopfr, n2d3p9 } = twoThreeFreeClassAnalysis

    return [
        formatInteger(twoThreeFreePrimeLimit),
        format23FreeClass(twoThreeFreeClassAnalysis as JiPitch as TwoThreeFreeClass),
        formatInteger(twoThreeFreeSopfr),
        formatNumber(n2d3p9),
    ] as Row<{ of: TwoThreeFreeClass }>
}

export {
    compute23FreeClassRow,
}
