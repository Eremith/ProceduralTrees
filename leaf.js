class Leaf{
    constructor(minX, maxX, minY, maxY){
        this.pos = {x: Math.floor(Math.random() * maxX + minX), y: Math.floor(Math.random() * maxY + minY)}
    }

}