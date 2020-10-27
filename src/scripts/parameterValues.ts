import {Ed, Window} from "../general"
import {DynamicParameterScope, Parameter} from "./types"

const computeParameterValues = (parameterScope: DynamicParameterScope): Parameter[] => {
    const {
        center = 0 as Parameter,
        window = 0 as Window<Parameter>,
        ed = 1 as Ed<Parameter>,
    }: DynamicParameterScope = parameterScope

    if (ed === 1) {
        return [center as Parameter]
    }

    const keys = [...Array(ed).keys()]

    const offset = center - window / 2

    return keys.map((key: number): Parameter => {
        const adjustedKey = key * window / (ed - 1)

        return offset + adjustedKey as Parameter
    })
}

export {
    computeParameterValues,
}
