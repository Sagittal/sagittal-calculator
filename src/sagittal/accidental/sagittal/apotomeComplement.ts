import {deepEquals, isUndefined, Maybe, stringify} from "../../../general"
import {Arm, ArmId, getArm, HeadId, Orientation, OrientedAccent, reorient} from "../flacco"
import {getCore} from "./core"
import {isSagittal} from "./typeGuards"
import {Core, NullSagittal, Sagittal, Shafts} from "./types"

const reorientAccent = (orientedAccent: OrientedAccent): OrientedAccent =>
    ({
        ...orientedAccent,
        orientation: reorient(orientedAccent.orientation),
    })

const APOTOME_COMPLEMENT_CORE_PAIRS: Array<[Core, Core]> = [
    [
        getCore(HeadId.BARE_SHAFT),
        getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE),
    ],                                                                      //     |      /||\
    [
        getCore(HeadId.LEFT_SCROLL),
        getCore(HeadId.ARC_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    )|      (||~   A W
    [
        getCore(HeadId.RIGHT_SCROLL),
        getCore(HeadId.BARB_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //     |(     /||)   B V
    [
        getCore(HeadId.LEFT_BOATHOOK),
        getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //    ~|    )//||    C U
    [
        getCore(HeadId.DOUBLE_SCROLL),
        getCore(HeadId.DOUBLE_LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //    )|(    //||    D T
    [
        getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK),
        getCore(HeadId.BOATHOOK_AND_BARB, Shafts.DOUBLE),
    ],                                                                      //   )~|      ~||\   E S
    [
        getCore(HeadId.BOATHOOK_AND_SCROLL),
        getCore(HeadId.ARC_AND_SCROLL, Shafts.DOUBLE),
    ],                                                                      //    ~|(     (||(   F R
    [
        getCore(HeadId.RIGHT_BOATHOOK),
        getCore(HeadId.BARB_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //     |~     /||~   G Q
    [
        getCore(HeadId.DOUBLE_LEFT_BOATHOOK),
        getCore(HeadId.BOATHOOK_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //   ~~|      ~||)   H P
    [
        getCore(HeadId.SCROLL_AND_BOATHOOK),
        getCore(HeadId.LEFT_ARC, Shafts.DOUBLE),
    ],                                                                      //    )|~     (||    I O
    [
        getCore(HeadId.LEFT_BARB),
        getCore(HeadId.RIGHT_BARB, Shafts.DOUBLE),
    ],                                                                      //    /|       ||\   J N
    [
        getCore(HeadId.LEFT_SCROLL_AND_BARB),
        getCore(HeadId.SCROLL_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //   )/|      )||)   K M
    [
        getCore(HeadId.RIGHT_ARC),
        getCore(HeadId.RIGHT_ARC, Shafts.DOUBLE),
    ],                                                                      //     |)      ||)   L L
    [
        getCore(HeadId.SCROLL_AND_ARC),
        getCore(HeadId.LEFT_SCROLL_AND_BARB, Shafts.DOUBLE),
    ],                                                                      //    )|)    )/||    M K
    [
        getCore(HeadId.RIGHT_BARB),
        getCore(HeadId.LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //     |\     /||    N J
    [
        getCore(HeadId.LEFT_ARC),
        getCore(HeadId.SCROLL_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    (|      )||~   O I
    [
        getCore(HeadId.BOATHOOK_AND_ARC),
        getCore(HeadId.DOUBLE_LEFT_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    ~|)    ~~||    P H
    [
        getCore(HeadId.BARB_AND_BOATHOOK),
        getCore(HeadId.RIGHT_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    /|~      ||~   Q G
    [
        getCore(HeadId.ARC_AND_SCROLL),
        getCore(HeadId.BOATHOOK_AND_SCROLL, Shafts.DOUBLE),
    ],                                                                      //    (|(     ~||(   R F
    [
        getCore(HeadId.BOATHOOK_AND_BARB),
        getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    ~|\    )~||    S E
    [
        getCore(HeadId.DOUBLE_LEFT_BARB),
        getCore(HeadId.DOUBLE_SCROLL, Shafts.DOUBLE),
    ],                                                                      //   //|      )||(   T D
    [
        getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB),
        getCore(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB),
    ],                                                                      //  )//|       )|\\  U
    [
        getCore(HeadId.BARB_AND_ARC),
        getCore(HeadId.ARC_AND_BARB),
    ],                                                                      //    /|)      (|\   V
    [
        getCore(HeadId.ARC_AND_BOATHOOK),
        getCore(HeadId.DOUBLE_RIGHT_BARB),
    ],                                                                      //    (|~       |\\  W
    [
        getCore(HeadId.DOUBLE_BARB),
        getCore(HeadId.DOUBLE_ARC),
    ],                                                                      //    /|\      (|)   X
    [
        getCore(HeadId.LEFT_ARC_AND_BARB),
        getCore(HeadId.RIGHT_BARB_AND_ARC),
    ],                                                                      //   (/|        |\)  Y
    [
        getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB),
        getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB),
    ],                                                                      //   )/|\     )/|\   Z
]

const computeMaybeArmForSelfComplementingCore = (maybeArm: Maybe<Arm>): Maybe<Arm> => {
    if (deepEquals(maybeArm, getArm(ArmId.WING, Orientation.AGAINST))) {
        return getArm(ArmId.BIRD)
    } else if (deepEquals(maybeArm, undefined)) {
        return getArm(ArmId.WING)
    } else if (deepEquals(maybeArm, getArm(ArmId.WING))) {
        return undefined
    } else if (deepEquals(maybeArm, getArm(ArmId.BIRD))) {
        return getArm(ArmId.WING, Orientation.AGAINST)
    } else {
        throw new Error(`Did not find arm for self-complementing core with arm ${maybeArm}.`)
    }
}

// TODO: SYMBOL VS SAGITTAL; GLYPH TYPES
//  Just a thought - am I converting from these primitive IDs to the objects too soon? Like, can I wait until IO?

const computeApotomeComplement = (sagittal: NullSagittal | Sagittal): Sagittal => {
    // TODO: APOTOME COMPLEMENT EDGE CASE
    //  Although actually, if there's no arm and it's a double barb, shouldn't it return the NullSagittal?
    if (!isSagittal(sagittal)) {
        return {...getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE)}
    }
    const {arm, ...core} = sagittal

    let apotomeComplementCore: Maybe<Core> = undefined

    APOTOME_COMPLEMENT_CORE_PAIRS.forEach(
        ([complementCoreA, complementCoreB]: [Core, Core]): void => {
            if (deepEquals(core, complementCoreA)) apotomeComplementCore = complementCoreB
            if (deepEquals(core, complementCoreB)) apotomeComplementCore = complementCoreA
        },
    )

    if (isUndefined(apotomeComplementCore)) {
        throw new Error(`Tried to compute apotome complement for sagittal whose core is outside the 1st apotome section ${stringify(core)}`)
    }

    if (deepEquals(apotomeComplementCore, getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB))) {
        const handledArm = computeMaybeArmForSelfComplementingCore(arm)

        if (isUndefined(handledArm)) {
            return {...apotomeComplementCore as Core}
        }

        return {
            arm: handledArm,
            ...apotomeComplementCore as Core,
        }
    } else if (!isUndefined(arm)) {
        return {
            arm: arm.map(reorientAccent),
            ...apotomeComplementCore as Core,
        }
    }

    return {
        ...apotomeComplementCore as Core,
    }
}

export {
    computeApotomeComplement,
}
