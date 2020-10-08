import { Decimal, subtract } from "../math"
import { computeCentsFromPitch, Pitch } from "./pitch"
import { Cents } from "./types"

const dividePitch = (dividendPitch: Pitch, divisorPitch: Pitch): Decimal<{ rational: false }> =>
    computeCentsFromPitch(dividendPitch) / computeCentsFromPitch(divisorPitch) as Decimal<{ rational: false }>

const subtractPitch = (minuendPitch: Pitch, subtrahendPitch: Pitch): Cents =>
    subtract(computeCentsFromPitch(minuendPitch), computeCentsFromPitch(subtrahendPitch))

export {
    dividePitch,
    subtractPitch,
}
