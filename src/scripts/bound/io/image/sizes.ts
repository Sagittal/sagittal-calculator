import { Basis, Cents, computePx, Px, Scale } from "../../../../general"

const SIZE = 100
const X_VS_Y_STRETCH = 5

const SCALE: Scale<Cents> = SIZE as Scale<Cents>
const Y_SCALE: Scale<Cents> = 1 * SCALE as Scale<Cents>
const X_SCALE: Scale<Cents> = X_VS_Y_STRETCH * SCALE as Scale<Cents>

const MARGIN: Basis<Cents> = 0.1 as Basis<Cents>
const LEVEL_HEIGHT: Basis<Cents> = 1 as Basis<Cents>

const TICK_SIZE: Px = computePx(LEVEL_HEIGHT / 2 as Basis<Cents>, SCALE)
const HALF_TICK_SIZE: Px = TICK_SIZE / 2 as Px

const DOT_SIZE: Px = computePx(0.01 as Basis<Cents>, SCALE)
const DASH_SIZE: Px = 1 as Px

const SYMBOL_OFFSET: Px = computePx(0.1 as Basis<Cents>, Y_SCALE)
const MINA_OFFSET: Px = computePx(0.3 as Basis<Cents>, Y_SCALE)

export {
    SCALE,
    X_SCALE,
    Y_SCALE,
    MARGIN,
    LEVEL_HEIGHT,
    TICK_SIZE,
    DOT_SIZE,
    DASH_SIZE,
    HALF_TICK_SIZE,
    SYMBOL_OFFSET,
    MINA_OFFSET,
}
