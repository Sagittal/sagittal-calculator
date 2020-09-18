import { KeyPath, setAt } from "../../../../src/general/code"
import { Obj } from "../../../../src/general/code/types"

describe("setAt", (): void => {
    it("sets the value on the object at the specified key path", (): void => {
        const object = { polygons: { rectangles: { squares: {} } } } as Obj
        const keyPath = ["polygons", "rectangles", "squares", "magicSquare"] as KeyPath
        const value = true

        setAt(object, keyPath, value)

        expect(object).toEqual({ polygons: { rectangles: { squares: { magicSquare: true } } } })
    })

    it("can create the path if necessary, with the 'parents' options", (): void => {
        const object = {} as Obj
        const keyPath = ["polygons", 2, "squares", "magicSquare"] as KeyPath
        const value = true
        const options = { parents: true }

        setAt(object, keyPath, value, options)

        expect(object).toEqual({ polygons: { 2: { squares: { magicSquare: true } } } })
    })
})
