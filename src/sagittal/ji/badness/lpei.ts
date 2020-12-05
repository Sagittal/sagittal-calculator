import {Cents, computeCentsFromPitch, Scamon} from "@sagittal/general"
import {MINA_CENTS} from "../../notations"
import {computeLpe} from "./complexity"
import {LPEI_U} from "./constants"
import {computeCentsError} from "./error"
import {LPEI} from "./types"

const computeLpei = (jiPitch: Scamon<{rational: true}>, centUnit: Cents = MINA_CENTS): LPEI => {
    const cents = computeCentsFromPitch(jiPitch)

    return computeLpe(jiPitch) + LPEI_U * computeCentsError(cents, centUnit) as LPEI
}

export {
    computeLpei,
}
