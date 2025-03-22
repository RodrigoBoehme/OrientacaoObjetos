import { Level } from "./levels";
import { survivor } from "./survivor";

let subrevivor=new survivor()
let sobrevivent=new survivor(Level.orange)

console.log(subrevivor.getLevel())
console.log(sobrevivent.getLevel())