class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
   add(value){
       if(this.root){
           var runner = this.root
           if(value > runner.value){
               if(runner.right){
                   runner = runner.right
               }
               else{
                   runner.right = new Node(value);
                   return this;
               }
           }
           else{
               if(runner.left){
                   runner = runner.left
               }
               else{
                   runner.left = new Node(value);
                   return this;
               }
           }
       }
       this.root = new Node(value);
       return this
   }
}
//create tree
tree = new BST();
tree.add(2);
console.log(tree.add(3));