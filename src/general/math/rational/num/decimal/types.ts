import { NumTypeParameterEffects, NumTypeParameters } from "../../../num"
import { Integer } from "../../types"
import { IntegerMonzo, RationalMonzo } from "../monzo"
import { IntegerQuotient, RationalQuotient } from "../quotient"

type RationalDecimal<T extends NumTypeParameters = {}> = number & NumTypeParameterEffects<T & { irrational: false }>
// TODO: perhaps we can now simplify and just make it rational: true/false

type RationalNumByDecimal<T extends NumTypeParameters = {}> = {
    decimal: RationalDecimal<T>,
    monzo?: RationalMonzo<T>,
    quotient?: RationalQuotient<T>,
}

type IntegerNumByDecimal<T extends NumTypeParameters = {}> = {
    decimal: Integer<T>,
    monzo?: IntegerMonzo<T>,
    quotient?: IntegerQuotient<T>,
}

export {
    RationalDecimal,
    RationalNumByDecimal,
    IntegerNumByDecimal,
}
