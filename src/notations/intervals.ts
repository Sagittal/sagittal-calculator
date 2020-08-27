import { Cents, Max } from "../general"

const MAX_POSITION: Max<Cents> = Math.log2(
    Math.pow(3, 9.5)
    /
    Math.pow(2, 15),
) * 1200 as Max<Cents>                                  // 68.5725082211804

export {
    MAX_POSITION,
}
