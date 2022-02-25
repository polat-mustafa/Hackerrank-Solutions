function diagonalDifference(arr) { // örnegin arr  = [[1,2,3], [4,5,6], [9,8,9]]
    // Write your code here
    
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let length = arr.length; // arr.length = 3

    for(let i = 0; i < length; i++) { // dizi boyutu kadar döngüye girecek. 
        firstDiagonal += arr[i][i]  // ilk diyagonalımızın toplamını alıyoruz. arr[i][i] ile ilk diyagonalımızın ilk indexi ile aynı olacaktır.
        secondDiagonal += arr[i][length - i - 1]    // örenğin 2. indexde arr[2][3 - (2-1)] den arr[2][2] olacaktırk.
        // ikinci diyagonalımızın toplamını alıyoruz. arr[i][length - i - 1] ile ikinci diyagonalımızın son indexi ile aynı olacaktır.
    }

    return Math.abs(firstDiagonal - secondDiagonal) // abs fonksiyonu ile ilk ve ikinci diyagonalımızın farkını alıyoruz. 

}


/*

soru bizden örenğin
arr = [
[1,2,3], 
[4,5,6],
[9,8,9]
]

şeklinde uzunlugu 3 olan bir dizi veriyor.

firstDiagonal = 1 + 5 + 9 = 15
secondDiagonal = 3 + 5 + 9 = 18

soru bizden en sonunda mutlak değer içinde farklarını istiyor.

bunuda abs fonskiyonu ile mutlak değer alıyoruz.
Math.abs(firstDiagonal - secondDiagonal)
cevap = 15 - 18 = |-3| = 3 

*/ 