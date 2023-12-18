//Find total number of occurance of a number in sorted array

const binsearchfirst = (arr,s,e,key) => {
    let ans = -1
    while(s<=e){
        let mid = Math.floor(  s + ((e-s)/2))
        if(arr[mid] == key){
            ans = mid
            e = mid-1
        }
        else if(arr[mid] > key){
            e = mid-1
        }
        else{
            s = mid+1
        }
    }
    return ans
}

const binsearchlast = (arr,s,e,key) => {
    let ans = -1
    while(s<=e){
        let mid = Math.floor(  s + ((e-s)/2))
        if(arr[mid] == key){
            ans = mid
            s = mid+1
        }
        else if(arr[mid] > key){
            e = mid-1
        }
        else{
            s = mid+1
        }
    }
    return ans
}


let arr = [2,3,4,5,5,5,5,5,5,5,6,7,8,9]

let key = 5

console.log(`${key} occurs ${- binsearchfirst(arr,0,arr.length-1,key) + binsearchlast(arr,0,arr.length-1,key) +1} times`)