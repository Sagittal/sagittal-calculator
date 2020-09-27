import { Cents, Id, Maybe, RationalMonzo } from "../../../general"
import { SymbolClass } from "../../../sagittal"

interface BestNotatingCommaProperties {
    bestNotatingCommaCents: Cents,
    bestNotatingCommaMonzo: RationalMonzo,
    bestNotatingCommaMaybeSymbolClassId: Maybe<Id<SymbolClass>>,
}

export {
    BestNotatingCommaProperties,
}
