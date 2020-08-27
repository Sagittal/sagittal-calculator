import { Index } from "../../../general"
import { SamplePoint } from "../bestMetric"
import { ParameterValue } from "../sumOfSquares"

const computeAdjacentSamplePoints = (samplePoint: SamplePoint) => {
    const adjacentSamplePoints: SamplePoint[] = []

    // Haha, wow. It's an index of an index.
    samplePoint.forEach((dynamicParameterValueIndex: Index<ParameterValue>, index) => {
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
