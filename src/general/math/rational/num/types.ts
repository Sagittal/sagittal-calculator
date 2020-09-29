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

type RatioOrRationalDecimal<T extends NumTypeParameters = {}> =
    Ratio<T>
    | RationalDecimal<T>

// TODO: I think we should revert the bit about “or” types and just write it with the |
//  I sense that there's just no way I'm going to remember what the right thing is to do w/r/t to it later
//  Gotta make this as intuitive as possible
type IntegerOrIntegerDecimal<T extends NumTypeParameters = {}> =
    Integer<T>
    | IntegerDecimal<T>

export {
    Ratio,
    RatioByDecimal,
    Integer,
    RatioOrRationalDecimal,
    IntegerOrIntegerDecimal,
}
