import {Index, shallowClone} from "../../../general"
import {SamplePoint} from "../bestMetric"
import {ParameterValue} from "../sumOfSquares"

const computeAdjacentSamplePoints = (samplePoint: SamplePoint): SamplePoint[] => {
    const adjacentSamplePoints: SamplePoint[] = []

    // Haha, wow. It's an index of an index.
    samplePoint.forEach((dynamicParameterValueIndex: Index<ParameterValue>, index: number): void => {
        const adjacentSamplePointA: SamplePoint = shallowClone(samplePoint) as SamplePoint
        adjacentSamplePointA[index] = dynamicParameterValueIndex - 1 as Index<ParameterValue>
        adjacentSamplePoints.push(adjacentSamplePointA)

        const adjacentSamplePointB: SamplePoint = shallowClone(samplePoint) as SamplePoint
        adjacentSamplePointB[index] = dynamicParameterValueIndex + 1 as Index<ParameterValue>
        adjacentSamplePoints.push(adjacentSamplePointB)
    })

    return adjacentSamplePoints
}

export {
    computeAdjacentSamplePoints,
}
