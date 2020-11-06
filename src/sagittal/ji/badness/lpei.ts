import {Abs, Cents, Decimal, Exponent, Prime} from "../../../general"
import {MINA} from "../../notations"
import {ApotomeSlope, lpe, N2D3P9} from "./complexity"
import {LPEI_U} from "./constants"
import {computeCentsError} from "./error"
import {LPEI} from "./types"

const lpei = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    cents: Cents,
): LPEI =>
    lpe(n2d3p9, aas, ate) + LPEI_U * computeCentsError(cents, MINA) as LPEI

export {
    lpei,
}
