import { computeWeightedSubmetricAntivotes } from "./weightedSubmetricAntivotes"
import { Parameter, Submetric, SubmetricType } from "../types"
import { Ratio } from "../../../utilities/types"
import { Antivotes } from "../sumOfSquares/types"

const computeAntivotes = (fiveRoughRatio: Ratio, submetrics: Submetric[], { logSubmetricAntivotes = false } = {}): Antivotes => { // todo: should this now just be quiet true/false too?
    return submetrics.reduce(
        (totalAntivotes: Antivotes, submetric: Submetric): Antivotes => {
            const weightedSubmetricAntivotes: Antivotes = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

            if (logSubmetricAntivotes) console.log(`${submetric[ Parameter.SUBMETRIC_TYPE ] || SubmetricType.SOAPFAR}: ${weightedSubmetricAntivotes}`)

            return totalAntivotes + weightedSubmetricAntivotes as Antivotes
        },
        0 as Antivotes,
    )
}

export {
    computeAntivotes,
}
