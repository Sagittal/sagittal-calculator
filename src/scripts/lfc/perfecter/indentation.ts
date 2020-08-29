import { IO } from "../../../general"

const computeIndentation = (depth: number): IO =>
    Array(depth * 2 + 1).join(" ") as IO

export {
    computeIndentation,
}
