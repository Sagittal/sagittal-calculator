//tslint:disable comment-format

import {APOTOME, invertScamon, Scamon, SYNTONIC_COMMA, UNISON} from "@sagittal/general"
import {Compatible} from "../flavor"
import {APOTOME_DOWN, DOUBLE_APOTOME, DOUBLE_APOTOME_DOWN} from "./constants"

const COMPATIBLE_TO_PITCH_MAP: Record<Compatible, Scamon<{rational: true}>> = {
    [Compatible.STEIN_SEMISHARP]: {monzo: [-5, 1, 0, 0, 1]} as Scamon<{rational: true}>,                //  >
    [Compatible.STEIN_SEMIFLAT]: {monzo: [5, -1, 0, 0, -1]} as Scamon<{rational: true}>,                //  <
    [Compatible.STEIN_SESQUISHARP]: {monzo: [-16, 8, 0, 0, 1]} as Scamon<{rational: true}>,             // >#
    [Compatible.ZIMMERMANN_SESQUIFLAT]: {monzo: [16, -8, 0, 0, -1]} as Scamon<{rational: true}>,        // <b
    [Compatible.WILSON_PLUS]: SYNTONIC_COMMA,                                                           //  +
    [Compatible.WILSON_MINUS]: invertScamon(SYNTONIC_COMMA) as Scamon<{rational: true}>,                //  -
    [Compatible.NATURAL]: UNISON,                                                                       // |//|
    [Compatible.SHARP]: APOTOME,                                                                        //  #
    [Compatible.FLAT]: APOTOME_DOWN,                                                                    //  b
    [Compatible.DOUBLE_SHARP]: DOUBLE_APOTOME,                                                          //  x
    [Compatible.DOUBLE_FLAT]: DOUBLE_APOTOME_DOWN,                                                      //  bb
}

const computePitchAlterationFromCompatible = (compatible: Compatible): Scamon<{rational: true}> =>
    COMPATIBLE_TO_PITCH_MAP[compatible]

export {
    computePitchAlterationFromCompatible,
}
