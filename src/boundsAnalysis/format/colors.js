const {RANKS} = require("../data/ranks")

const COLORS = {
    [RANKS["EDA"]]: "brightBlue",
    [RANKS["MEAN"]]: "cyan",
    [RANKS["SIZE"]]: "green",
    [RANKS["INFERIOR_EDA"]]: "yellow",
    [RANKS["INFERIOR_MEAN"]]: "yellow",
    [RANKS["INFERIOR_SIZE"]]: "yellow",
    [RANKS["OVERRIDE"]]: "red",
    [RANKS["IMPOSSIBLE"]]: "magenta",
}

module.exports = {
    COLORS,
}
