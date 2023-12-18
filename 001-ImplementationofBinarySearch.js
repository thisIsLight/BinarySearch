//We use binary search on sorted arrays


const binsearch = (arr, s, e, key) => {
    let mid = Math.floor(s + ((e-s)/2))

    while(s<=e){
        if(arr[mid] == key){
            return true
        }
        else if(arr[mid] > key){
            e = mid-1
        }
        else{
            s = mid+1
        }
        mid = Math.floor(s + ((e-s)/2))
    }
    return false
}

let arr = [2,3,4,5,6,7,8,9]

let key = 5

console.log(`${key} is present in array ? ${binsearch(arr,0,arr.length-1,key)}`)
key = 11
console.log(`${key} is present in array ? ${binsearch(arr,0,arr.length-1,key)}`)