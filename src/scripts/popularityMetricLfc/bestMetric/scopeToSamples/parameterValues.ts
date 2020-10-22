import {Ed, Window} from "../../../../general"
import {ParameterValue} from "../../sumOfSquares"
import {DynamicParameterScope} from "../types"

const computeParameterValues = (parameterScope: DynamicParameterScope): ParameterValue[] => {
    const {
        center = 0 as ParameterValue,
        window = 0 as Window<ParameterValue>,
        ed = 1 as Ed<ParameterValue>,
    }: DynamicParameterScope = parameterScope

    if (ed === 1) {
        return [center as ParameterValue]
    }

    const keys = [...Array(ed).keys()]

    const offset = center - window / 2

    return keys.map((key: number): ParameterValue => {
        const adjustedKey = key * window / (ed - 1)

        return offset + adjustedKey as ParameterValue
    })
}

export {
    computeParameterValues,
}
