import { isUndefined, Window } from "../../../../general"
import { ParameterValue } from "../../sumOfSquares"
import { DynamicParameterScope } from "../types"
import { computeEqualDivision } from "./equalDivision"
import { DynamicParameterScopeOptions } from "./types"

const countDefinedOption = (option: unknown) => isUndefined(option) ? 0 : 1

const computeDynamicParameterScope = (options: DynamicParameterScopeOptions): DynamicParameterScope => {
    const { max, min, center: centerOption, window: windowOption } = options
    const definedOptionCount =
        countDefinedOption(max) +
        countDefinedOption(min) +
        countDefinedOption(centerOption) +
        countDefinedOption(windowOption)

    if (definedOptionCount !== 2) {
        const providedOptions = Object.entries(options).map(([k, v]) => `${k} ${v}`).join(", ")
        throw new Error(`Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; ${definedOptionCount} provided (${providedOptions})`)
    }

    let center
    let window
    let ed

    if (!isUndefined(max) && !isUndefined(min)) {
        window = max - min as Window<ParameterValue>
        center = min + window / 2 as ParameterValue
    }

    if (!isUndefined(max) && !isUndefined(windowOption)) {
        window = windowOption
        center = max - windowOption / 2 as ParameterValue
    }

    if (!isUndefined(max) && !isUndefined(centerOption)) {
        window = (max - centerOption) * 2 as Window<ParameterValue>
        center = centerOption
    }

    if (!isUndefined(min) && !isUndefined(windowOption)) {
        window = windowOption
        center = min + windowOption / 2 as ParameterValue
    }

    if (!isUndefined(min) && !isUndefined(centerOption)) {
        window = (centerOption - min) * 2 as Window<ParameterValue>
        center = centerOption
    }

    if (!isUndefined(windowOption) && !isUndefined(centerOption)) {
        window = windowOption
        center = centerOption
    }

    ed = computeEqualDivision(window as Window<ParameterValue>)

    return { center, window, ed }
}

export {
    computeDynamicParameterScope,
}
