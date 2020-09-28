import { NumTypeParameterEffects, NumTypeParameters } from "../../../num"
import { RationalMonzo } from "../monzo"
import { RationalQuotient } from "../quotient"

type RationalDecimal<T extends NumTypeParameters = {}> = number & NumTypeParameterEffects<T & { irrational: false }>
// TODO: perhaps we can now simplify and just make it rational: true/false

type RationalNumByDecimal<T extends NumTypeParameters = {}> = {
    decimal: RationalDecimal<T>,
    monzo?: RationalMonzo<T>,
    quotient?: RationalQuotient<T>,
}

export {
    RationalDecimal,
    RationalNumByDecimal,
}
