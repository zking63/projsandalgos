class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    add(value) {
        if(this.root) {
            var runner = this.root;
            while(runner) {
                if(value>runner.value) {
                    if(runner.right){
                        runner = runner.right;
                    } else {
                        runner.right = new Node(value);
                        return this
                    }
                } else {
                    if(runner.left){
                        runner = runner.left;
                    } else {
                        runner.left = new Node(value);
                        return this
                    }
                }
            }
        }
        this.root = new Node(value);
        return this
    }

   //function to see if tree contains value
   contains(value){
       var runner = this.root
       while(runner){
           if(value == runner.value){
               return true;
           }
           else{
               if(value > runner.value){
                   runner = runner.right
               }
               else{
                   runner = runner.left
               }
           }
       }
       return false
   }
   min() {
        var runner = this.root;
        var min = this.root.value;
        while(runner.left) {
            if(runner.left.value < min) {
                min = runner.left.value;
            }
            runner = runner.left;
        }
        return min
    }
    max() {
        var runner = this.root;
        var max = this.root.value;
        while(runner.right) {
            if(runner.right.value > max) {
                max = runner.right.value;
            }
            runner = runner.right;
        }
        return max
    }
}
//create tree
tree = new BST();
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(1);
console.log(tree.add(5));
console.log(tree.contains(7));
console.log(tree.min());
console.log(tree.max());