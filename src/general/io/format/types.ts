import { Io } from "../types"

type Formatted<T = unknown> = Io & { _FormattedBrand: T }

export {
    Formatted,
}
