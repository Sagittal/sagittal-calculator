import { Combination, Index } from "../../../../general"
import { ParameterValue, Submetric } from "../../types"

type SamplePoint = Array<Index<ParameterValue>> & { _SamplePointBrand: "SamplePoint" }

interface Sample {
    samplePoint: SamplePoint,
    submetrics: Combination<Submetric>,
}

export {
    SamplePoint,
    Sample,
}
