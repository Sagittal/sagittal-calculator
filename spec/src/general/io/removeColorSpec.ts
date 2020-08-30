import { IO } from "../../../../src/general"
import { removeColor } from "../../../../src/general/io"

describe("remove color", () => {
    it("removes color from text", () => {
        const text = "hello there".red as IO

        const actual = removeColor(text)

        const expected = "hello there" as IO
        expect(actual).toBe(expected)
    })
})
