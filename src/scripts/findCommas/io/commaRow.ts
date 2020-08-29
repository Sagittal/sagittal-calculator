import { formatInteger, formatMonzo, formatNumber, formatRatio, IO, Row } from "../../../general"
import { Comma, formatN2D3P9 } from "../../../sagittal"

const computeCommaRow = (comma: Comma): Row<Comma> => {
    const {
        name,
        limit,
        fiveRoughSopfr,
        cents,
        monzo,
        ratio,
        apotomeSlope,
        n2d3p9,
    } = comma

    return [
        name,
        formatInteger(limit),
        formatInteger(fiveRoughSopfr),
        formatNumber(cents),
        formatMonzo(monzo),
        formatRatio(ratio),
        formatNumber(apotomeSlope),
        formatN2D3P9(n2d3p9),
    ] as IO[] as Row<Comma>
}

export {
    computeCommaRow,
}
