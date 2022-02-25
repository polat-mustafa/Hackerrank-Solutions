/* 
ar parametresiyle gelen dizinin her bir elemannı toplayan fonksiyon.
Örneğin soruda 1000000001 1000000002 1000000003 1000000004 1000000005 gibi bir dizi gelirse 
toplamı 5000000015 olacaktır.
bunu for döngüsüyle ve reduce fonksiyonu ile yapabiliriz.

*/

// birinci yöntem

function aVeryBigSum(ar) { 
    // Write your code here
    var sum = 0
    for(let i = 0; i < ar.length; i++) {
        sum += ar[i]
    }
    return sum
}

// ikinci yöntem 

// reduce fonksiyonu ile dizi içindeki her bir indexi toplamımızı alıyoruz.
// her ne kadar for döngüsü hız olarak daha iyi olsada reduce ile kod okunabilirliğini arttırıyoruz.

function aVeryBigSum(ar) {
    
    return ar.reduce((acc, i) => {
        return acc + i
    }, 0) // 0 ile başlatıyoruz.
}