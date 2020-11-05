import {Abs, Cents, Decimal, Exponent, Prime} from "../../../../general"
import {MINA} from "../../../notations"
import {lpe} from "../complexity"
import {computeCentsError} from "../error"
import {N2D3P9} from "../unpopularity"
import {ApotomeSlope} from "../uselessness"
import {LPEI_U} from "./constants"
import {Badness} from "./types"

const lpei = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    cents: Cents,
): Badness =>
    lpe(n2d3p9, aas, ate) + LPEI_U * computeCentsError(cents, MINA) as Badness

export {
    lpei,
}
