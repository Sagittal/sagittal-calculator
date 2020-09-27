import { Decimal, Monzo, NumTypeParameters, Ratio } from "../../../num"

type RationalNumByDecimal<T extends NumTypeParameters = {}> = {
    decimal: Decimal<T & { potentiallyIrrational: false }>,
    monzo?: Monzo<T & { potentiallyIrrational: false }>,
    ratio?: Ratio<T & { potentiallyIrrational: false }>,
}

export {
    RationalNumByDecimal,
}
