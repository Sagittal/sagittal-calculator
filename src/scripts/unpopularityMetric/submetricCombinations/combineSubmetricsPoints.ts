import {computeParameterPointIndices} from "./parameterPointIndices"

const combineSubmetricsPoints = ({submetricsPoints, dynamicParameters}) => {
    let submetricCombinations = [{submetrics: [], coordinate: []}]

    submetricsPoints.forEach((submetricPoints, submetricIndex) => {
        let extendedSubmetricCombinations = []

        submetricCombinations.forEach(({submetrics, coordinate}) => {
            submetricPoints.forEach(submetricPoint => {
                const parameterPointIndices = computeParameterPointIndices({
                    dynamicParameters,
                    submetricPoint,
                    submetricIndex,
                })

                extendedSubmetricCombinations.push({
                    submetrics: [...submetrics, submetricPoint],
                    coordinate: [...coordinate, ...parameterPointIndices],
                })
            })
        })

        submetricCombinations = extendedSubmetricCombinations
    })

    return submetricCombinations
}

export {
    combineSubmetricsPoints,
}
