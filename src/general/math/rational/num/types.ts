import { NumTypeParameters } from "../../num"
import { RationalNumByDecimal } from "./decimal"
import { RationalNumByMonzo } from "./monzo"
import { RationalNumByRatio } from "./ratio"

type RationalNum<T extends NumTypeParameters = {}> =
    RationalNumByDecimal<T & { potentiallyIrrational: false }> |
    RationalNumByMonzo<T & { potentiallyIrrational: false }> |
    RationalNumByRatio<T & { potentiallyIrrational: false }>


export {
    RationalNum,
    RationalNumByDecimal,
}
