import { NumTypeParameters } from "../../num"
import { RationalNumByDecimal } from "./decimal"
import { RationalNumByMonzo } from "./monzo"
import { RationalNumByQuotient } from "./quotient"

type RationalNum<T extends NumTypeParameters = {}> =
    RationalNumByDecimal<T> |
    RationalNumByMonzo<T> |
    RationalNumByQuotient<T>

export {
    RationalNum,
    RationalNumByDecimal,
}
