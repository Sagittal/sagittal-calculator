import { BIRD_DOWN, BIRD_UP, TICK_DOWN, TICK_UP, WING_DOWN, WING_UP } from "./elements"
import { Accent } from "./types"

const FOUR_MINAS_DOWN = [TICK_DOWN] as Accent[]
const TWO_MINAS_DOWN = [BIRD_DOWN] as Accent[]
const ONE_MINA_DOWN = [WING_DOWN] as Accent[]

const ONE_MINA_UP = [WING_UP] as Accent[]
const TWO_MINAS_UP = [BIRD_UP] as Accent[]
const FOUR_MINAS_UP = [TICK_UP] as Accent[]

const FIVE_MINAS_DOWN = [...ONE_MINA_DOWN, ...FOUR_MINAS_DOWN] as Accent[]
const THREE_MINAS_DOWN = [...ONE_MINA_UP, ...FOUR_MINAS_DOWN] as Accent[]

const THREE_MINAS_UP = [...ONE_MINA_DOWN, ...FOUR_MINAS_UP] as Accent[]
const FIVE_MINAS_UP = [...ONE_MINA_UP, ...FOUR_MINAS_UP] as Accent[]

export {
    FIVE_MINAS_DOWN,
    FOUR_MINAS_DOWN,
    THREE_MINAS_DOWN,
    TWO_MINAS_DOWN,
    ONE_MINA_DOWN,
    ONE_MINA_UP,
    TWO_MINAS_UP,
    THREE_MINAS_UP,
    FOUR_MINAS_UP,
    FIVE_MINAS_UP,
}
