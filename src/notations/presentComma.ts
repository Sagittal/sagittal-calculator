import { presentMonzo, presentRatio } from "../general"
import { SagittalComma } from "./types"

const presentComma = (comma: SagittalComma, { mode = "SUMMARY" } = {}) => {
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

    if (mode === "DETAILS") {
        return [
            `comma name:   \t${name}`,
            `limit:        \t${limit}`,
            `5-rough sopfr:\t${fiveRoughSopfr}`,
            `cents:        \t${cents}`,
            `monzo:        \t${presentMonzo(monzo)}`,
            `ratio:        \t${presentRatio(ratio)}`,
            `apotome slope:\t${apotomeSlope}`,
            `N2D3P9:       \t${n2d3p9}`,
        ].join("\n")
    } else {
        return [
            name,
            limit,
            fiveRoughSopfr,
            cents,
            presentMonzo(monzo),
            presentRatio(ratio),
            apotomeSlope,
            n2d3p9,
        ].join("\t")
    }
}

export {
    presentComma,
}
