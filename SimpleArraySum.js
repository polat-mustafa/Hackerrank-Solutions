function simpleArraySum(ar) { // ar adında dizi geliyor, bu gelen verilerin her bir indexini toplamımızı istiyor.
    // Write your code here
    let sum = (acc, i) => { // sum fonksiyonu bizim reduce ile her bir elemana yapacagımız işlemin toplam olması gerektiğini söylememiz için oluşturuldu.
        return acc + i // her bir elemanın indexi kadar toplamımızı döndürüyor.
    }
    let first = 0;      // first adında bir değişken tanımlıyoruz. reduce içerisinde başlangıç değeri olarak kullanılacak.
    return ar.reduce(sum , first) // reduce fonksiyonu ile dizi içindeki her bir indexi toplamımızı alıyoruz.
    

}


// bunu kullanarak örneğin:
// bu şekilde de yazabiliriz:

function simpleArraySum(ar) {

    return ar.reduce((acc, i) => {
        return acc + i
    }, 0)

}