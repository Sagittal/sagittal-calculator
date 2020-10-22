import {NumericProperties, Scamon} from "../math"
import {Extrema, Name} from "../types"

type Cents = number & {_CentsBrand: boolean}

type Zone<Of = void, T extends NumericProperties = {}> =
    Extrema<Scamon<T>>
    & (Of extends void ? {} : {_ZoneOfBrand: Of})

type CommaMean<T extends NumericProperties = {}> = {
    name: Name<CommaMean>,
    pitch: Scamon<T & {rational: false}>,
}

export {
    Cents,
    Zone,
    CommaMean,
}
