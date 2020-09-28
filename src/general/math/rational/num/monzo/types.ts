import { Direction, NumTypeParameterEffects, NumTypeParameters } from "../../../num"
import { Exponent } from "../../../types"
import { Integer, Prime } from "../../types"
import { RationalDecimal } from "../decimal"
import { IntegerQuotient, RationalQuotient } from "../quotient"

type RationalMonzo<T extends NumTypeParameters = {}> =
    Array<Integer & Exponent<Prime>>
    & NumTypeParameterEffects<T & { irrational: false }>

type RationalNumByMonzo<T extends NumTypeParameters = {}> = {
    decimal?: RationalDecimal<T>,
    monzo: RationalMonzo<T>,
    quotient?: RationalQuotient<T>,
}

type IntegerMonzo<T extends NumTypeParameters = {}> =
    Array<Integer & Exponent<Prime>>
    & NumTypeParameterEffects<T & { integer: true, irrational: false, direction: Direction.SUPER }>

type IntegerNumByMonzo<T extends NumTypeParameters = {}> = {
    decimal?: Integer<T>,
    monzo: IntegerMonzo<T>,
    quotient?: IntegerQuotient<T>,
}

export {
    RationalMonzo,
    RationalNumByMonzo,
    IntegerMonzo,
    IntegerNumByMonzo,
}
