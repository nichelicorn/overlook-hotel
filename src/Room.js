class Room {
  constructor(roomData) {
    this.number = roomData.number;
    this.roomType = roomData.roomType;
    this.bidet = roomData.bidet || false;
    this.bedSize = roomData.bedSize;
    this.numBeds = roomData.numBeds;
    this.costPerNight = roomData.costPerNight;
  }
}

export default Room;
