import {Index, Parameter, shallowClone} from "@sagittal/general"
import {SamplePoint} from "../bestMetric"

const computeAdjacentSamplePoints = (samplePoint: SamplePoint): SamplePoint[] => {
    const adjacentSamplePoints: SamplePoint[] = []

    // Haha, wow. It's an index of an index.
    samplePoint.forEach((dynamicParameterValueIndex: Index<Parameter>, index: number): void => {
        const adjacentSamplePointA: SamplePoint = shallowClone(samplePoint) as SamplePoint
        adjacentSamplePointA[index] = dynamicParameterValueIndex - 1 as Index<Parameter>
        adjacentSamplePoints.push(adjacentSamplePointA)

        const adjacentSamplePointB: SamplePoint = shallowClone(samplePoint) as SamplePoint
        adjacentSamplePointB[index] = dynamicParameterValueIndex + 1 as Index<Parameter>
        adjacentSamplePoints.push(adjacentSamplePointB)
    })

    return adjacentSamplePoints
}

export {
    computeAdjacentSamplePoints,
}
