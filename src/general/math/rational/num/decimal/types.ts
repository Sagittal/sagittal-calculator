import { Direction, NumTypeParameterEffects, NumTypeParameters } from "../../../num"
import { IntegerMonzo, RationalMonzo } from "../monzo"
import { IntegerQuotient, RationalQuotient } from "../quotient"

type RationalDecimal<T extends NumTypeParameters = {}> = 
    number & NumTypeParameterEffects<T & { rational: true }>

type IntegerDecimal<T extends NumTypeParameters = {}> =
    RationalDecimal<T & { integer: true, rational: true, direction: Direction.SUPER }>

type RatioByDecimal<T extends NumTypeParameters = {}> = {
    decimal: RationalDecimal<T>,
    monzo?: RationalMonzo<T>,
    quotient?: RationalQuotient<T>,
}

type IntegerByDecimal<T extends NumTypeParameters = {}> = {
    decimal: IntegerDecimal<T>,
    monzo?: IntegerMonzo<T>,
    quotient?: IntegerQuotient<T>,
}

export {
    RationalDecimal,
    IntegerDecimal,
    RatioByDecimal,
    IntegerByDecimal,
}
