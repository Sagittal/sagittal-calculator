import { Monzo } from "../monzo"
import { Quotient } from "../quotient"
import { NumTypeParameterEffects, NumTypeParameters } from "../types"

type Decimal<T extends NumTypeParameters = {}> = number & NumTypeParameterEffects<T>

type NumByDecimal<T extends NumTypeParameters> = {
    decimal: Decimal<T>,
    monzo?: Monzo<T>,
    quotient?: Quotient<T>,
}

export {
    Decimal,
    NumByDecimal,
}
