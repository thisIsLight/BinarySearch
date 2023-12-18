//Given a sorted array, find the first and last position of a repeated character

const binsearchfirst = (arr, s, e, key) => {
    let mid = Math.floor( s + ((e-s)/2) )
    let ans = -1
    while(s<=e){
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
        mid = Math.floor( s + ((e-s)/2) )
    }
    return ans
}

const binsearchlast = (arr, s, e, key) => {
    let mid = Math.floor( s + ((e-s)/2) )
    let ans = -1
    while(s<=e){
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
        mid = Math.floor( s + ((e-s)/2) )
    }
    return ans
}

let arr = [2,3,4,5,5,5,5,5,5,5,6,7,8,9]

let key = 5

console.log(`${key} first occurance is at ${binsearchfirst(arr,0,arr.length-1,key)} and last is at ${binsearchlast(arr,0,arr.length-1,key)}`)
key = 11
console.log(`${key} first occurance is at ${binsearchfirst(arr,0,arr.length-1,key)} and last is at ${binsearchlast(arr,0,arr.length-1,key)}`)
