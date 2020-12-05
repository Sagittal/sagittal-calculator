import {Io} from "@sagittal/general"

const computeIndentation = (depth: number): Io =>
    Array(depth * 2 + 1).join(" ") as Io

export {
    computeIndentation,
}
