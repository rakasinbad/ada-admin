
const designWidth = 1440
const designHeight = 900

function wScale(unit, windowWidth) {
    return (windowWidth * unit) / designWidth
}

function hScale(unit, windowHeight) {
    return (windowHeight * unit) / designHeight
}

export default { 
    wScale,
    hScale
}