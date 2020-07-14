import { Comma } from "../types"
import { presentMonzo } from "./monzo"
import { presentRatio } from "./ratio"

const presentComma = (comma: Comma, { mode = "SUMMARY" } = {}) => {
    const {
        name,
        limit,
        fiveRoughSopfr,
        cents,
        monzo,
        ratio,
        apotomeSlope,
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
        ].join("\t")
    }
}

export {
    presentComma,
}
