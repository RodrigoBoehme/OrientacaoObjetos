

class Stack<T>{
    private elementos:T[]=[]
    push(item:T):void{this.elementos.push(item);}
    pop():T|undefined{return this.elementos.pop()}
    peek():T|undefined{
        return this.elementos[this.elementos.length-1];
    }
    isEmpty():boolean{return this.elementos.length===0;}
    size():number{return this.elementos.length}
    clear():void{this.elementos=[]}
}

//exemplo de uso

const minhaPilha=new Stack<number>()
minhaPilha.push(1)
minhaPilha.push(2)
minhaPilha.push(3)

console.log(minhaPilha.pop())
console.log(minhaPilha.peek())
console.log(minhaPilha.size())
console.log(minhaPilha.isEmpty())

minhaPilha.clear()
console.log(minhaPilha.isEmpty())
