import { Index } from "../types"
import { Base, Prime, Ratio, Roughness } from "./types"

const FIVE_PRIME_INDEX: Index<Prime> = 2 as Index<Prime>

const FIVE_ROUGHNESS: Roughness = 5 as Roughness

const BASE_2: Base = 2 as Base

const ADDITIVE_IDENTITY = 0
const MULTIPLICATIVE_IDENTITY = 1

const VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS: number = 1 / 1000000

export {
    FIVE_PRIME_INDEX,
    FIVE_ROUGHNESS,
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY,
    VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS,
    BASE_2,
}
