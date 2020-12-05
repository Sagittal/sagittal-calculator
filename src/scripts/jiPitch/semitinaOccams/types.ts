import {Cents} from "@sagittal/general"

// Not actually _InaBrand because doesn't correspond to a JI Notation level
type Semitina = Cents & {_SemitinaBrand: boolean}

export {
    Semitina,
}
