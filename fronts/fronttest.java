public class fronttest{
    public static void main(String[] args){
        SLL result = new SLL();

        System.out.println(result.getHeadValue(result.addHead(88)));
        System.out.println(result.addNode(99));
        //System.out.println(result.getNodeValue());
        System.out.println(result.contains(99));
        System.out.println(result.contains(98));
    }
}