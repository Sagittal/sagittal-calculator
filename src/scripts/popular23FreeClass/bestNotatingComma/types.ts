import {Cents, Maybe, Monzo} from "@sagittal/general"
import {CommaClassId} from "@sagittal/system"

interface BestNotatingCommaProperties {
    bestNotatingCommaCents: Cents,
    bestNotatingCommaMonzo: Monzo<{rational: true}>,
    bestNotatingCommaMaybeCommaClassId: Maybe<CommaClassId>,
}

export {
    BestNotatingCommaProperties,
}
