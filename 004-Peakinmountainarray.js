//Given an array which is mountain shaped i.e. it has increasing and decreasing orders

//Logic : 
// We know that the solution occurs between the two ends
// if mid lies on left increasing side, we move start to mid+1
//if mid occurs in right decreasing side, we move the end to mid-1
//where ever they meet should be our solution

const binsearchPeak = (arr, s , e) => {
    let mid = Math.floor(s + ((e-s)/2))
    while(s<=e){
        if(arr[mid] > arr[mid-1]){
            s = mid+1
        }
        else{
            e = mid-1
        }
        mid = Math.floor(s + ((e-s)/2))
    }
    return arr[mid]
}

let arr = [1,2,3,4,5,4]


console.log(`peak element is ${binsearchPeak(arr,0,arr.length-1)}`)


//Follow-up : 
//What if the array has duplicates ? 

const binsearchPeakWithDuplicates = (arr, s , e) => {
    let mid = Math.floor(s + ((e-s)/2))
    console.log(mid)
    while(s<=e){
        if(arr[mid] > arr[mid-1] || arr[mid] < arr[mid+1]){
            s = mid+1
        }
        else if(arr[mid] > arr[mid+1] || arr[mid] < arr[mid-1]){
            e = mid-1
        }
        else{
            let first = binsearchfirst(arr,s,e,arr[mid])
            if(first-1 < 0 || arr[first] > arr[first-1] || arr[first] < arr[first+1]){
                s = mid+1
            }
            else{
                e = mid-1
            }
            
        }
        mid = Math.floor(s + ((e-s)/2))
    }
    return arr[mid]
}


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

let arr1 = [1,2,3,3,3,4,4,4,4,4,4,5,4,4,4,4,4,4,4,4,4,4,4]


console.log(`peak element is ${binsearchPeakWithDuplicates(arr1,0,arr1.length-1)}`)