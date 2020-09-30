import { NumericProperties } from "../../real"
import { IntegerByDecimal, RationalByDecimal } from "./decimal"
import { IntegerByMonzo, RationalByMonzo } from "./monzo"
import { IntegerByQuotient, RationalByQuotient } from "./quotient"

type Rational<T extends NumericProperties = {}> =
    RationalByDecimal<T>
    | RationalByMonzo<T>
    | RationalByQuotient<T>

type Integer<T extends NumericProperties = {}> =
    IntegerByDecimal<T>
    | IntegerByMonzo<T>
    | IntegerByQuotient<T>

export {
    Rational,
    RationalByDecimal,
    Integer,
}
