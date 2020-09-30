import { Direction, NumericProperties, NumTypeParameterEffects } from "../../../real"
import { IntegerMonzo, RationalMonzo } from "../monzo"
import { IntegerQuotient, RationalQuotient } from "../quotient"

type RationalDecimal<T extends NumericProperties = {}> =
    number & NumTypeParameterEffects<T & { rational: true }>

type IntegerDecimal<T extends NumericProperties = {}> =
    RationalDecimal<T & { integer: true, rational: true, direction: Direction.SUPER }>

type RationalByDecimal<T extends NumericProperties = {}> = {
    decimal: RationalDecimal<T>,
    monzo?: RationalMonzo<T>,
    quotient?: RationalQuotient<T>,
}

type IntegerByDecimal<T extends NumericProperties = {}> = {
    decimal: IntegerDecimal<T>,
    monzo?: IntegerMonzo<T>,
    quotient?: IntegerQuotient<T>,
}

export {
    RationalDecimal,
    IntegerDecimal,
    RationalByDecimal,
    IntegerByDecimal,
}
