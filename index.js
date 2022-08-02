// Create your own map, filter, reducer methods and attach it to an array using prototype chain

function MyArray() {
    this.length = 0
    Object.defineProperty(this, 'lengthh', {
    value: 0,
    enumerable: false,
    writable: true
    })
}
//push
//pop
//map

MyArray.prototype.push = function(elem){
    this[this.length] = elem
    this.length++
    return this.length
}

MyArray.prototype.pop = function(){
    this.length--
    var popElem = this[this.length]
    delete this[this.length]
    return popElem
}

MyArray.prototype.map = function(cb){
    var result = new MyArray()
   for(index in this){
    if(this.hasOwnProperty(index)){
        result.push(cb(this[index], index, this))
    }
   }
   return result;
}

var arr = new MyArray()

arr.push(100)
arr.push(200)
arr.push(300)
arr.pop()

var res = arr.map(function(val){
    console.log(val)
    return val=val
})

console.log(res)


