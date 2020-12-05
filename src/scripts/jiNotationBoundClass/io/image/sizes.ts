import {Basis, Cents, computePx, Multiplier, multiply, Px, Scale} from "@sagittal/general"

const X_VS_Y_STRETCH: Multiplier<Scale<Cents>> = 5 as Multiplier<Scale<Cents>>

const SCALE: Scale<Cents> = 100 as Scale<Cents>
const Y_SCALE: Scale<Cents> = multiply(SCALE, 1 as Multiplier<Scale<Cents>>)
const X_SCALE: Scale<Cents> = multiply(SCALE, X_VS_Y_STRETCH)

const MARGIN: Basis<Cents> = 0.1 as Basis<Cents>
const LEVEL_HEIGHT: Basis<Cents> = 1 as Basis<Cents>

const TICK_SIZE: Px = computePx(LEVEL_HEIGHT / 2 as Basis<Cents>, SCALE)
const HALF_TICK_SIZE: Px = TICK_SIZE / 2 as Px

const DOT_SIZE: Px = computePx(0.01 as Basis<Cents>, SCALE)
const DASH_SIZE: Px = 1 as Px

const SAGITTAL_OFFSET: Px = computePx(0.1 as Basis<Cents>, Y_SCALE)
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
    SAGITTAL_OFFSET,
    MINA_OFFSET,
}
