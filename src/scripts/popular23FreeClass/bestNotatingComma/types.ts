import { Cents, Id, Maybe, Monzo } from "../../../general"
import { SymbolClass } from "../../../sagittal"

interface BestNotatingCommaProperties {
    bestNotatingCommaCents: Cents,
    bestNotatingCommaMonzo: Monzo<{ rational: true }>,
    bestNotatingCommaMaybeSymbolClassId: Maybe<Id<SymbolClass>>,
}

export {
    BestNotatingCommaProperties,
}
