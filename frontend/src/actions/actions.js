export const GO_ROOMS = 'GO_ROOMS'
export const BACK_HOME = 'BACK_HOME'

export const Postions = {
    HOME: 'HOME',
    ROOMS: 'ROOMS',
}

export function goRooms(name) {
    console.log("goROms")
    console.log(name)
    return {type: GO_ROOMS, name}
}

export function backHome() {
    console.log("backgome")
    return {type: BACK_HOME}
}
