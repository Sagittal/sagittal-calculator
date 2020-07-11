import { computeWeightedSubmetricAntivotes } from "./weightedSubmetricAntivotes"
import { Parameter, Submetric, SubmetricType } from "../../types"
import { Combination, Ratio } from "../../../../utilities/types"
import { Antivotes } from "../types"

const computeAntivotes = (fiveRoughRatio: Ratio, submetrics: Combination<Submetric>, { debug = false } = {}): Antivotes => {
    return submetrics.reduce(
        (totalAntivotes: Antivotes, submetric: Submetric): Antivotes => {
            const weightedSubmetricAntivotes: Antivotes = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

            if (debug) console.log(`${submetric[ Parameter.SUBMETRIC_TYPE ] || SubmetricType.SOAPFAR}: ${weightedSubmetricAntivotes}`)

            return totalAntivotes + weightedSubmetricAntivotes as Antivotes
        },
        0 as Antivotes,
    )
}

export {
    computeAntivotes,
}
