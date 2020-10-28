import {AccentId, Arm, ArmId} from "./types"

const getArm = (armId: ArmId, {against}: {against?: boolean} = {}): Arm => {
    switch (armId) {
        case ArmId.WING:                                                        //  `|
            return against ?
                [{id: AccentId.WING, against}] :
                [{id: AccentId.WING}]
        case ArmId.BIRD:                                                        // ``|
            return against ?
                [{id: AccentId.BIRD, against}] :
                [{id: AccentId.BIRD}]
        case ArmId.WING_AGAINST_TICK:                                           // ,'|
            return against ?
                [{id: AccentId.WING}, {id: AccentId.TICK, against }] :
                [{id: AccentId.WING, against: true }, {id: AccentId.TICK}]
        case ArmId.TICK:                                                        //  '|
            return against ?
                [{id: AccentId.TICK, against}] :
                [{id: AccentId.TICK}]
        case ArmId.WING_AND_TICK:                                               // `'|
            return against ?
                [{id: AccentId.WING, against}, {id: AccentId.TICK, against}] :
                [{id: AccentId.WING}, {id: AccentId.TICK}]
    }
}

export {
    getArm,
}
