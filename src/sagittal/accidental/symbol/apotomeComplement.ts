// tslint:disable max-line-length

import {deepEquals, isUndefined, Maybe, stringify} from "../../../general"
import {flipGlyph} from "./flip"
import {CORE_GLYPHS} from "./glyphs"
import {CoreName, Glyph, GlyphType, Symbol} from "./types"

const APOTOME_COMPLEMENT_PAIRS: Array<[Glyph<GlyphType.CORE>, Glyph<GlyphType.CORE>]> = [
    [CORE_GLYPHS[CoreName.BARE_SHAFT_UP], CORE_GLYPHS[CoreName.DOUBLE_BARB_DOUBLE_UP]],                             //     |      /||\
    [CORE_GLYPHS[CoreName.LEFT_SCROLL_UP], CORE_GLYPHS[CoreName.ARC_AND_BOATHOOK_DOUBLE_UP]],                       //    )|      (||~   A W
    [CORE_GLYPHS[CoreName.RIGHT_SCROLL_UP], CORE_GLYPHS[CoreName.BARB_AND_ARC_DOUBLE_UP]],                          //     |(     /||)   B V
    [CORE_GLYPHS[CoreName.LEFT_BOATHOOK_UP], CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_UP]],         //    ~|    )//||    C U
    [CORE_GLYPHS[CoreName.DOUBLE_SCROLL_UP], CORE_GLYPHS[CoreName.DOUBLE_LEFT_BARB_DOUBLE_UP]],                     //    )|(    //||    D T
    [CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BOATHOOK_UP], CORE_GLYPHS[CoreName.BOATHOOK_AND_BARB_DOUBLE_UP]],         //   )~|      ~||\   E S
    [CORE_GLYPHS[CoreName.BOATHOOK_AND_SCROLL_UP], CORE_GLYPHS[CoreName.ARC_AND_SCROLL_DOUBLE_UP]],                 //    ~|(     (||(   F R
    [CORE_GLYPHS[CoreName.RIGHT_BOATHOOK_UP], CORE_GLYPHS[CoreName.BARB_AND_BOATHOOK_DOUBLE_UP]],                   //     |~     /||~   G Q
    [CORE_GLYPHS[CoreName.DOUBLE_LEFT_BOATHOOK_UP], CORE_GLYPHS[CoreName.BOATHOOK_AND_ARC_DOUBLE_UP]],              //   ~~|      ~||)   H P
    [CORE_GLYPHS[CoreName.SCROLL_AND_BOATHOOK_UP], CORE_GLYPHS[CoreName.LEFT_ARC_DOUBLE_UP]],                       //    )|~     (||    I O
    [CORE_GLYPHS[CoreName.LEFT_BARB_UP], CORE_GLYPHS[CoreName.RIGHT_BARB_DOUBLE_UP]],                               //    /|       ||\   J N
    [CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_UP], CORE_GLYPHS[CoreName.SCROLL_AND_ARC_DOUBLE_UP]],                //   )/|      )||)   K M
    [CORE_GLYPHS[CoreName.RIGHT_ARC_UP], CORE_GLYPHS[CoreName.RIGHT_ARC_DOUBLE_UP]],                                //     |)      ||)   L L
    [CORE_GLYPHS[CoreName.SCROLL_AND_ARC_UP], CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_DOUBLE_UP]],                //    )|)    )/||    M K
    [CORE_GLYPHS[CoreName.RIGHT_BARB_UP], CORE_GLYPHS[CoreName.LEFT_BARB_DOUBLE_UP]],                               //     |\     /||    N J
    [CORE_GLYPHS[CoreName.LEFT_ARC_UP], CORE_GLYPHS[CoreName.SCROLL_AND_BOATHOOK_DOUBLE_UP]],                       //    (|      )||~   O I
    [CORE_GLYPHS[CoreName.BOATHOOK_AND_ARC_UP], CORE_GLYPHS[CoreName.DOUBLE_LEFT_BOATHOOK_DOUBLE_UP]],              //    ~|)    ~~||    P H
    [CORE_GLYPHS[CoreName.BARB_AND_BOATHOOK_UP], CORE_GLYPHS[CoreName.RIGHT_BOATHOOK_DOUBLE_UP]],                   //    /|~      ||~   Q G
    [CORE_GLYPHS[CoreName.ARC_AND_SCROLL_UP], CORE_GLYPHS[CoreName.BOATHOOK_AND_SCROLL_DOUBLE_UP]],                 //    (|(     ~||(   R F
    [CORE_GLYPHS[CoreName.BOATHOOK_AND_BARB_UP], CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_UP]],         //    ~|\    )~||    S E
    [CORE_GLYPHS[CoreName.DOUBLE_LEFT_BARB_UP], CORE_GLYPHS[CoreName.DOUBLE_SCROLL_DOUBLE_UP]],                     //   //|      )||(   T D
    [CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_UP], CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_UP]], //  )//|       )|\\  U
    [CORE_GLYPHS[CoreName.BARB_AND_ARC_UP], CORE_GLYPHS[CoreName.ARC_AND_BARB_UP]],                                 //    /|)      (|\   V
    [CORE_GLYPHS[CoreName.ARC_AND_BOATHOOK_UP], CORE_GLYPHS[CoreName.DOUBLE_RIGHT_BARB_UP]],                        //    (|~       |\\  W
    [CORE_GLYPHS[CoreName.DOUBLE_BARB_UP], CORE_GLYPHS[CoreName.DOUBLE_ARC_UP]],                                    //    /|\      (|)   X
    [CORE_GLYPHS[CoreName.LEFT_ARC_AND_BARB_UP], CORE_GLYPHS[CoreName.RIGHT_BARB_AND_ARC_UP]],                      //   (/|        |\)  Y
    [CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_UP], CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_UP]],   //   )/|\     )/|\   Z
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
        return {core: CORE_GLYPHS[CoreName.DOUBLE_BARB_DOUBLE_UP]}
    }

    let apotomeComplementCore: Maybe<Glyph> = undefined

    APOTOME_COMPLEMENT_PAIRS.forEach(
        ([complementGlyphA, complementGlyphB]: [Glyph<GlyphType.CORE>, Glyph<GlyphType.CORE>]): void => {
            if (deepEquals(symbol.core, complementGlyphA)) apotomeComplementCore = complementGlyphB
            if (deepEquals(symbol.core, complementGlyphB)) apotomeComplementCore = complementGlyphA
        },
    )

    if (isUndefined(apotomeComplementCore)) {
        throw new Error(`Tried to compute apotome complement for symbol whose core is outside the 1st apotome section ${stringify(symbol.core)}`)
    }

    if (!isUndefined(symbol.accents)) {
        const flippedAccents = symbol.accents.map(flipGlyph)

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
