const presentMonzo = (monzo, {punctuated = false} = {}) => {
    let contents
    if (punctuated) {
        const fiveRoughMonzo = monzo.splice(2)
        contents = monzo.join(" ") + ", "

        let index = 0
        while (index < fiveRoughMonzo.length) {
            contents = contents + fiveRoughMonzo[index]
            if (index < fiveRoughMonzo.length - 1) {
                if (index % 3 === 2) {
                    contents = contents + ", "
                } else {
                    contents = contents + " "
                }
            }
            index += 1
        }
    } else {
        contents = monzo.join(" ")
    }

    return `[${contents}⟩`
}

module.exports = {
    presentMonzo,
}
