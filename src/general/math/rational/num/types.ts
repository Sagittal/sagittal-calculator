import { NumTypeParameters } from "../../num"
import { IntegerByDecimal, RatioByDecimal } from "./decimal"
import { IntegerByMonzo, RatioByMonzo } from "./monzo"
import { IntegerByQuotient, RatioByQuotient } from "./quotient"

type Ratio<T extends NumTypeParameters = {}> =
    RatioByDecimal<T> |
    RatioByMonzo<T> |
    RatioByQuotient<T>

type Integer<T extends NumTypeParameters = {}> =
    IntegerByDecimal<T> |
    IntegerByMonzo<T> |
    IntegerByQuotient<T>

export {
    Ratio,
    RatioByDecimal,
    Integer,
}
