import {deepEquals, isUndefined, Maybe, stringify} from "../../../general"
import {HeadName, OrientedAccent, reorient} from "../flacco"
import {getCore} from "./core"
import {Core, Sagittal, Shafts} from "./types"

const reorientAccent = (orientedAccent: OrientedAccent): OrientedAccent =>
    ({
        ...orientedAccent,
        orientation: reorient(orientedAccent.orientation),
    })

const APOTOME_COMPLEMENT_CORE_PAIRS: Array<[Core, Core]> = [
    [
        getCore(HeadName.BARE_SHAFT),
        getCore(HeadName.DOUBLE_BARB, Shafts.DOUBLE),
    ],                                                                      //     |      /||\
    [
        getCore(HeadName.LEFT_SCROLL),
        getCore(HeadName.ARC_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    )|      (||~   A W
    [
        getCore(HeadName.RIGHT_SCROLL),
        getCore(HeadName.BARB_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //     |(     /||)   B V
    [
        getCore(HeadName.LEFT_BOATHOOK),
        getCore(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //    ~|    )//||    C U
    [
        getCore(HeadName.DOUBLE_SCROLL),
        getCore(HeadName.DOUBLE_LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //    )|(    //||    D T
    [
        getCore(HeadName.LEFT_SCROLL_AND_BOATHOOK),
        getCore(HeadName.BOATHOOK_AND_BARB, Shafts.DOUBLE),
    ],                                                                      //   )~|      ~||\   E S
    [
        getCore(HeadName.BOATHOOK_AND_SCROLL),
        getCore(HeadName.ARC_AND_SCROLL, Shafts.DOUBLE),
    ],                                                                      //    ~|(     (||(   F R
    [
        getCore(HeadName.RIGHT_BOATHOOK),
        getCore(HeadName.BARB_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //     |~     /||~   G Q
    [
        getCore(HeadName.DOUBLE_LEFT_BOATHOOK),
        getCore(HeadName.BOATHOOK_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //   ~~|      ~||)   H P
    [
        getCore(HeadName.SCROLL_AND_BOATHOOK),
        getCore(HeadName.LEFT_ARC, Shafts.DOUBLE),
    ],                                                                      //    )|~     (||    I O
    [
        getCore(HeadName.LEFT_BARB),
        getCore(HeadName.RIGHT_BARB, Shafts.DOUBLE),
    ],                                                                      //    /|       ||\   J N
    [
        getCore(HeadName.LEFT_SCROLL_AND_BARB),
        getCore(HeadName.SCROLL_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //   )/|      )||)   K M
    [
        getCore(HeadName.RIGHT_ARC),
        getCore(HeadName.RIGHT_ARC, Shafts.DOUBLE),
    ],                                                                      //     |)      ||)   L L
    [
        getCore(HeadName.SCROLL_AND_ARC),
        getCore(HeadName.LEFT_SCROLL_AND_BARB, Shafts.DOUBLE),
    ],                                                                      //    )|)    )/||    M K
    [
        getCore(HeadName.RIGHT_BARB),
        getCore(HeadName.LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //     |\     /||    N J
    [
        getCore(HeadName.LEFT_ARC),
        getCore(HeadName.SCROLL_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    (|      )||~   O I
    [
        getCore(HeadName.BOATHOOK_AND_ARC),
        getCore(HeadName.DOUBLE_LEFT_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    ~|)    ~~||    P H
    [
        getCore(HeadName.BARB_AND_BOATHOOK),
        getCore(HeadName.RIGHT_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    /|~      ||~   Q G
    [
        getCore(HeadName.ARC_AND_SCROLL),
        getCore(HeadName.BOATHOOK_AND_SCROLL, Shafts.DOUBLE),
    ],                                                                      //    (|(     ~||(   R F
    [
        getCore(HeadName.BOATHOOK_AND_BARB),
        getCore(HeadName.LEFT_SCROLL_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    ~|\    )~||    S E
    [
        getCore(HeadName.DOUBLE_LEFT_BARB),
        getCore(HeadName.DOUBLE_SCROLL, Shafts.DOUBLE),
    ],                                                                      //   //|      )||(   T D
    [
        getCore(HeadName.LEFT_SCROLL_AND_DOUBLE_BARB),
        getCore(HeadName.LEFT_SCROLL_DOUBLE_RIGHT_BARB),
    ],                                                                      //  )//|       )|\\  U
    [
        getCore(HeadName.BARB_AND_ARC),
        getCore(HeadName.ARC_AND_BARB),
    ],                                                                      //    /|)      (|\   V
    [
        getCore(HeadName.ARC_AND_BOATHOOK),
        getCore(HeadName.DOUBLE_RIGHT_BARB),
    ],                                                                      //    (|~       |\\  W
    [
        getCore(HeadName.DOUBLE_BARB),
        getCore(HeadName.DOUBLE_ARC),
    ],                                                                      //    /|\      (|)   X
    [
        getCore(HeadName.LEFT_ARC_AND_BARB),
        getCore(HeadName.RIGHT_BARB_AND_ARC),
    ],                                                                      //   (/|        |\)  Y
    [
        getCore(HeadName.LEFT_SCROLL_AND_DOUBLE_BARB),
        getCore(HeadName.LEFT_SCROLL_AND_DOUBLE_BARB),
    ],                                                                      //   )/|\     )/|\   Z
]

const computeApotomeComplement = ({ arm, core }: Sagittal): Sagittal => {
    if (isUndefined(core)) {
        return {core: getCore(HeadName.DOUBLE_BARB, Shafts.DOUBLE)}
    }

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

    if (!isUndefined(arm)) {
        return {
            arm: arm.map(reorientAccent),
            core: apotomeComplementCore,
        }
    }

    return {
        core: apotomeComplementCore,
    }
}

export {
    computeApotomeComplement,
}
