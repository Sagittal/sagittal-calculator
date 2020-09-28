import { NumTypeParameters } from "../../num"
import { IntegerByDecimal, IntegerDecimal, RatioByDecimal, RationalDecimal } from "./decimal"
import { IntegerByMonzo, RatioByMonzo } from "./monzo"
import { IntegerByQuotient, RatioByQuotient } from "./quotient"

type Ratio<T extends NumTypeParameters = {}> =
    RatioByDecimal<T>
    | RatioByMonzo<T>
    | RatioByQuotient<T>

type Integer<T extends NumTypeParameters = {}> =
    IntegerByDecimal<T>
    | IntegerByMonzo<T>
    | IntegerByQuotient<T>

type RationalParameter<T extends NumTypeParameters = {}> =
    Ratio<T>
    | RationalDecimal<T>

type IntegerParameter<T extends NumTypeParameters = {}> =
    Integer<T>
    | IntegerDecimal<T>

export {
    Ratio,
    RatioByDecimal,
    Integer,
    RationalParameter,
    IntegerParameter,
}
