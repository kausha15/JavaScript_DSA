class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            } else{
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null){
                root.right = newNode
            } else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        } else {
            if(root.value === value){
                return true
            } else if(value < root.value){
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length > 0){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value){
            root.right = this.deleteNode(root.right, value)
        } else {
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

}

const tree = new BinaryTree()
console.log('Tree is empty ? ',tree.isEmpty())

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)

// console.log(tree.search(tree.root, 10))
// console.log(tree.search(tree.root, 5))
// console.log(tree.search(tree.root, 15))
// console.log(tree.search(tree.root, 20))

// console.log(' DFS : Pre Order ')
// tree.preOrder(tree.root)
// console.log(' DFS : In Order ')
// tree.inOrder(tree.root)
// console.log(' DFS : Post Order ')
// tree.postOrder(tree.root)
// console.log(' BFS : Level Order ')
// tree.levelOrder(tree.root)

console.log('Min : ',tree.min(tree.root))
console.log('Max : ',tree.max(tree.root))

tree.levelOrder()

tree.delete(10)
tree.levelOrder()