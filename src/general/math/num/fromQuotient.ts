import { Integer, IntegerQuotient, Ratio, RationalQuotient } from "../rational"
import { Quotient } from "./quotient"
import { Num, NumTypeParameters } from "./types"

const computeNumFromQuotient: {
    <T extends NumTypeParameters>(quotient: IntegerQuotient<T>): Integer<T>,
    <T extends NumTypeParameters>(quotient: RationalQuotient<T>): Ratio<T>,
    <T extends NumTypeParameters>(quotient: Quotient<T>): Num<T>,
} = <T extends NumTypeParameters>(quotient: Quotient<T>): any =>
    ({ quotient })

export {
    computeNumFromQuotient,
}
