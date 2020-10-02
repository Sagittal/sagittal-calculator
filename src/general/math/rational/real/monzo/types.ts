import { Direction, NumericProperties, NumTypeParameterEffects } from "../../../real"
import { Exponent } from "../../../types"
import { Prime } from "../../types"
import { IntegerDecimal, RationalDecimal } from "../decimal"
import { IntegerQuotient, RationalQuotient } from "../quotient"

type RationalMonzo<T extends NumericProperties = {}> =
    Array<IntegerDecimal & Exponent<Prime>>
    & NumTypeParameterEffects<T & { rational: true }>

type RationalByRationalMonzo<T extends NumericProperties = {}> = {
    decimal?: RationalDecimal<T>,
    monzo: RationalMonzo<T>,
    quotient?: RationalQuotient<T>,
}

type IntegerMonzo<T extends NumericProperties = {}> =
    Array<IntegerDecimal & Exponent<Prime>>
    & NumTypeParameterEffects<T & { integer: true, rational: true, direction: Direction.SUPER }>

type IntegerByIntegerMonzo<T extends NumericProperties = {}> = {
    decimal?: IntegerDecimal<T>,
    monzo: IntegerMonzo<T>,
    quotient?: IntegerQuotient<T>,
}

export {
    RationalMonzo,
    RationalByRationalMonzo,
    IntegerMonzo,
    IntegerByIntegerMonzo,
}
