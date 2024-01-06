//Question
//You are given an array and a key value
//You need to find the upper and lower bounds of the key if the key doesn't exist


//Solution

const upperbound = (arr,key) => {
    let start = 0
    let end = arr.length-1

    let mid  = Math.floor(start + ((end-start)/2))
    while(start<end){
        if(arr[mid] < key){
            start = mid+1
        }
        else{
            end = mid
        }
        mid  = Math.floor(start + ((end-start)/2))
    }
    console.log(arr[mid])
}


//Inputs


let input1 = [1,2,3,5,6,7,8]
let input2 = 9


upperbound(input1, input2)