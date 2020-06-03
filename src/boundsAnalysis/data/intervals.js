const APOTOME = Math.log2(2187 / 2048) * 1200    // 113.68500605771192
const TINA = 1 / 809 * APOTOME                      // 0.14052534741373537
const MAXIMUM_POSITION = Math.log2(
    Math.pow(3, 9.5)
    /
    Math.pow(2, 15),
) * 1200                                            // 68.5725082211804

module.exports = {
    APOTOME,
    TINA,
    MAXIMUM_POSITION,
}
