import {computeWeightedSubmetricAntivotes} from "./weightedSubmetricAntivotes"
import {SUBMETRIC_TYPE, PARAMETER} from "../constants"

const computeAntivotes = (fiveRoughRatio, submetrics, {logSubmetricAntivotes = false} = {}) => { // todo: should this now just be quiet true/false too?
    return submetrics.reduce(
        (totalAntivotes, submetric) => {
            const weightedSubmetricAntivotes = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

            if (logSubmetricAntivotes) console.log(`${submetric[PARAMETER.SUBMETRIC_TYPE] || SUBMETRIC_TYPE.SOAPFAR}: ${weightedSubmetricAntivotes}`)

            return totalAntivotes + weightedSubmetricAntivotes
        },
        0,
    )
}

export {
    computeAntivotes,
}
