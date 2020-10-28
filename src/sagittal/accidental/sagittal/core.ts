import {getHead, HeadId} from "../flacco"
import {Aim, Core, Shafts} from "./types"

// TODO: SYMBOL VS SAGITTAL; GLYPH TYPES
//  If this "core" goes the way of being more related to io/glyph stuff only, in the symbol class refactor
//  Then maybe it will still make sense to have this const. But if there's some way to base this off the information
//  We've already established w/r/t apotome complements, that would be ideal
//  Perhaps something similar to what we do in computing Evo accidental... temporarily getting the apotome complement
//  And making a decision based on it but not necessarily keeping it / using it / returning it, you know
//  Well and if it's the same condition based on the apotome complement then maybe that speaks to a shared helper method
const HEADS_SUPPORTED_WITH_EVEN_SHAFTS = [
    HeadId.LEFT_BARB,                               //   /|
    HeadId.RIGHT_ARC,                               //    |)
    HeadId.DOUBLE_LEFT_BARB,                        //  //|
    HeadId.BARB_AND_ARC,                            //   /|)
    HeadId.DOUBLE_BARB,                             //   /|\
    HeadId.DOUBLE_SCROLL,                           //   )|(
    HeadId.BOATHOOK_AND_SCROLL,                     //   ~|(
    HeadId.RIGHT_BARB,                              //    |\
    HeadId.LEFT_ARC,                                //   (|
    HeadId.ARC_AND_SCROLL,                          //   (|(
    HeadId.RIGHT_BOATHOOK,                          //    |~
    HeadId.LEFT_SCROLL_AND_BARB,                    //  )/|
    HeadId.BARB_AND_BOATHOOK,                       //   /|~
    HeadId.LEFT_SCROLL_AND_BOATHOOK,                //  )~|
    HeadId.DOUBLE_LEFT_BOATHOOK,                    //  ~~|
    HeadId.SCROLL_AND_BOATHOOK,                     //   )|~
    HeadId.SCROLL_AND_ARC,                          //   )|)
    HeadId.BOATHOOK_AND_ARC,                        //   ~|)
    HeadId.BOATHOOK_AND_BARB,                       //   ~|\
    HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB,            // )//|
    HeadId.ARC_AND_BOATHOOK,                        //   (|~
]

const getCore = (headName: HeadId, shafts: Shafts = Shafts.SINGLE, aim: Aim = Aim.UP): Core => {
    if (
        (shafts === Shafts.DOUBLE || shafts === Shafts.EX)
        && !HEADS_SUPPORTED_WITH_EVEN_SHAFTS.includes(headName)
    ) {
        throw new Error(`A core with flag combo ${headName} does not exist for even shaft counts.`)
    }

    if (headName === HeadId.BARE_SHAFT && shafts !== Shafts.SINGLE) {
        throw new Error(`Cannot have multiple bare shafts.`)
    }

    return { aim, shafts, ...getHead(headName) }
}

export {
    getCore,
}
