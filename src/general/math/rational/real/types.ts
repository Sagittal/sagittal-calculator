import { NumericProperties } from "../../real"
import { IntegerByIntegerDecimal, RationalByRationalDecimal } from "./decimal"
import { IntegerByIntegerMonzo, RationalByRationalMonzo } from "./monzo"
import { IntegerByIntegerQuotient, RationalByRationalQuotient } from "./quotient"

type Rational<T extends NumericProperties = {}> =
    RationalByRationalDecimal<T>
    | RationalByRationalMonzo<T>
    | RationalByRationalQuotient<T>

type Integer<T extends NumericProperties = {}> =
    IntegerByIntegerDecimal<T>
    | IntegerByIntegerMonzo<T>
    | IntegerByIntegerQuotient<T>

export {
    Rational,
    RationalByRationalDecimal,
    Integer,
}
