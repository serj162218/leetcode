/**
 * 創建一個陣列，長度為input
 * 從2開始，列出2的所有倍數直到input.length，把這些數從陣列中篩除
 * 然後從3開始，重複剛剛的做法
 * 直到最接近input的平方根
 */
let getPrimes = (max) => {
    let arr = Array(max).fill(true);
    //從2開始至max的平方根
    for (let i = 2; i <= Math.sqrt(max); i++) {
        //true表示質數
        if (arr[i] == true) {
            //質數的倍率通通篩掉
            for (let j = i * i; j <= max; j += i) {
                arr[j] = false;
            }
        }
    }
    let ans = [];
    arr.forEach((v,i)=>{
        //從2開始，把質數push到ans
        if(v == true && i >= 2) ans.push(i);
    });
    return ans.toString();
}

console.log(getPrimes(50));