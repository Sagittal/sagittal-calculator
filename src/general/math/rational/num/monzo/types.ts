import { DecimalNotDefaultingToPotentiallyIrrational, Monzo, NumTypeParameters, Ratio } from "../../../num"

type RationalNumByMonzo<T extends NumTypeParameters = {}> = {
    decimal?: DecimalNotDefaultingToPotentiallyIrrational<T & { potentiallyIrrational: false }>,
    monzo: Monzo<T & { potentiallyIrrational: false }>,
    ratio?: Ratio<T & { potentiallyIrrational: false }>,
}

export {
    RationalNumByMonzo,
}
