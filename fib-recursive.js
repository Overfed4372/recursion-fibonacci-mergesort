function fibRec (num, seq=[0,1]) {
    if (num < 1) return "The value must be greater than 0";
    if (seq.length >= num) {
        return seq.slice(0,num);
    }
    seq.push(seq.at(-1) + seq.at(-2));
    // console.log(fibRec(num-1).at(-1)+fibRec(num-1).at(-2));
    return fibRec(num,seq);
    
}
// console.log(fibRec(1));
// console.log(fibRec(4));
console.log(fibRec(1));
console.log(fibRec(2));
console.log(fibRec(3));
console.log(fibRec(4));
console.log(fibRec(5));
console.log(fibRec(10));

/*
trace: 
4 -> 
 fibRec(3).at(-1) + fibRec(3).at(-2) = 1 + 1 = 2
 seq = [0,1,1,2]
 3 ->
  fibRec(2).at(-1) + fibRec(2).at(-2) = 1 + 0 = 1
  seq = [0,1,1]
*/