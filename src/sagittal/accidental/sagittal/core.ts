import {getHead, HeadId} from "../flacco"
import {areShaftsEven} from "./shafts"
import {Core, Shafts} from "./types"

// I had thought it might be a cool idea to define this in terms of taking the apotome complement of the 2-shaft symbol
// And verifying that it exists that way, however, it led to an infinite loop because apotome complement uses getCore
const HEADS_SUPPORTED_WITH_EVEN_SHAFTS = [
    // Lower than )||( is covered by )/|\ through )|\\

    HeadId.DOUBLE_SCROLL,                           //   )||(
    HeadId.LEFT_SCROLL_AND_BOATHOOK,                //  )~||
    HeadId.BOATHOOK_AND_SCROLL,                     //   ~||(
    HeadId.RIGHT_BOATHOOK,                          //    ||~
    HeadId.DOUBLE_LEFT_BOATHOOK,                    //  ~~||
    HeadId.SCROLL_AND_BOATHOOK,                     //   )||~
    HeadId.LEFT_BARB,                               //   /||
    HeadId.LEFT_SCROLL_AND_BARB,                    //  )/||
    HeadId.RIGHT_ARC,                               //    ||)
    HeadId.SCROLL_AND_ARC,                          //   )||)
    HeadId.RIGHT_BARB,                              //    ||\
    HeadId.LEFT_ARC,                                //   (||
    HeadId.BOATHOOK_AND_ARC,                        //   ~||)
    HeadId.BARB_AND_BOATHOOK,                       //   /||~
    HeadId.ARC_AND_SCROLL,                          //   (||(
    HeadId.BOATHOOK_AND_BARB,                       //   ~||\
    HeadId.DOUBLE_LEFT_BARB,                        //  //||
    HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB,            // )//||
    HeadId.BARB_AND_ARC,                            //   /||)
    HeadId.ARC_AND_BOATHOOK,                        //   (||~
    HeadId.DOUBLE_BARB,                             //   /||\

    // Above /||\ and you're already into triple shafts; no need for (/|| or beyond
]

const getCore = (
    headId: HeadId,
    {shafts = Shafts.SINGLE, down = false}: {shafts?: Shafts, down?: boolean} = {},
): Core => {
    if (areShaftsEven(shafts) && !HEADS_SUPPORTED_WITH_EVEN_SHAFTS.includes(headId)) {
        throw new Error(`A core with flag combo ${headId} does not exist for even shaft counts.`)
    }

    if (headId === HeadId.BARE_SHAFT && shafts !== Shafts.SINGLE) {
        throw new Error(`Cannot have multiple bare shafts.`)
    }

    return down ? {down, shafts, ...getHead(headId)} : {shafts, ...getHead(headId)}
}

const APOTOME_CORE = getCore(HeadId.DOUBLE_BARB, {shafts: Shafts.DOUBLE})

export {
    getCore,
    APOTOME_CORE,
}
