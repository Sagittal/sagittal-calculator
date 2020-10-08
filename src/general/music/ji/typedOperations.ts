import { NumericProperties, subtractMonzos, sumMonzos } from "../../math"
import { Pitch } from "../pitch"

const addJiPitches = <T extends NumericProperties>(
    augendJiPitch: Pitch<T & { rational: true }>,
    addendJiPitch: Pitch<T & { rational: true }>,
): Pitch<T & { direction: undefined, integer: false, rational: true }> =>
    ({
        monzo: sumMonzos(augendJiPitch.monzo, addendJiPitch.monzo),
    }) as Pitch<T & { direction: undefined, integer: false, rational: true }>

const computeJiInterval = <T extends NumericProperties>(
    fromJiPitch: Pitch<T & { rational: true }>,
    toJiPitch: Pitch<T & { rational: true }>,
): Pitch<T & { direction: undefined, integer: false }> =>
    ({
        monzo: subtractMonzos(toJiPitch.monzo, fromJiPitch.monzo),
    }) as Pitch<T & { direction: undefined, integer: false, rational: true }>

export {
    computeJiInterval,
    addJiPitches,
}
