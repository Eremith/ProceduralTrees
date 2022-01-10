class Tree{
    constructor(){
        this.leaves = []
        this.branches = []
        for(let i = 0; i < 100; i++){
            this.leaves.push(new Leaf(50, 350, 50, 350))
        }

        let dir = {x: 0, y: -1}
        let root = new Branch(null, {x: 200, y: 400}, dir)

        this.branches.push(root)

        let current = root
        let found = false
        while(!found){
            for(let i = 0; i < this.leaves.length; i++){
                if(Math.hypot(this.leaves[i].pos.x - root.pos.x, this.leaves[i].pos.y - root.pos.y) < max_d){
                    found = true
                }
            }

            if(!found){
                let branch = current.next()
                current = branch
                this.branches.push(current)
            }
        }

        this.show = function(){
            for(let i = 0; i < this.leaves.length; i++){
                fillPixel(this.leaves[i].pos.x, this.leaves[i].pos.y)
            }

            for(let i = 0; i < this.branches.lenght; i++){
                this.branches[i].show()
                console.log("ici")
            }
        }
    }
}