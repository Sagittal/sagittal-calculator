import {Cents, Id, Maybe, Monzo} from "../../../general"
import {CommaClass} from "../../../sagittal"

interface BestNotatingCommaProperties {
    bestNotatingCommaCents: Cents,
    bestNotatingCommaMonzo: Monzo<{rational: true}>,
    bestNotatingCommaMaybeCommaClassId: Maybe<Id<CommaClass>>,
}

export {
    BestNotatingCommaProperties,
}
