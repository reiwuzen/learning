let x: number = 5;
console.log("Hello, tsc");
console.log(x);
const fork = (): void => {
    console.log("step off ___");
    return;
}
function foo():void {
    console.log("foo");
    return;
}
foo();
fork();
class Animals {
    constructor(public voice: string){
        
        this.voice = voice;

    }
    __(){
        console.log(`${this.voice} has ___`)
    }
}
let _t = new Animals("Chatgpt")
_t.__();

const __object = {
 name: "hello motto",
 id: 123,
}
console.log(__object.name)
type user = {
    name: string;
    age: number;
    id: number;
    isActive: boolean;
    hmm: string;
    idkwt: string
}
let u1: user = {name:"ChatGpt", age:9, id:1, isActive:true, hmm:" yes hmm", idkwt:"i really don't know" }
console.log(u1);
function $$$$ ():void{
    console.log("money money money")
    console.log("cash cash cash")
    console.log("$\n$\n")
    // console.log($$$$());// hehe systems gona fked up
    return
}
$$$$()
function $(): void{
    console.log($$$$());
    return;
}
$();
