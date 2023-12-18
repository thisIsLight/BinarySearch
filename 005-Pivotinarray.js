//Pivot is a point in a sorted rotated array from which we can reverse rotate the array to make it 
//rotated
//Example : say array - [1,2,3,4,5,6] was rotated from right to left twice
//The array becomes [5,6,1,2,3,4]
//Now in this array we can call 6/1 as the pivot elements

const pivotofsortedarray = (arr,s,e) => {
    let first = arr[0]
    let mid = Math.floor(s + ((e-s)/2))
    while(s<=e){
        if(arr[mid] < arr[mid+1] && arr[mid] < arr[mid-1]){
            return arr[mid]
        }
        if(arr[mid] > first){
            s = mid+1
        }
        else{
            e = mid-1
        }
        mid = Math.floor(s + ((e-s)/2))
    }
    return arr[mid]
}

let arr = [5,6,1,2,3,4]

console.log(`pivot element is ${pivotofsortedarray(arr,0,arr.length-1)}`)

//Works of duplicate values as well