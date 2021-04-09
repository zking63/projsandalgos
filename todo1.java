import java.util.ArrayList;
public class todo1{
    //Given an array and an additional value
    //insert this value at the beginning of the array
    //Do this without using any built-in array methods.
    public void add(int Array[], int value){
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(value);
        for (int i =0; i < Array.length; i++){
            list.add(Array[i]);
        }
        System.out.println(list);
    }

}