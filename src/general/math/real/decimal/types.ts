import { Monzo } from "../monzo"
import { Quotient } from "../quotient"
import { NumericProperties, NumTypeParameterEffects } from "../types"

type RealDecimal<T extends NumericProperties = {}> = number & NumTypeParameterEffects<T>

type RealByDecimal<T extends NumericProperties> = {
    decimal: RealDecimal<T>,
    monzo?: Monzo<T>,
    quotient?: Quotient<T>,
}

export {
    RealDecimal,
    RealByDecimal,
}
