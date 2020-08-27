import { isUndefined, Span } from "../../../../general"
import { ParameterValue } from "../../sumOfSquares"
import { DynamicParameterScope } from "../types"
import { computeResolution } from "./resolution"
import { ComputeDynamicParameterScopeOptions } from "./types"

const countDefinedOption = (option: unknown) => isUndefined(option) ? 0 : 1

const computeDynamicParameterScope = (options: ComputeDynamicParameterScopeOptions): DynamicParameterScope => {
    const { max, min, center: centerOption, span: spanOption } = options
    const definedOptionCount =
        countDefinedOption(max) +
        countDefinedOption(min) +
        countDefinedOption(centerOption) +
        countDefinedOption(spanOption)

    if (definedOptionCount !== 2) {
        const providedOptions = Object.entries(options).map(([k, v]) => `${k} ${v}`).join(", ")
        throw new Error(`Exactly 2 options should be provided from min, max, center, and span in order to compute a dynamic parameter scope; ${definedOptionCount} provided (${providedOptions})`)
    }

    let center
    let span
    let resolution

    if (!isUndefined(max) && !isUndefined(min)) {
        span = max - min as Span<ParameterValue>
        center = min + span / 2 as ParameterValue
    }

    if (!isUndefined(max) && !isUndefined(spanOption)) {
        span = spanOption
        center = max - spanOption / 2 as ParameterValue
    }

    if (!isUndefined(max) && !isUndefined(centerOption)) {
        span = (max - centerOption) * 2 as Span<ParameterValue>
        center = centerOption
    }

    if (!isUndefined(min) && !isUndefined(spanOption)) {
        span = spanOption
        center = min + spanOption / 2 as ParameterValue
    }

    if (!isUndefined(min) && !isUndefined(centerOption)) {
        span = (centerOption - min) * 2 as Span<ParameterValue>
        center = centerOption
    }

    if (!isUndefined(spanOption) && !isUndefined(centerOption)) {
        span = spanOption
        center = centerOption
    }

    resolution = computeResolution(span as Span<ParameterValue>)

    return { center, span, resolution }
}

export {
    computeDynamicParameterScope,
}
