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
    //add a head
    public Node addNode(int data){
        Node newNode = new Node(data);
        if (head == null){
            head = newNode;
            tail = newNode;
        }
        else{
            tail.next = newNode;
            tail = newNode;
        }
        return tail;
    }
    //remove head
    public void removeHead(Node head){
        head = null;
        head = this.head.next;
    }
    //get values of head
    public Integer getHeadValue(Node head){
        Integer headint = null;
        if (head != null){
            headint = head.data;
        }
        return headint;
    }
    //get value of current tail
    public Integer getNodeValue(){
        Integer currentint = null;
        if (head != null){
            currentint = tail.data;
        }
        return currentint;
    }
}