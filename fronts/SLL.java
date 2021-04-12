public class SLL{
    int data;
    Node next;
    Node head = null;
    Node tail = null;
    public void node(int data){
        this.data = data;
        this.next = null;
    }
    //add a head
    public Node addHead(int data){
        Node newNode = new Node(data);
        if (head == null){
            head = newNode;
            tail = newNode;
        }
        else{
            tail.next = newNode;
            tail = newNode;
        }
        return head;
    }
    //get values of nodes
    public Integer getHeadValue(Node head){
        Integer headint = null;
        if (head != null){
            headint = head.data;
        }
        return headint;
    }
}