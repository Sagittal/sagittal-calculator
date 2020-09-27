import { Monzo } from "../monzo"
import { Ratio } from "../ratio"
import { NumTypeParameterEffects, NumTypeParameters } from "../types"

type Decimal<T extends NumTypeParameters = {}> = number & NumTypeParameterEffects<T>

type NumByDecimal<T extends NumTypeParameters> = {
    decimal: Decimal<T>,
    monzo?: Monzo<T>,
    ratio?: Ratio<T>,
}

export {
    Decimal,
    NumByDecimal,
}
