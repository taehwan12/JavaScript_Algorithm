function solution(arr) {
    var answer = [];
    var min = arr[0];
    let temp;
    for(let i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
            temp = i;
        }
    }
    arr.splice(temp, 1);
    if(arr.length == 0)
        answer.push(-1);
    else{
        for(let i = 0; i < arr.length; i++){
            answer.push(arr[i]);
        }
    }
    return answer;
}
