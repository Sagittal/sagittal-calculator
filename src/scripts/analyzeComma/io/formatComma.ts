import { formatInteger, formatMonzo, formatNumber, formatRatio, Formatted } from "../../../general"
import { Comma, formatN2D3P9 } from "../../../sagittal"

const formatComma = (comma: Comma): Formatted<Comma> => {
    const { name, limit, fiveRoughSopfr, cents, monzo, ratio, apotomeSlope, n2d3p9 } = comma

    return [
        `comma name:   \t${name}`,
        `limit:        \t${formatInteger(limit)}`,
        `5-rough sopfr:\t${formatInteger(fiveRoughSopfr)}`,
        `cents:        \t${formatNumber(cents)}`,
        `monzo:        \t${formatMonzo(monzo)}`,
        `ratio:        \t${formatRatio(ratio)}`,
        `apotome slope:\t${formatNumber(apotomeSlope)}`,
        `N2D3P9:       \t${formatN2D3P9(n2d3p9)}`,
    ].join("\n") as Formatted<Comma>
}

export {
    formatComma,
}
