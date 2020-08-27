import { formatMonzo, formatRatio, Formatted } from "../general"
import { NamedComma, SagittalComma } from "./types"

const formatComma = (comma: NamedComma, { mode = "summary" } = {}): Formatted<NamedComma> => {
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

    if (mode === "details") {
        return [
            `comma name:   \t${name}`,
            `limit:        \t${limit}`,
            `5-rough sopfr:\t${fiveRoughSopfr}`,
            `cents:        \t${cents}`,
            `monzo:        \t${formatMonzo(monzo)}`,
            `ratio:        \t${formatRatio(ratio)}`,
            `apotome slope:\t${apotomeSlope}`,
            `N2D3P9:       \t${n2d3p9}`,
        ].join("\n") as Formatted<SagittalComma>
    } else {
        return [
            name,
            limit,
            fiveRoughSopfr,
            cents,
            formatMonzo(monzo),
            formatRatio(ratio),
            apotomeSlope,
            n2d3p9,
        ].join("\t") as Formatted<SagittalComma>
    }
}

export {
    formatComma,
}
