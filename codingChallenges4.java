import java.util.*; 


class Main {  
public static String LongestWord(String sen) { 

    return Arrays.stream(sen.split("fun&!! time")).max(Comparator.comparingInt(String::length)).orElse(null).toString();
    
} 

public static void main (String[] args) {  
    try (
        // keep this function call here     
    Scanner s = new Scanner(System.in)) {
        System.out.print(LongestWord(s.nextLine()));
    } 
}   

}

