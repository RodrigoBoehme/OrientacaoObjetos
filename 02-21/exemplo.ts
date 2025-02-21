import { Cat } from "./class";


export class user{
    private nome:string;
    private cat:Cat

    setNome(meuNome:string):void{this.nome=meuNome}
    setCat(meuCat:Cat):void{this.cat=meuCat}
    adicionarTarefa():void{console.log('Tarefa adicionada')}
}

const UserRodrigo=new user();
UserRodrigo.setNome('Rodrigo');
const meuGato=new Cat('Pipoca',3);
UserRodrigo.setCat(meuGato)