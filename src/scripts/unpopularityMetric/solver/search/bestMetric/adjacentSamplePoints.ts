import { Index } from "../../../../../general"
import { ParameterValue } from "../../../types"
import { SamplePoint } from "../types"

const computeAdjacentSamplePoints = (samplePoint: SamplePoint) => {
    const adjacentSamplePoints: SamplePoint[] = []

    samplePoint.forEach((dynamicParameterValueIndex: Index<ParameterValue>, index) => { // haha wow it's an index of an index
        const adjacentSamplePointOne: SamplePoint = samplePoint.slice() as SamplePoint
        adjacentSamplePointOne[ index ] = dynamicParameterValueIndex - 1 as Index<ParameterValue>
        adjacentSamplePoints.push(adjacentSamplePointOne)

        const adjacentSamplePointTwo: SamplePoint = samplePoint.slice() as SamplePoint
        adjacentSamplePointTwo[ index ] = dynamicParameterValueIndex + 1 as Index<ParameterValue>
        adjacentSamplePoints.push(adjacentSamplePointTwo)
    })

    return adjacentSamplePoints
}

export {
    computeAdjacentSamplePoints,
}
