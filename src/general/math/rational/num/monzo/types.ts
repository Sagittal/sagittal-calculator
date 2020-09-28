import { Direction, NumTypeParameterEffects, NumTypeParameters } from "../../../num"
import { Exponent } from "../../../types"
import { Prime } from "../../types"
import { IntegerDecimal, RationalDecimal } from "../decimal"
import { IntegerQuotient, RationalQuotient } from "../quotient"

type RationalMonzo<T extends NumTypeParameters = {}> =
    Array<IntegerDecimal & Exponent<Prime>>
    & NumTypeParameterEffects<T & { rational: true }>

type RatioByMonzo<T extends NumTypeParameters = {}> = {
    decimal?: RationalDecimal<T>,
    monzo: RationalMonzo<T>,
    quotient?: RationalQuotient<T>,
}

type IntegerMonzo<T extends NumTypeParameters = {}> =
    Array<IntegerDecimal & Exponent<Prime>>
    & NumTypeParameterEffects<T & { integer: true, rational: true, direction: Direction.SUPER }>

type IntegerByMonzo<T extends NumTypeParameters = {}> = {
    decimal?: IntegerDecimal<T>,
    monzo: IntegerMonzo<T>,
    quotient?: IntegerQuotient<T>,
}

export {
    RationalMonzo,
    RatioByMonzo,
    IntegerMonzo,
    IntegerByMonzo,
}
