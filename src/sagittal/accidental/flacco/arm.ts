import {AccentId, Arm, ArmId} from "./types"

const getArm = (armId: ArmId, {anti}: {anti?: boolean} = {}): Arm => {
    switch (armId) {
        case ArmId.WING:                                                        //  `|
            return anti ?
                [{id: AccentId.WING, anti}] :
                [{id: AccentId.WING}]
        case ArmId.BIRD:                                                        // ``|
            return anti ?
                [{id: AccentId.BIRD, anti}] :
                [{id: AccentId.BIRD}]
        case ArmId.ANTIWING_AND_TICK:                                           // ,'|
            return anti ?
                [{id: AccentId.WING}, {id: AccentId.TICK, anti}] :
                [{id: AccentId.WING, anti: true}, {id: AccentId.TICK}]
        case ArmId.TICK:                                                        //  '|
            return anti ?
                [{id: AccentId.TICK, anti}] :
                [{id: AccentId.TICK}]
        case ArmId.WING_AND_TICK:                                               // `'|
            return anti ?
                [{id: AccentId.WING, anti}, {id: AccentId.TICK, anti}] :
                [{id: AccentId.WING}, {id: AccentId.TICK}]
    }
}

export {
    getArm,
}
