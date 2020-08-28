import { Comma, formatMonzo, formatRatio, Formatted } from "../../../general"

const formatComma = (comma: Comma): Formatted<Comma> => {
    const { name, limit, fiveRoughSopfr, cents, monzo, ratio, apotomeSlope, n2d3p9 } = comma

    return [
        `comma name:   \t${name}`,
        `limit:        \t${limit}`,
        `5-rough sopfr:\t${fiveRoughSopfr}`,
        `cents:        \t${cents}`,
        `monzo:        \t${formatMonzo(monzo)}`,
        `ratio:        \t${formatRatio(ratio)}`,
        `apotome slope:\t${apotomeSlope}`,
        `N2D3P9:       \t${n2d3p9}`,
    ].join("\n") as Formatted<Comma>
}

export {
    formatComma,
}
