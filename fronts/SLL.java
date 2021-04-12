public class SLL{
    int data;
    Node next;
    Node head = null;
    Node tail = null;
    public void node(int data){
        this.data = data;
        this.next = null;
    }
    //add a node
    public void addNode(int data){
        Node newNode = new Node(data);
        if (head == null){
            head = newNode;
            tail = newNode;
        }
        else{
            tail.next = newNode;
            tail = newNode;
        }
        int headint = head.data;
        int tailint = tail.data;
        System.out.println(headint);
        System.out.println(tailint);
    }
}