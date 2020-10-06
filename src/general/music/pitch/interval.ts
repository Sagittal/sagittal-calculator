import { divide, NumericProperties, subtractMonzos } from "../../math"
import { isJi } from "../ji"
import { computePitchFromDecimal } from "./from"
import { computeDecimalFromPitch } from "./to"
import { Pitch } from "./types"

const computeInterval: {
    <T extends NumericProperties>(
        fromPitch: Pitch<T & { rational: true }>,
        toPitch: Pitch<T & { rational: true }>,
    ): Pitch<T & { direction: undefined, integer: false, rational: true }>,
    <T extends NumericProperties>(
        fromPitch: Pitch<T & { rational: true }>,
        toPitch: Pitch<T & { rational: false }>,
    ): Pitch<T & { direction: undefined, integer: false, rational: false }>
    <T extends NumericProperties>(
        fromPitch: Pitch<T & { rational: false }>,
        toPitch: Pitch<T & { rational: true }>,
    ): Pitch<T & { direction: undefined, integer: false, rational: false }>
    <T extends NumericProperties>(
        fromPitch: Pitch<T>,
        toPitch: Pitch<T>,
    ): Pitch<T & { direction: undefined, integer: false }>,
} = <T extends NumericProperties>(
    fromPitch: Pitch<T>,
    toPitch: Pitch<T>,
): any =>
    isJi(fromPitch) && isJi(toPitch) ?
        ({
            monzo: subtractMonzos(toPitch.monzo, fromPitch.monzo),
        }) as Pitch<T & { direction: undefined, integer: false, rational: true }> :
        computePitchFromDecimal(
            divide(computeDecimalFromPitch(toPitch), computeDecimalFromPitch(fromPitch)),
        ) as Pitch<T & { direction: undefined, integer: false, rational: false }>


export {
    computeInterval,
}
