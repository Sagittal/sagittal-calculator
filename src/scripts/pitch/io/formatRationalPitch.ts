import { formatInteger, formatMonzo, formatNumber, formatRatio, Formatted, Io } from "../../../general"
import { AnalyzedRationalPitch } from "../../../sagittal"

const formatRationalPitch = (rationalPitch: AnalyzedRationalPitch): Io => {
    const { limit, fiveRoughSopfr, cents, monzo, ratio, apotomeSlope, n2d3p9 } = rationalPitch

    return [
        `ratio:        \t${formatRatio(ratio)}`,
        `monzo:        \t${formatMonzo(monzo)}`,
        `cents:        \t${formatNumber(cents)}`,
        `limit:        \t${formatInteger(limit)}`,
        `5-rough sopfr:\t${formatInteger(fiveRoughSopfr)}`,
        `N2D3P9:       \t${formatNumber(n2d3p9)}`,
        `apotome slope:\t${formatNumber(apotomeSlope)}`,
    ].join("\n") as Formatted<AnalyzedRationalPitch>
}

export {
    formatRationalPitch,
}
