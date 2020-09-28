import { Integer, IntegerMonzo, Ratio, RationalMonzo } from "../rational"
import { Monzo } from "./monzo"
import { Num, NumTypeParameters } from "./types"

const computeNumFromMonzo: {
    <T extends NumTypeParameters>(monzo: IntegerMonzo<T>): Integer<T>
    <T extends NumTypeParameters>(monzo: RationalMonzo<T>): Ratio<T>
    <T extends NumTypeParameters>(monzo: Monzo<T>): Num<T>,
} = <T extends NumTypeParameters>(monzo: Monzo<T>): any =>
    ({ monzo })

export {
    computeNumFromMonzo,
}
