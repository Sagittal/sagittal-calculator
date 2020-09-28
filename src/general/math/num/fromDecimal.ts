import { Integer, IntegerDecimal, Ratio, RationalDecimal } from "../rational"
import { Decimal } from "./decimal"
import { Num, NumTypeParameters } from "./types"

const computeNumFromDecimal: {
    <T extends NumTypeParameters>(decimal: IntegerDecimal<T>): Integer<T>,
    <T extends NumTypeParameters>(decimal: RationalDecimal<T>): Ratio<T>,
    <T extends NumTypeParameters>(decimal: Decimal<T>): Num<T>
} = <T extends NumTypeParameters>(decimal: Decimal<T>): any =>
    ({ decimal })

export {
    computeNumFromDecimal,
}
