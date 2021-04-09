public class todo1{
    //Given an array and an additional value
    //insert this value at the beginning of the array
    //Do this without using any built-in array methods.
    

    //If length is odd, do not change the final element.
    //For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42]
    //to [true,"Brendan",42]. As with all array challenges
    //do this without using any built-in array methods.
    public void swap(Integer digit, Integer exponent){
        if (digit < 0 || exponent < 0){
            System.out.println("The number cannot be negative");
            return;
        }
        String temp = Integer.toString(digit);
        String last = String.valueOf(temp.charAt(temp.length()-1));
        Integer final1 = Integer.parseInt(last);
        Double result = Math.pow(final1, exponent);
        System.out.println(result);
    }
}