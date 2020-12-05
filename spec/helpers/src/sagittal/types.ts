import {Cents, Decimal, Monzo, NumericProperties, Scamon} from "@sagittal/general"

type PitchExpectation<T extends NumericProperties = {}> = {
    pitch: Scamon<T>,
    cents: Cents,
    decimal: Decimal<T>,
    monzo: Monzo<T>,
}

export {
    PitchExpectation,
}
