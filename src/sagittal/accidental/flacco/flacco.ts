import {getArm} from "./arm"
import {getHead} from "./head"
import {ArmId, Flacco, FlaccoId, HeadId} from "./types"

const FLACCOS: Record<FlaccoId, Flacco> = {
    /*0*/[FlaccoId.NULL]: {},                                         //  (|//|)
    /*1*/[FlaccoId.WING]: {                                           //     `|
        arm: getArm(ArmId.WING),
    },
    /*2*/[FlaccoId.BIRD]: {                                           //    ``|
        arm: getArm(ArmId.BIRD),
    },
    /*3*/[FlaccoId.TICK_AGAINST_LEFT_SCROLL]: {                       //    .)|
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.LEFT_SCROLL),
    },
    /*4*/[FlaccoId.TICK]: {                                           //     '|
        arm: getArm(ArmId.TICK),
    },
    /*5*/[FlaccoId.WING_AND_TICK]: {                                  //    `'|
        arm: getArm(ArmId.WING_AND_TICK),
    },
    /*6*/[FlaccoId.WING_AGAINST_LEFT_SCROLL]: {                       //    ,)|
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.LEFT_SCROLL),
    },
    /*7*/[FlaccoId.LEFT_SCROLL]: {                                    //     )|
        ...getHead(HeadId.LEFT_SCROLL),
    },
    /*8*/[FlaccoId.WING_AND_LEFT_SCROLL]: {                           //    `)|
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.LEFT_SCROLL),
    },
    /*9*/[FlaccoId.BIRD_AND_LEFT_SCROLL]: {                           //   ``)|
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.LEFT_SCROLL),
    },
    /*10*/[FlaccoId.BIRD_AGAINST_RIGHT_SCROLL]: {                     //    ,,|(
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.RIGHT_SCROLL),
    },
    /*11*/[FlaccoId.WING_AGAINST_RIGHT_SCROLL]: {                     //     ,|(
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.RIGHT_SCROLL),
    },
    /*12*/[FlaccoId.RIGHT_SCROLL]: {                                  //      |(
        ...getHead(HeadId.RIGHT_SCROLL),
    },
    /*13*/[FlaccoId.WING_AND_RIGHT_SCROLL]: {                         //     `|(
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.RIGHT_SCROLL),
    },
    /*14*/[FlaccoId.TICK_AGAINST_LEFT_BOATHOOK]: {                    //    .~|
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.LEFT_BOATHOOK),
    },
    /*15*/[FlaccoId.WING_AGAINST_TICK_AND_RIGHT_SCROLL]: {            //    ,'|(
        arm: getArm(ArmId.WING_AGAINST_TICK),
        ...getHead(HeadId.RIGHT_SCROLL),
    },
    /*16*/[FlaccoId.TICK_AND_RIGHT_SCROLL]: {                         //     '|(
        arm: getArm(ArmId.TICK),
        ...getHead(HeadId.RIGHT_SCROLL),
    },
    /*17*/[FlaccoId.WING_AGAINST_LEFT_BOATHOOK]: {                    //    ,~|
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.LEFT_BOATHOOK),
    },
    /*18*/[FlaccoId.LEFT_BOATHOOK]: {                                 //     ~|
        ...getHead(HeadId.LEFT_BOATHOOK),
    },
    /*19*/[FlaccoId.WING_AGAINST_DOUBLE_SCROLL]: {                    //    ,)|(
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.DOUBLE_SCROLL),
    },
    /*20*/[FlaccoId.DOUBLE_SCROLL]: {                                 //     )|(
        ...getHead(HeadId.DOUBLE_SCROLL),
    },
    /*21*/[FlaccoId.WING_AND_DOUBLE_SCROLL]: {                        //    `)|(
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.DOUBLE_SCROLL),
    },
    /*22*/[FlaccoId.BIRD_AND_DOUBLE_SCROLL]: {                        //   ``)|(
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.DOUBLE_SCROLL),
    },
    /*23*/[FlaccoId.WING_AGAINST_TICK_AND_DOUBLE_SCROLL]: {           //   ,')|(
        arm: getArm(ArmId.WING_AGAINST_TICK),
        ...getHead(HeadId.DOUBLE_SCROLL),
    },
    /*24*/[FlaccoId.TICK_AND_DOUBLE_SCROLL]: {                        //    ')|(
        arm: getArm(ArmId.TICK),
        ...getHead(HeadId.DOUBLE_SCROLL),
    },
    /*25*/[FlaccoId.LEFT_SCROLL_AND_BOATHOOK]: {                      //    )~|
        ...getHead(HeadId.LEFT_SCROLL_AND_BOATHOOK),
    },
    /*26*/[FlaccoId.TICK_AGAINST_BOATHOOK_AND_SCROLL]: {              //    .~|(
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.BOATHOOK_AND_SCROLL),
    },
    /*27*/[FlaccoId.WING_AGAINST_TICK_AGAINST_BOATHOOK_AND_SCROLL]: { //   `.~|(
        arm: getArm(ArmId.WING_AGAINST_TICK, { against: true }),
        ...getHead(HeadId.BOATHOOK_AND_SCROLL),
    },
    /*28*/[FlaccoId.BIRD_AGAINST_BOATHOOK_AND_SCROLL]: {              //   ,,~|(
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.BOATHOOK_AND_SCROLL),
    },
    /*29*/[FlaccoId.WING_AGAINST_BOATHOOK_AND_SCROLL]: {              //    ,~|(
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.BOATHOOK_AND_SCROLL),
    },
    /*30*/[FlaccoId.BOATHOOK_AND_SCROLL]: {                           //     ~|(
        ...getHead(HeadId.BOATHOOK_AND_SCROLL),
    },
    /*31*/[FlaccoId.WING_BOATHOOK_AND_SCROLL]: {                      //    `~|(
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.BOATHOOK_AND_SCROLL),
    },
    /*32*/[FlaccoId.BIRD_AGAINST_RIGHT_BOATHOOK]: {                   //    ,,|~
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.RIGHT_BOATHOOK),
    },
    /*33*/[FlaccoId.WING_AGAINST_RIGHT_BOATHOOK]: {                   //     ,|~
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.RIGHT_BOATHOOK),
    },
    /*34*/[FlaccoId.RIGHT_BOATHOOK]: {                                //      |~
        ...getHead(HeadId.RIGHT_BOATHOOK),
    },
    /*35*/[FlaccoId.WING_AND_RIGHT_BOATHOOK]: {                       //     `|~
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.RIGHT_BOATHOOK),
    },
    /*36*/[FlaccoId.DOUBLE_LEFT_BOATHOOK]: {                          //    ~~|
        ...getHead(HeadId.DOUBLE_LEFT_BOATHOOK),
    },
    /*37*/[FlaccoId.WING_AND_DOUBLE_LEFT_BOATHOOK]: {                 //   `~~|
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.DOUBLE_LEFT_BOATHOOK),
    },
    /*38*/[FlaccoId.BIRD_AND_DOUBLE_LEFT_BOATHOOK]: {                 //  ``~~|
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.DOUBLE_LEFT_BOATHOOK),
    },
    /*39*/[FlaccoId.WING_AND_TICK_AGAINST_LEFT_BARB]: {               //   ,./|
        arm: getArm(ArmId.WING_AND_TICK, { against: true }),
        ...getHead(HeadId.LEFT_BARB),
    },
    /*40*/[FlaccoId.TICK_AGAINST_LEFT_BARB]: {                        //    ./|
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.LEFT_BARB),
    },
    /*41*/[FlaccoId.SCROLL_AND_BOATHOOK]: {                           //     )|~
        ...getHead(HeadId.SCROLL_AND_BOATHOOK),
    },
    /*42*/[FlaccoId.BIRD_AGAINST_LEFT_BARB]: {                        //   ,,/|
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.LEFT_BARB),
    },
    /*43*/[FlaccoId.WING_AGAINST_LEFT_BARB]: {                        //    ,/|
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.LEFT_BARB),
    },
    /*44*/[FlaccoId.LEFT_BARB]: {                                     //     /|
        ...getHead(HeadId.LEFT_BARB),
    },
    /*45*/[FlaccoId.WING_AND_LEFT_BARB]: {                            //    `/|
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.LEFT_BARB),
    },
    /*46*/[FlaccoId.BIRD_AND_LEFT_BARB]: {                            //   ``/|
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.LEFT_BARB),
    },
    /*47*/[FlaccoId.TICK_AGAINST_LEFT_SCROLL_AND_BARB]: {             //   .)/|
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.LEFT_SCROLL_AND_BARB),
    },
    /*48*/[FlaccoId.TICK_AND_LEFT_BARB]: {                            //    '/|
        arm: getArm(ArmId.TICK),
        ...getHead(HeadId.LEFT_BARB),
    },
    /*49*/[FlaccoId.WING_TICK_AND_LEFT_BARB]: {                       //   `'/|
        arm: getArm(ArmId.WING_AND_TICK),
        ...getHead(HeadId.LEFT_BARB),
    },
    /*50*/[FlaccoId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB]: {             //  ,,)/|
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.LEFT_SCROLL_AND_BARB),
    },
    /*51*/[FlaccoId.WING_AGAINST_LEFT_SCROLL_AND_BARB]: {             //   ,)/|
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.LEFT_SCROLL_AND_BARB),
    },
    /*52*/[FlaccoId.LEFT_SCROLL_AND_BARB]: {                          //    )/|
        ...getHead(HeadId.LEFT_SCROLL_AND_BARB),
    },
    /*53*/[FlaccoId.WING_AND_TICK_AGAINST_RIGHT_ARC]: {               //    ,.|)
        arm: getArm(ArmId.WING_AND_TICK, { against: true }),
        ...getHead(HeadId.RIGHT_ARC),
    },
    /*54*/[FlaccoId.TICK_AGAINST_RIGHT_ARC]: {                        //     .|)
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.RIGHT_ARC),
    },
    /*55*/[FlaccoId.WING_AGAINST_TICK_AGAINST_RIGHT_ARC]: {           //    `.|)
        arm: getArm(ArmId.WING_AGAINST_TICK, { against: true }),
        ...getHead(HeadId.RIGHT_ARC),
    },
    /*56*/[FlaccoId.BIRD_AGAINST_RIGHT_ARC]: {                        //    ,,|)
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.RIGHT_ARC),
    },
    /*57*/[FlaccoId.WING_AGAINST_RIGHT_ARC]: {                        //     ,|)
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.RIGHT_ARC),
    },
    /*58*/[FlaccoId.RIGHT_ARC]: {                                     //      |)
        ...getHead(HeadId.RIGHT_ARC),
    },
    /*59*/[FlaccoId.WING_AND_RIGHT_ARC]: {                            //     `|)
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.RIGHT_ARC),
    },
    /*60*/[FlaccoId.BIRD_AND_RIGHT_ARC]: {                            //    ``|)
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.RIGHT_ARC),
    },
    /*61*/[FlaccoId.WING_AGAINST_TICK_AND_RIGHT_ARC]: {               //    ,'|)
        arm: getArm(ArmId.WING_AGAINST_TICK),
        ...getHead(HeadId.RIGHT_ARC),
    },
    /*62*/[FlaccoId.TICK_AND_RIGHT_ARC]: {                            //     '|)
        arm: getArm(ArmId.TICK),
        ...getHead(HeadId.RIGHT_ARC),
    },
    /*63*/[FlaccoId.WING_TICK_AND_RIGHT_ARC]: {                       //    `'|)
        arm: getArm(ArmId.WING_AND_TICK),
        ...getHead(HeadId.RIGHT_ARC),
    },
    /*64*/[FlaccoId.WING_AGAINST_SCROLL_AND_ARC]: {                   //    ,)|)
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.SCROLL_AND_ARC),
    },
    /*65*/[FlaccoId.SCROLL_AND_ARC]: {                                //     )|)
        ...getHead(HeadId.SCROLL_AND_ARC),
    },
    /*66*/[FlaccoId.TICK_AGAINST_LEFT_ARC]: {                         //    .(|
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.LEFT_ARC),
    },
    /*67*/[FlaccoId.RIGHT_BARB]: {                                    //      |\
        ...getHead(HeadId.RIGHT_BARB),
    },
    /*68*/[FlaccoId.WING_AND_RIGHT_BARB]: {                           //     `|\
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.RIGHT_BARB),
    },
    /*69*/[FlaccoId.WING_AGAINST_LEFT_ARC]: {                         //    ,(|
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.LEFT_ARC),
    },
    /*70*/[FlaccoId.LEFT_ARC]: {                                      //     (|
        ...getHead(HeadId.LEFT_ARC),
    },
    /*71*/[FlaccoId.WING_AND_LEFT_ARC]: {                             //    `(|
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.LEFT_ARC),
    },
    /*72*/[FlaccoId.BIRD_AND_LEFT_ARC]: {                             //   ``(|
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.LEFT_ARC),
    },
    /*73*/[FlaccoId.WING_AGAINST_TICK_AND_LEFT_ARC]: {                //   ,'(|
        arm: getArm(ArmId.WING_AGAINST_TICK),
        ...getHead(HeadId.LEFT_ARC),
    },
    /*74*/[FlaccoId.TICK_AND_LEFT_ARC]: {                             //    '(|
        arm: getArm(ArmId.TICK),
        ...getHead(HeadId.LEFT_ARC),
    },
    /*75*/[FlaccoId.WING_AGAINST_BOATHOOK_AND_ARC]: {                 //    ,~|)
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.BOATHOOK_AND_ARC),
    },
    /*76*/[FlaccoId.BOATHOOK_AND_ARC]: {                              //     ~|)
        ...getHead(HeadId.BOATHOOK_AND_ARC),
    },
    /*77*/[FlaccoId.WING_BOATHOOK_AND_ARC]: {                         //    `~|)
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.BOATHOOK_AND_ARC),
    },
    /*78*/[FlaccoId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL]: {          //   ,.(|(
        arm: getArm(ArmId.WING_AND_TICK, { against: true }),
        ...getHead(HeadId.ARC_AND_SCROLL),
    },
    /*79*/[FlaccoId.TICK_AGAINST_ARC_AND_SCROLL]: {                   //    .(|(
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.ARC_AND_SCROLL),
    },
    /*80*/[FlaccoId.TICK_BOATHOOK_AND_ARC]: {                         //    '~|)
        arm: getArm(ArmId.TICK),
        ...getHead(HeadId.BOATHOOK_AND_ARC),
    },
    /*81*/[FlaccoId.BARB_AND_BOATHOOK]: {                             //     /|~
        ...getHead(HeadId.BARB_AND_BOATHOOK),
    },
    /*82*/[FlaccoId.BIRD_AGAINST_ARC_AND_SCROLL]: {                   //   ,,(|(
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.ARC_AND_SCROLL),
    },
    /*83*/[FlaccoId.WING_AGAINST_ARC_AND_SCROLL]: {                   //    ,(|(
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.ARC_AND_SCROLL),
    },
    /*84*/[FlaccoId.ARC_AND_SCROLL]: {                                //     (|(
        ...getHead(HeadId.ARC_AND_SCROLL),
    },
    /*85*/[FlaccoId.WING_ARC_AND_SCROLL]: {                           //    `(|(
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.ARC_AND_SCROLL),
    },
    /*86*/[FlaccoId.BOATHOOK_AND_BARB]: {                             //     ~|\
        ...getHead(HeadId.BOATHOOK_AND_BARB),
    },
    /*87*/[FlaccoId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB]: {        //  ,.//|
        arm: getArm(ArmId.WING_AND_TICK, { against: true }),
        ...getHead(HeadId.DOUBLE_LEFT_BARB),
    },
    /*88*/[FlaccoId.TICK_AGAINST_DOUBLE_LEFT_BARB]: {                 //   .//|
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.DOUBLE_LEFT_BARB),
    },
    /*89*/[FlaccoId.WING_AGAINST_TICK_AGAINST_DOUBLE_LEFT_BARB]: {    //  `.//|
        arm: getArm(ArmId.WING_AGAINST_TICK, { against: true }),
        ...getHead(HeadId.DOUBLE_LEFT_BARB),
    },
    /*90*/[FlaccoId.BIRD_AGAINST_DOUBLE_LEFT_BARB]: {                 //  ,,//|
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.DOUBLE_LEFT_BARB),
    },
    /*91*/[FlaccoId.WING_AGAINST_DOUBLE_LEFT_BARB]: {                 //   ,//|
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.DOUBLE_LEFT_BARB),
    },
    /*92*/[FlaccoId.DOUBLE_LEFT_BARB]: {                              //    //|
        ...getHead(HeadId.DOUBLE_LEFT_BARB),
    },
    /*93*/[FlaccoId.WING_AND_DOUBLE_LEFT_BARB]: {                     //   `//|
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.DOUBLE_LEFT_BARB),
    },
    /*94*/[FlaccoId.BIRD_AND_DOUBLE_LEFT_BARB]: {                     //  ``//|
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.DOUBLE_LEFT_BARB),
    },
    /*95*/[FlaccoId.WING_AGAINST_TICK_AND_DOUBLE_LEFT_BARB]: {        //  ,'//|
        arm: getArm(ArmId.WING_AGAINST_TICK),
        ...getHead(HeadId.DOUBLE_LEFT_BARB),
    },
    /*96*/[FlaccoId.TICK_AND_DOUBLE_LEFT_BARB]: {                     //   '//|
        arm: getArm(ArmId.TICK),
        ...getHead(HeadId.DOUBLE_LEFT_BARB),
    },
    /*97*/[FlaccoId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {     // ,,)//|
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB),
    },
    /*98*/[FlaccoId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {     //  ,)//|
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB),
    },
    /*99*/[FlaccoId.LEFT_SCROLL_DOUBLE_LEFT_BARB]: {                  //   )//|
        ...getHead(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB),
    },
    /*100*/[FlaccoId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {        //  `)//|
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB),
    },
    /*101*/[FlaccoId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {        // ``)//|
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB),
    },
    /*102*/[FlaccoId.BIRD_AGAINST_BARB_AND_ARC]: {                    //   ,,/|)
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.BARB_AND_ARC),
    },
    /*103*/[FlaccoId.WING_AGAINST_BARB_AND_ARC]: {                    //    ,/|)
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.BARB_AND_ARC),
    },
    /*104*/[FlaccoId.BARB_AND_ARC]: {                                 //     /|)
        ...getHead(HeadId.BARB_AND_ARC),
    },
    /*105*/[FlaccoId.WING_BARB_AND_ARC]: {                            //    `/|)
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.BARB_AND_ARC),
    },
    /*106*/[FlaccoId.ARC_AND_BOATHOOK]: {                             //     (|~
        ...getHead(HeadId.ARC_AND_BOATHOOK),
    },
    /*107*/[FlaccoId.WING_AGAINST_TICK_BARB_AND_ARC]: {               //   ,'/|)
        arm: getArm(ArmId.WING_AGAINST_TICK),
        ...getHead(HeadId.BARB_AND_ARC),
    },
    /*108*/[FlaccoId.TICK_BARB_AND_ARC]: {                            //    '/|)
        arm: getArm(ArmId.TICK),
        ...getHead(HeadId.BARB_AND_ARC),
    },
    /*109*/[FlaccoId.WING_TICK_BARB_AND_ARC]: {                       //   `'/|)
        arm: getArm(ArmId.WING_AND_TICK),
        ...getHead(HeadId.BARB_AND_ARC),
    },
    /*110*/[FlaccoId.TICK_AGAINST_DOUBLE_BARB]: {                     //    ./|\
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.DOUBLE_BARB),
    },
    /*111*/[FlaccoId.WING_AGAINST_TICK_AGAINST_DOUBLE_BARB]: {        //   `./|\
        arm: getArm(ArmId.WING_AGAINST_TICK, { against: true }),
        ...getHead(HeadId.DOUBLE_BARB),
    },
    /*112*/[FlaccoId.BIRD_AGAINST_DOUBLE_BARB]: {                     //   ,,/|\
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.DOUBLE_BARB),
    },
    /*113*/[FlaccoId.WING_AGAINST_DOUBLE_BARB]: {                     //    ,/|\
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.DOUBLE_BARB),
    },
    /*114*/[FlaccoId.DOUBLE_BARB]: {                                  //     /|\
        ...getHead(HeadId.DOUBLE_BARB),
    },
    /*115*/[FlaccoId.WING_AND_DOUBLE_BARB]: {                         //    `/|\
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.DOUBLE_BARB),
    },
    /*116*/[FlaccoId.WING_AGAINST_LEFT_ARC_AND_BARB]: {               //   ,(/|
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.LEFT_ARC_AND_BARB),
    },
    /*117*/[FlaccoId.LEFT_ARC_AND_BARB]: {                            //    (/|
        ...getHead(HeadId.LEFT_ARC_AND_BARB),
    },
    /*118*/[FlaccoId.WING_AND_LEFT_ARC_AND_BARB]: {                   //   `(/|
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.LEFT_ARC_AND_BARB),
    },
    /*119*/[FlaccoId.TICK_AND_DOUBLE_BARB]: {                         //    '/|\
        arm: getArm(ArmId.TICK),
        ...getHead(HeadId.DOUBLE_BARB),
    },
    /*120*/[FlaccoId.WING_TICK_AND_DOUBLE_BARB]: {                    //   `'/|\
        arm: getArm(ArmId.WING_AND_TICK),
        ...getHead(HeadId.DOUBLE_BARB),
    },
    /*121*/[FlaccoId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB]: {     //   ,)/|\
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB),
    },
    /*122*/[FlaccoId.LEFT_SCROLL_AND_DOUBLE_BARB]: {                  //    )/|\
        ...getHead(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB),
    },
    /*123*/[FlaccoId.WING_LEFT_SCROLL_AND_DOUBLE_BARB]: {             //   `)/|\
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB),
    },
    /*124*/[FlaccoId.BIRD_LEFT_SCROLL_AND_DOUBLE_BARB]: {             //  ``)/|\
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB),
    },
    /*125*/[FlaccoId.WING_AND_TICK_AGAINST_DOUBLE_ARC]: {             //   ,.(|)
        arm: getArm(ArmId.WING_AND_TICK, { against: true }),
        ...getHead(HeadId.DOUBLE_ARC),
    },
    /*126*/[FlaccoId.TICK_AGAINST_DOUBLE_ARC]: {                      //    .(|)
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.DOUBLE_ARC),
    },
    /*127*/[FlaccoId.WING_AGAINST_RIGHT_BARB_AND_ARC]: {              //     ,|\)
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.RIGHT_BARB_AND_ARC),
    },
    /*128*/[FlaccoId.RIGHT_BARB_AND_ARC]: {                           //      |\)
        ...getHead(HeadId.RIGHT_BARB_AND_ARC),
    },
    /*129*/[FlaccoId.WING_AND_RIGHT_BARB_AND_ARC]: {                  //     `|\)
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.RIGHT_BARB_AND_ARC),
    },
    /*130*/[FlaccoId.WING_AGAINST_DOUBLE_ARC]: {                      //    ,(|)
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.DOUBLE_ARC),
    },
    /*131*/[FlaccoId.DOUBLE_ARC]: {                                   //     (|)
        ...getHead(HeadId.DOUBLE_ARC),
    },
    /*132*/[FlaccoId.WING_AND_DOUBLE_ARC]: {                          //    `(|)
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.DOUBLE_ARC),
    },
    /*133*/[FlaccoId.BIRD_AND_DOUBLE_ARC]: {                          //   ``(|)
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.DOUBLE_ARC),
    },
    /*134*/[FlaccoId.WING_AGAINST_TICK_AND_DOUBLE_ARC]: {             //   ,'(|)
        arm: getArm(ArmId.WING_AGAINST_TICK),
        ...getHead(HeadId.DOUBLE_ARC),
    },
    /*135*/[FlaccoId.TICK_AND_DOUBLE_ARC]: {                          //    '(|)
        arm: getArm(ArmId.TICK),
        ...getHead(HeadId.DOUBLE_ARC),
    },
    /*136*/[FlaccoId.WING_AND_TICK_AGAINST_ARC_AND_BARB]: {           //   ,.(|\
        arm: getArm(ArmId.WING_AND_TICK, { against: true }),
        ...getHead(HeadId.ARC_AND_BARB),
    },
    /*137*/[FlaccoId.TICK_AGAINST_ARC_AND_BARB]: {                    //    .(|\
        arm: getArm(ArmId.TICK, { against: true }),
        ...getHead(HeadId.ARC_AND_BARB),
    },
    /*138*/[FlaccoId.WING_AGAINST_TICK_AGAINST_ARC_AND_BARB]: {       //   `.(|\
        arm: getArm(ArmId.WING_AGAINST_TICK, { against: true }),
        ...getHead(HeadId.ARC_AND_BARB),
    },
    /*139*/[FlaccoId.DOUBLE_RIGHT_BARB]: {                            //      |\\
        ...getHead(HeadId.DOUBLE_RIGHT_BARB),
    },
    /*140*/[FlaccoId.WING_AGAINST_ARC_AND_BARB]: {                    //    ,(|\
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.ARC_AND_BARB),
    },
    /*141*/[FlaccoId.ARC_AND_BARB]: {                                 //     (|\
        ...getHead(HeadId.ARC_AND_BARB),
    },
    /*142*/[FlaccoId.WING_ARC_AND_BARB]: {                            //    `(|\
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.ARC_AND_BARB),
    },
    /*143*/[FlaccoId.BIRD_ARC_AND_BARB]: {                            //   ``(|\
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.ARC_AND_BARB),
    },
    /*144*/[FlaccoId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_RIGHT_BARB]: {   //   ,,)|\\
        arm: getArm(ArmId.BIRD, { against: true }),
        ...getHead(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB),
    },
    /*145*/[FlaccoId.WING_AGAINST_LEFT_SCROLL_DOUBLE_RIGHT_BARB]: {   //    ,)|\\
        arm: getArm(ArmId.WING, { against: true }),
        ...getHead(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB),
    },
    /*146*/[FlaccoId.LEFT_SCROLL_DOUBLE_RIGHT_BARB]: {                //     )|\\
        ...getHead(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB),
    },
    /*147*/[FlaccoId.WING_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB]: {       //    `)|\\
        arm: getArm(ArmId.WING),
        ...getHead(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB),
    },
    /*148*/[FlaccoId.BIRD_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB]: {       //   ``)|\\
        arm: getArm(ArmId.BIRD),
        ...getHead(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB),
    },
}

// TODO: SYMBOL VS SAGITTAL; GLYPH TYPES
//  Every time we getFlacco we immediately convert it to a sagittal. and so if we were going to change getFlacco
//  To take instead of the ID the HeadId and ArmId and against or whatever
//  Then maybe we should get rid of it altogether and just cut to the chase with a getAccidental which also takes flavor
const getFlacco = (flaccoId: FlaccoId): Flacco =>
    FLACCOS[flaccoId]

export {
    getFlacco,
    FLACCOS,
}
