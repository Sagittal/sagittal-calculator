import {presentMonzo} from "../../../utilities/comma/present/monzo"
import {presentRatio} from "../../../utilities/comma/present/ratio"

const presentComma = (comma, {mode = "SUMMARY"} = {}) => {
    const {
        commaName,
        limit,
        fiveRoughSopfr,
        cents,
        monzo,
        ratio,
        apotomeSlope,
    } = comma

    if (mode === "DETAILS") {
        return [
            `comma name:   \t${commaName}`,
            `limit:        \t${limit}`,
            `5-rough sopfr:\t${fiveRoughSopfr}`,
            `cents:        \t${cents}`,
            `monzo:        \t${presentMonzo(monzo)}`,
            `ratio:        \t${presentRatio(ratio)}`,
            `apotome slope:\t${apotomeSlope}`,
        ].join("\n")
    } else {
        return [
            commaName,
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
