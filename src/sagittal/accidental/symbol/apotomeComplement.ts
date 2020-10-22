// tslint:disable max-line-length

import {deepEquals, isUndefined, Maybe, stringify} from "../../../general"
import {Accent} from "../flacco"
import {CORES} from "./cores"
import {Core, CoreName, Symbol} from "./types"

const reorientAccent = (accent: Accent): Accent => {
    switch (accent) {
        case Accent.TICK_WITH:
            return Accent.TICK_AGAINST
        case Accent.TICK_AGAINST:
            return Accent.TICK_WITH
        case Accent.WING_WITH:
            return Accent.WING_AGAINST
        case Accent.WING_AGAINST:
            return Accent.WING_WITH
        case Accent.BIRD_WITH:
            return Accent.BIRD_AGAINST
        case Accent.BIRD_AGAINST:
            return Accent.BIRD_WITH
    }
}

const APOTOME_COMPLEMENT_PAIRS: Array<[Core, Core]> = [
    [CORES[CoreName.BARE_SHAFT_UP], CORES[CoreName.DOUBLE_BARB_DOUBLE_UP]],                             //     |      /||\
    [CORES[CoreName.LEFT_SCROLL_UP], CORES[CoreName.ARC_AND_BOATHOOK_DOUBLE_UP]],                       //    )|      (||~   A W
    [CORES[CoreName.RIGHT_SCROLL_UP], CORES[CoreName.BARB_AND_ARC_DOUBLE_UP]],                          //     |(     /||)   B V
    [CORES[CoreName.LEFT_BOATHOOK_UP], CORES[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_UP]],         //    ~|    )//||    C U
    [CORES[CoreName.DOUBLE_SCROLL_UP], CORES[CoreName.DOUBLE_LEFT_BARB_DOUBLE_UP]],                     //    )|(    //||    D T
    [CORES[CoreName.LEFT_SCROLL_AND_BOATHOOK_UP], CORES[CoreName.BOATHOOK_AND_BARB_DOUBLE_UP]],         //   )~|      ~||\   E S
    [CORES[CoreName.BOATHOOK_AND_SCROLL_UP], CORES[CoreName.ARC_AND_SCROLL_DOUBLE_UP]],                 //    ~|(     (||(   F R
    [CORES[CoreName.RIGHT_BOATHOOK_UP], CORES[CoreName.BARB_AND_BOATHOOK_DOUBLE_UP]],                   //     |~     /||~   G Q
    [CORES[CoreName.DOUBLE_LEFT_BOATHOOK_UP], CORES[CoreName.BOATHOOK_AND_ARC_DOUBLE_UP]],              //   ~~|      ~||)   H P
    [CORES[CoreName.SCROLL_AND_BOATHOOK_UP], CORES[CoreName.LEFT_ARC_DOUBLE_UP]],                       //    )|~     (||    I O
    [CORES[CoreName.LEFT_BARB_UP], CORES[CoreName.RIGHT_BARB_DOUBLE_UP]],                               //    /|       ||\   J N
    [CORES[CoreName.LEFT_SCROLL_AND_BARB_UP], CORES[CoreName.SCROLL_AND_ARC_DOUBLE_UP]],                //   )/|      )||)   K M
    [CORES[CoreName.RIGHT_ARC_UP], CORES[CoreName.RIGHT_ARC_DOUBLE_UP]],                                //     |)      ||)   L L
    [CORES[CoreName.SCROLL_AND_ARC_UP], CORES[CoreName.LEFT_SCROLL_AND_BARB_DOUBLE_UP]],                //    )|)    )/||    M K
    [CORES[CoreName.RIGHT_BARB_UP], CORES[CoreName.LEFT_BARB_DOUBLE_UP]],                               //     |\     /||    N J
    [CORES[CoreName.LEFT_ARC_UP], CORES[CoreName.SCROLL_AND_BOATHOOK_DOUBLE_UP]],                       //    (|      )||~   O I
    [CORES[CoreName.BOATHOOK_AND_ARC_UP], CORES[CoreName.DOUBLE_LEFT_BOATHOOK_DOUBLE_UP]],              //    ~|)    ~~||    P H
    [CORES[CoreName.BARB_AND_BOATHOOK_UP], CORES[CoreName.RIGHT_BOATHOOK_DOUBLE_UP]],                   //    /|~      ||~   Q G
    [CORES[CoreName.ARC_AND_SCROLL_UP], CORES[CoreName.BOATHOOK_AND_SCROLL_DOUBLE_UP]],                 //    (|(     ~||(   R F
    [CORES[CoreName.BOATHOOK_AND_BARB_UP], CORES[CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_UP]],         //    ~|\    )~||    S E
    [CORES[CoreName.DOUBLE_LEFT_BARB_UP], CORES[CoreName.DOUBLE_SCROLL_DOUBLE_UP]],                     //   //|      )||(   T D
    [CORES[CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_UP], CORES[CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_UP]], //  )//|       )|\\  U
    [CORES[CoreName.BARB_AND_ARC_UP], CORES[CoreName.ARC_AND_BARB_UP]],                                 //    /|)      (|\   V
    [CORES[CoreName.ARC_AND_BOATHOOK_UP], CORES[CoreName.DOUBLE_RIGHT_BARB_UP]],                        //    (|~       |\\  W
    [CORES[CoreName.DOUBLE_BARB_UP], CORES[CoreName.DOUBLE_ARC_UP]],                                    //    /|\      (|)   X
    [CORES[CoreName.LEFT_ARC_AND_BARB_UP], CORES[CoreName.RIGHT_BARB_AND_ARC_UP]],                      //   (/|        |\)  Y
    [CORES[CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_UP], CORES[CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_UP]],   //   )/|\     )/|\   Z
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
        return { core: CORES[CoreName.DOUBLE_BARB_DOUBLE_UP] }
    }

    let apotomeComplementCore: Maybe<Core> = undefined

    APOTOME_COMPLEMENT_PAIRS.forEach(
        ([complementCoreA, complementCoreB]: [Core, Core]): void => {
            if (deepEquals(symbol.core, complementCoreA)) apotomeComplementCore = complementCoreB
            if (deepEquals(symbol.core, complementCoreB)) apotomeComplementCore = complementCoreA
        },
    )

    if (isUndefined(apotomeComplementCore)) {
        throw new Error(`Tried to compute apotome complement for symbol whose core is outside the 1st apotome section ${stringify(symbol)}`)
    }

    if (!isUndefined(symbol.accents)) {
        const flippedAccents = symbol.accents.map(reorientAccent)

        return {
            accents: flippedAccents,
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
