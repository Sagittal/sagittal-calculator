const computeParameterPointIndices = ({dynamicParameters, submetricPoint, submetricIndex}) => {
    const parameterPointIndices = []

    dynamicParameters.forEach(dynamicParameter => {
        if (dynamicParameter.submetricIndex !== submetricIndex) return

        Object.entries(submetricPoint).forEach(([parameter, parameterPoint]) => {
            if (dynamicParameter.parameter === parameter) {
                const parameterPointIndex = dynamicParameter.parameterPoints.indexOf(parameterPoint)
                parameterPointIndices.push(parameterPointIndex)
            }
        })
    })

    return parameterPointIndices
}

export {
    computeParameterPointIndices,
}
