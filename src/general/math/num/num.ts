import {
    Integer,
    IntegerMonzo,
    IntegerNum,
    IntegerQuotient,
    RationalDecimal,
    RationalMonzo,
    RationalNum,
    RationalQuotient,
} from "../rational"
import { Decimal } from "./decimal"
import { Monzo } from "./monzo"
import { Quotient } from "./quotient"
import { Num, NumTypeParameters } from "./types"

const computeNumFromMonzo: {
    <T extends NumTypeParameters>(monzo: IntegerMonzo<T>): IntegerNum<T>
    <T extends NumTypeParameters>(monzo: RationalMonzo<T>): RationalNum<T>
    <T extends NumTypeParameters>(monzo: Monzo<T>): Num<T>,
} = <T extends NumTypeParameters>(monzo: Monzo<T>): any =>
    ({ monzo })

const computeNumFromQuotient: {
    <T extends NumTypeParameters>(quotient: IntegerQuotient<T>): IntegerNum<T>,
    <T extends NumTypeParameters>(quotient: RationalQuotient<T>): RationalNum<T>,
    <T extends NumTypeParameters>(quotient: Quotient<T>): Num<T>,
} = <T extends NumTypeParameters>(quotient: Quotient<T>): any =>
    ({ quotient })

const computeNumFromDecimal: {
    <T extends NumTypeParameters>(decimal: Integer<T>): IntegerNum<T>,
    <T extends NumTypeParameters>(decimal: RationalDecimal<T>): RationalNum<T>,
    <T extends NumTypeParameters>(decimal: Decimal<T>): Num<T>
} = <T extends NumTypeParameters>(decimal: Decimal<T>): any =>
    ({ decimal })

export {
    computeNumFromDecimal,
    computeNumFromMonzo,
    computeNumFromQuotient,
}
