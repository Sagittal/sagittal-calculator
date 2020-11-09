import {Cents, computeCentsFromPitch, Scamon} from "../../../general"
import {MINA} from "../../notations"
import {computeLpe} from "./complexity"
import {LPEI_U} from "./constants"
import {computeCentsError} from "./error"
import {LPEI} from "./types"

const computeLpei = (jiPitch: Scamon<{rational: true}>, centUnit: Cents = MINA): LPEI => {
    const cents = computeCentsFromPitch(jiPitch)

    return computeLpe(jiPitch) + LPEI_U * computeCentsError(cents, centUnit) as LPEI
}

export {
    computeLpei,
}