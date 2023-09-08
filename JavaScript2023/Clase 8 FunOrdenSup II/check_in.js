class room {
    consructor(cap_pers) {
        this.reservada = false
        this.check_in = null
        this.check_out = null
        this.cap_pers = cap_pers
    }

    reservar() {
        this.reservada = true
    }

    disponible() {
        this.reservada = false
    }
}

class hotel {
    constructor() {
        this.room_list = []
    }

    add_room(room) {
        this.room_list.push(room)
    }

    show_avaliable_rooms() {
        let available_list = []
        this.room_list.forEach(room => {
            //muestro las habitaciones disponibles
            if (room.reservada == false){
                available_list.push(room)
            }
        })
        return available_list 
    }
}

//check_in, check_out, cap_pers
let room1 = new room(4)
let room2 = new room(2)
let room3 = new room(4)
let room4 = new room(2)

const controladorHotel = new hotel()

controladorHotel.add_room(room1)
controladorHotel.add_room(room2)
controladorHotel.add_room(room3)
controladorHotel.add_room(room4)

console.log(controladorHotel.show_avaliable_rooms())

