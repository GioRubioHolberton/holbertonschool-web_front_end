let roomDimensions = {
    width: 50,
    length: 100,
    getArea() {
        return(this.width * this.length)
    }
}

let boundGetArea = roomDimensions;
console.log(boundGetArea.getArea());