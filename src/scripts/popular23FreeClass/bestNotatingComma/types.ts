import { Cents, Id, Maybe, Monzo } from "../../../general"
import { SymbolClass } from "../../../sagittal"

interface BestNotatingCommaProperties {
    bestNotatingCommaCents: Cents,
    bestNotatingCommaMonzo: Monzo,
    bestNotatingCommaMaybeSymbolClassId: Maybe<Id<SymbolClass>>,
}

export {
    BestNotatingCommaProperties,
}
