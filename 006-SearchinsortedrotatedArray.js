//Same as pivot question

const pivotinarray = (arr,s,e) => {
    let mid = Math.floor(s + ((e-s)/2))
    let first = arr[0]

    while(s<=e){
        if(arr[mid] < arr[mid-1] && arr[mid] < arr[mid+1]){
            return mid
        }
        else if(arr[mid] > first){
            s = mid+1
        }
        else{
            e = mid-1
        }
        mid = Math.floor(s + ((e-s)/2))
    }
}

const binsearch = (arr, s, e, key) => {
    let res = false
    while(s<=e){
        let mid = Math.floor(s+((e-s)/2))
        if(arr[mid] == key){
            return true
        }
        else if(arr[mid] > key){
            e = mid-1
        }
        else{
            s = mid+1
        }
    }
    return res
}

const Searchsortedrotatedarray = (arr, s, e, key) => {
    let pivot = pivotinarray(arr,s,e)

    if(key <= arr[e]){
        return binsearch(arr,pivot,e,key)
    }
    else{
        return binsearch(arr,s,pivot-1,key)
    }
}

let arr = [5,6,1,2,3,4]
let key = 4

console.log(`${key} is Present ? ${Searchsortedrotatedarray(arr,0,arr.length-1,key)}`)