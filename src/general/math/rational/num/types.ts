import { NumTypeParameters } from "../../num"
import { RationalNumByDecimal } from "./decimal"
import { RationalNumByMonzo } from "./monzo"
import { RationalNumByRatio } from "./ratio"

type RationalNum<T extends NumTypeParameters = {}> =
    RationalNumByDecimal<T> |
    RationalNumByMonzo<T> |
    RationalNumByRatio<T>

export {
    RationalNum,
    RationalNumByDecimal,
}
