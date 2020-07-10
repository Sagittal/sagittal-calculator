import {combineSubmetricsPoints} from "./combineSubmetricsPoints"
import {computeSubmetricPoints} from "./submetricPoints"

const computeSubmetricCombinations = ({configs, dynamicParameters}) => {
    const submetricsPoints = configs.map(computeSubmetricPoints)

    return combineSubmetricsPoints({submetricsPoints, dynamicParameters})
}

export {
    computeSubmetricCombinations,
}
