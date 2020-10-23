import {deepEquals, isUndefined, Maybe, stringify} from "../../../general"
import {FlagComboName, OrientedAccent, reorient} from "../flacco"
import {getCore} from "./core"
import {Core, Shafts, Symbol} from "./types"

const reorientAccent = (orientedAccent: OrientedAccent): OrientedAccent =>
    ({
        ...orientedAccent,
        orientation: reorient(orientedAccent.orientation),
    })

const APOTOME_COMPLEMENT_CORE_PAIRS: Array<[Core, Core]> = [
    [
        getCore(FlagComboName.BARE_SHAFT),
        getCore(FlagComboName.DOUBLE_BARB, Shafts.DOUBLE),
    ],                                                                      //     |      /||\
    [
        getCore(FlagComboName.LEFT_SCROLL),
        getCore(FlagComboName.ARC_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    )|      (||~   A W
    [
        getCore(FlagComboName.RIGHT_SCROLL),
        getCore(FlagComboName.BARB_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //     |(     /||)   B V
    [
        getCore(FlagComboName.LEFT_BOATHOOK),
        getCore(FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //    ~|    )//||    C U
    [
        getCore(FlagComboName.DOUBLE_SCROLL),
        getCore(FlagComboName.DOUBLE_LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //    )|(    //||    D T
    [
        getCore(FlagComboName.LEFT_SCROLL_AND_BOATHOOK),
        getCore(FlagComboName.BOATHOOK_AND_BARB, Shafts.DOUBLE),
    ],                                                                      //   )~|      ~||\   E S
    [
        getCore(FlagComboName.BOATHOOK_AND_SCROLL),
        getCore(FlagComboName.ARC_AND_SCROLL, Shafts.DOUBLE),
    ],                                                                      //    ~|(     (||(   F R
    [
        getCore(FlagComboName.RIGHT_BOATHOOK),
        getCore(FlagComboName.BARB_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //     |~     /||~   G Q
    [
        getCore(FlagComboName.DOUBLE_LEFT_BOATHOOK),
        getCore(FlagComboName.BOATHOOK_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //   ~~|      ~||)   H P
    [
        getCore(FlagComboName.SCROLL_AND_BOATHOOK),
        getCore(FlagComboName.LEFT_ARC, Shafts.DOUBLE),
    ],                                                                      //    )|~     (||    I O
    [
        getCore(FlagComboName.LEFT_BARB),
        getCore(FlagComboName.RIGHT_BARB, Shafts.DOUBLE),
    ],                                                                      //    /|       ||\   J N
    [
        getCore(FlagComboName.LEFT_SCROLL_AND_BARB),
        getCore(FlagComboName.SCROLL_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //   )/|      )||)   K M
    [
        getCore(FlagComboName.RIGHT_ARC),
        getCore(FlagComboName.RIGHT_ARC, Shafts.DOUBLE),
    ],                                                                      //     |)      ||)   L L
    [
        getCore(FlagComboName.SCROLL_AND_ARC),
        getCore(FlagComboName.LEFT_SCROLL_AND_BARB, Shafts.DOUBLE),
    ],                                                                      //    )|)    )/||    M K
    [
        getCore(FlagComboName.RIGHT_BARB),
        getCore(FlagComboName.LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //     |\     /||    N J
    [
        getCore(FlagComboName.LEFT_ARC),
        getCore(FlagComboName.SCROLL_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    (|      )||~   O I
    [
        getCore(FlagComboName.BOATHOOK_AND_ARC),
        getCore(FlagComboName.DOUBLE_LEFT_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    ~|)    ~~||    P H
    [
        getCore(FlagComboName.BARB_AND_BOATHOOK),
        getCore(FlagComboName.RIGHT_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    /|~      ||~   Q G
    [
        getCore(FlagComboName.ARC_AND_SCROLL),
        getCore(FlagComboName.BOATHOOK_AND_SCROLL, Shafts.DOUBLE),
    ],                                                                      //    (|(     ~||(   R F
    [
        getCore(FlagComboName.BOATHOOK_AND_BARB),
        getCore(FlagComboName.LEFT_SCROLL_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    ~|\    )~||    S E
    [
        getCore(FlagComboName.DOUBLE_LEFT_BARB),
        getCore(FlagComboName.DOUBLE_SCROLL, Shafts.DOUBLE),
    ],                                                                      //   //|      )||(   T D
    [
        getCore(FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB),
        getCore(FlagComboName.LEFT_SCROLL_DOUBLE_RIGHT_BARB),
    ],                                                                      //  )//|       )|\\  U
    [
        getCore(FlagComboName.BARB_AND_ARC),
        getCore(FlagComboName.ARC_AND_BARB),
    ],                                                                      //    /|)      (|\   V
    [
        getCore(FlagComboName.ARC_AND_BOATHOOK),
        getCore(FlagComboName.DOUBLE_RIGHT_BARB),
    ],                                                                      //    (|~       |\\  W
    [
        getCore(FlagComboName.DOUBLE_BARB),
        getCore(FlagComboName.DOUBLE_ARC),
    ],                                                                      //    /|\      (|)   X
    [
        getCore(FlagComboName.LEFT_ARC_AND_BARB),
        getCore(FlagComboName.RIGHT_BARB_AND_ARC),
    ],                                                                      //   (/|        |\)  Y
    [
        getCore(FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB),
        getCore(FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB),
    ],                                                                      //   )/|\     )/|\   Z
    // Todo: FLACOMBO, SECTION, NOTATION GENERATION
    //  Wait, is apotome complementing really a Flacco-level operation???
    //  No. it aallllmost is, in the middle it is, but then at the fringes its not (viewing the PDF chart)
    //  The reason I was wondering, of course, was becuase this only works on BaseSymbols. well, it returns things
    //  Which AREN'T base symbols possibly, since some things in here are 2-shafts.
    //  I don't like the idea of supporting things outside the 0-1 apotome range, though. perhaps it should just throw
    //  An error if given one in the -2, -1, or 2 apotome section.
    //  - And I just keep thinking this over and over, how apotome complementing and apotome shifting both work best
    //  With symbols in the section which is positive and w/in 1 apotome of natural. but I prefer for the concept of
    //  "Section" to be specific to Accidental, not to Symbol, because as soon as it applies to symbol then things get
    //  A little confusing w/ Evo because you can have an Accidental in one section whose symbol is in another section..
    //  But again I don't think we want types to have "convenience" properties, things which can be unambiguously
    //  Computed based on stuff that's already there. They should be the absolute minimum representation of the info
    //  So how about add a method which just tells you whether the symbol is in the first section? section U1?
]

const computeApotomeComplement = (symbol: Symbol): Symbol => {
    if (isUndefined(symbol.core)) {
        return {core: getCore(FlagComboName.DOUBLE_BARB, Shafts.DOUBLE)}
    }

    let apotomeComplementCore: Maybe<Core> = undefined

    APOTOME_COMPLEMENT_CORE_PAIRS.forEach(
        ([complementCoreA, complementCoreB]: [Core, Core]): void => {
            if (deepEquals(symbol.core, complementCoreA)) apotomeComplementCore = complementCoreB
            if (deepEquals(symbol.core, complementCoreB)) apotomeComplementCore = complementCoreA
        },
    )

    if (isUndefined(apotomeComplementCore)) {
        throw new Error(`Tried to compute apotome complement for symbol whose core is outside the 1st apotome section ${stringify(symbol)}`)
    }

    if (!isUndefined(symbol.arm)) {
        return {
            arm: symbol.arm.map(reorientAccent),
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
