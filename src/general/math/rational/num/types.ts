import { NumTypeParameters } from "../../num"
import { IntegerNumByDecimal, RationalNumByDecimal } from "./decimal"
import { IntegerNumByMonzo, RationalNumByMonzo } from "./monzo"
import { IntegerNumByQuotient, RationalNumByQuotient } from "./quotient"

type RationalNum<T extends NumTypeParameters = {}> =
    RationalNumByDecimal<T> |
    RationalNumByMonzo<T> |
    RationalNumByQuotient<T>

type IntegerNum<T extends NumTypeParameters = {}> =
    IntegerNumByDecimal<T> |
    IntegerNumByMonzo<T> |
    IntegerNumByQuotient<T>

export {
    RationalNum,
    RationalNumByDecimal,
    IntegerNum,
}
