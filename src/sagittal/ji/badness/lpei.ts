import {Abs, Cents, Decimal, Exponent, Prime} from "../../../general"
import {MINA} from "../../notations"
import {ApotomeSlope, computeLpe, N2D3P9} from "./complexity"
import {LPEI_U} from "./constants"
import {computeCentsError} from "./error"
import {LPEI} from "./types"

const computeLpei = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    cents: Cents,
    centUnit: Cents = MINA,
): LPEI =>
    computeLpe(n2d3p9, aas, ate) + LPEI_U * computeCentsError(cents, centUnit) as LPEI

export {
    computeLpei,
}
