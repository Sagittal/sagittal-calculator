import { Io } from "../../../../src/general"
import { removeColor } from "../../../../src/general/io"

describe("remove color", () => {
    it("removes color from text", () => {
        const text = "hello there".red as Io

        const actual = removeColor(text)

        const expected = "hello there" as Io
        expect(actual).toBe(expected)
    })
})
