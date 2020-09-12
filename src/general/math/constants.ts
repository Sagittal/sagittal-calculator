import { Index } from "../types"
import { Base, Integer, Prime, Roughness, Smoothness } from "./types"

const TWO_PRIME_INDEX: Index<Prime> = 0 as Index<Prime>
const THREE_PRIME_INDEX: Index<Prime> = 1 as Index<Prime>
const FIVE_PRIME_INDEX: Index<Prime> = 2 as Index<Prime>

const THREE_ROUGHNESS = 3 as 3 & Roughness
const FIVE_ROUGHNESS = 5 as 5 & Roughness

const THREE_SMOOTHNESS = 3 as 3 & Smoothness

const BASE_2: Base = 2 as Base

const ADDITIVE_IDENTITY = 0
const MULTIPLICATIVE_IDENTITY = 1

const VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS: number = 1 / 1000000

const ONE = 1 as Integer

const SMOOTH_ROUGH_OFFSET = 1

export {
    TWO_PRIME_INDEX,
    THREE_PRIME_INDEX,
    FIVE_PRIME_INDEX,
    FIVE_ROUGHNESS,
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY,
    VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS,
    BASE_2,
    ONE,
    THREE_ROUGHNESS,
    THREE_SMOOTHNESS,
    SMOOTH_ROUGH_OFFSET,
}
