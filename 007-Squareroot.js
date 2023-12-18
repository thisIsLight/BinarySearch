//Finding square root

const sqrt = (key) => {
    let s = 0
    let e = key
    let mid = parseFloat((s + ((e-s)/2)).toFixed(6))
    while(s<=e){
        if(mid*mid == key){
            return mid
        }
        else if(mid*mid > key){
            e = mid-(.00001)
        }
        else{
            s = mid+(.00001)
        }
        mid = parseFloat((s + ((e-s)/2)).toFixed(6))
    }
    return mid
}


let key = 48

console.log(`sqrt of ${key} is ${sqrt(key)}`)