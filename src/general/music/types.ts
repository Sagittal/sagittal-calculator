import { Scamon } from "../math"
import { Extrema } from "../types"

type Cents = number & { _CentsBrand: boolean }

type Zone<T = void> = Extrema<Scamon> & (T extends void ? {} : { _ZoneOfBrand: T })

export {
    Cents,
    Zone,
}
