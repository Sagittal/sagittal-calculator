const onlyRunInCi = () => {
    if (!process.env.CI && process.argv[2] !== "--ci=true") {
        pending("slow test only run in CI")
    }
}

export {
    onlyRunInCi,
}
