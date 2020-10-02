import { RealMonzo } from "../monzo"
import { RealQuotient } from "../quotient"
import { NumericProperties, NumTypeParameterEffects } from "../types"

type RealDecimal<T extends NumericProperties = {}> = number & NumTypeParameterEffects<T>

type RealByRealDecimal<T extends NumericProperties> = {
    decimal: RealDecimal<T>,
    monzo?: RealMonzo<T>,
    quotient?: RealQuotient<T>,
}

export {
    RealDecimal,
    RealByRealDecimal,
}
