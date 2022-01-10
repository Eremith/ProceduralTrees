class Branch{
    constructor(parent, pos, dir){
        this.pos = pos
        this.parent = parent
        this.dir = dir

        this.next = function(){
            let nextBranch = new Branch(this, {x: this.pos, y: this.dir}, this.dir)
            return nextBranch
        }

        this.show = function(){
            if(this.parent != null){
                drawLine(this.pos.x, this.parent.pos.x, this.pos.y, this.parent.pos.y)
            }
        }
    }
}