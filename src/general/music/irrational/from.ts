import { shallowClone } from "../../code"
import {
    BASE_2,
    computeDecimalFromMonzo,
    computeDecimalFromQuotient,
    Decimal,
    log,
    Monzo,
    NumericProperties,
    Quotient,
} from "../../math"
import { Pitch } from "../pitch"
import { NON_JI_PITCH_BASE_MONZO } from "./constants"

const computeNonJiPitchFromDecimal = <T extends NumericProperties>(
    decimal: Decimal<Omit<T, "rational">>,
): Pitch<T & { rational: false }> =>
    ({
        monzo: shallowClone(NON_JI_PITCH_BASE_MONZO),
        scaler: [log(decimal, BASE_2) as Decimal, 1],
    }) as Pitch<T & { rational: false }>

const computeNonJiPitchFromMonzo = <T extends NumericProperties>(
    monzo: Monzo<Omit<T, "rational">>,
): Pitch<T & { rational: false }> =>
    computeNonJiPitchFromDecimal(computeDecimalFromMonzo(monzo))

const computeNonJiPitchFromQuotient = <T extends NumericProperties>(
    quotient: Quotient<Omit<T, "rational">>,
): Pitch<T & { rational: false }> =>
    computeNonJiPitchFromDecimal(computeDecimalFromQuotient(quotient))

export {
    computeNonJiPitchFromDecimal,
    computeNonJiPitchFromMonzo,
    computeNonJiPitchFromQuotient,
}
