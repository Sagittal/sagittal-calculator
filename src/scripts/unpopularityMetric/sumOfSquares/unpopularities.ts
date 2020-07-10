import {computeAntivotes} from "../antivotes/antivotes"

const computeUnpopularities = (realPopularities, submetrics) => {
    return realPopularities.map(({fiveRoughRatio}, index) => {
        return {
            index,
            antivotes: computeAntivotes(fiveRoughRatio, submetrics),
            fiveRoughRatio,
        }
    })
}

export {
    computeUnpopularities,
}
