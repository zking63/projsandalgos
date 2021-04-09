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
    //If length is odd, do not change the final element.
    //For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42]
    //to [true,"Brendan",42]. As with all array challenges
    //do this without using any built-in array methods.
    public void swap(int Array2[]){
        ArrayList<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < (Array2.length -1); i += 2){
            list.add(Array2[i + 1]);
            list.add(Array2[i]);
        }
        System.out.println(list);
    }
    //Given an array, remove and return the value at the beginning of the array.
    //Do this without using any built-in array methods except pop().
    public int remove1(ArrayList<Integer> list1){
        int temp = list1.get(0);
        list1.remove(0);
        return temp;
    }
    //Given an array, index, and additional value, insert the value into array at given index.
    //Do this without using built-in array methods.
    //You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
    public void insert(ArrayList<Integer> list1, int index, int value){
        list1.add(index, value);
        System.out.println(list1);
    }
    //Given an array and an index into array, remove and return the array value at that index.
    //Do this without using built-in array methods except pop().
    //Think of popFront(arr) as equivalent to removeAt(arr,0).
    public int remove2(ArrayList<Integer> list1, int index){
        int temp = list1.get(index);
        list1.remove(index);
        return temp;
    }
    //remove duplicates that are next to each other
    public void dupes(ArrayList<Integer> list1){
        for (int i = 0; i < list1.size() -1; i++){
            if (list1.get(i) == list1.get(i + 1)){
                list1.remove(i + 1);
            } 
        }
        System.out.println(list1);
    }
}