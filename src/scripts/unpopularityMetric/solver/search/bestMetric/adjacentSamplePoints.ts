import { SamplePoint } from "../scopeToSamples/types"
import { Index } from "../../../../../utilities/types"
import { DynamicParameterValue } from "../../../types"

const computeAdjacentSamplePoints = (samplePoint: SamplePoint) => {
    const adjacentSamplePoints: SamplePoint[] = []

    samplePoint.forEach((dynamicParameterValueIndex: Index<DynamicParameterValue>, index) => { // haha wow it's an index of an index
        const adjacentSamplePointOne: SamplePoint = samplePoint.slice() as SamplePoint
        adjacentSamplePointOne[ index ] = dynamicParameterValueIndex - 1 as Index<DynamicParameterValue>
        adjacentSamplePoints.push(adjacentSamplePointOne)

        const adjacentSamplePointTwo: SamplePoint = samplePoint.slice() as SamplePoint
        adjacentSamplePointTwo[ index ] = dynamicParameterValueIndex + 1 as Index<DynamicParameterValue>
        adjacentSamplePoints.push(adjacentSamplePointTwo)
    })

    return adjacentSamplePoints
}

export {
    computeAdjacentSamplePoints,
}
