function solution(a, b) {
    if(b < a){
        let temp = a;
        a = b;
        b = temp;
    }
    let sum = b * (b + 1) / 2 - a * (a - 1) / 2;
    return sum;
}
