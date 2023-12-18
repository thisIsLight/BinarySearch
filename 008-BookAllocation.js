//Book Allocation Problem
//We are given an array of books with i as book and ith element as pages in book
//We are also given children count as m
//Distribute the books to children so that max of pages on a children is minimum in all possible scenarios
//Return the maximum number of pages in the above case where maximum is minimized


const distribute = (arr, c) => {

    let s = 0
    let e = arr.reduce((sum,item) => {return sum+item})
    return binsearchdistribute(arr,s,e,c)
}

const binsearchdistribute = (arr,s,e,c) => {
    let mid = Math.floor(s +((e-s)/2))
    let ans = -1
    while(s<=e){
        if(isvalid(arr,mid,c)){
            ans = mid
            e = mid-1
        }
        else{
            s = mid+1
        }
        mid = Math.floor(s +((e-s)/2))
    }
    return ans
}

const isvalid = (arr,val,c) => {
    let j = 0
    for(let i=0;i<c;i++){
        let sum = 0
        while(j<arr.length){
            sum+=arr[j]
            if(sum > val){
                break
            }
            j++
        }
    }
    return j == arr.length ? true : false
}


let arr = [10,20,30,40]

let count = 2

console.log(`maximum number of pages is ${distribute(arr,count)}`)