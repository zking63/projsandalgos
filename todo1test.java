import java.util.ArrayList;
public class todo1test {
    public static void main(String[] args){
        todo1 result = new todo1();
        int[] myArray = {4, 8, 8, 5, 9};
        result.add(myArray, 1);

        int[] myArray2 = {1,2,2,1,2};
        result.swap(myArray2);

        ArrayList<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < 5; i++){
            list.add(i);
        }
        list.add(3, 2);
        result.remove1(list);
        result.insert(list, 3, 0);
        result.remove2(list,3);
        result.dupes(list);
    }
}