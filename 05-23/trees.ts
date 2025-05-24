//oque é uma arvore,
/*é uma estrutura de dados que consites em nos conectados por arestas
cada nó em uma arvore posusi um valor ou dado e zero ou mais nos filhos 
o nó no topo da arvore é chamado de root ou raiz, os nos se mfilhos sao
chamados de leafs ou folhas e os nos que estao entre a rais e as folhas 
chamados de subtree


 terminologia

nó (node): um elemento de uma arvore que possui um valor e zero ou mais filhos
raiz (root): o no no topo da arvore que liga todos os outros no alcançaveis
filho (child)
pai (parent)
folha leaf
subarvore subtree


nivel(level) a distancia entre a raie e um no o nivel da raiz é zero

altura ou profundidade: o comprimento do camingo mais longo de uma raiz a 
uma folha a altura da arvore é igual ao maior nivel de seus nós

*/

class node<T>{
    protected value:T;
    protected children:node<T>[]=[]

    constructor(value:T){
        this.value=value
    }

    addChild(child:node<T>){
        this.children.push(child)
    }
    getChildren():node<T>[]{
        return this.children;
    }
}

// exemplo de uso

const rootNode=new node("A")
const nodeB=new node("B")
const nodeC=new node("C")

rootNode.addChild(nodeB);
rootNode.addChild(nodeC);

console.log(rootNode.getChildren())
console.log(nodeB.getChildren())

/*  tipos de arvore

existem muitos tipos de arvores em ciencia da computação arvores binarias, arvores de 
busca binaria, arvores avl, arvores B, arvores rubro-Negras, cada tipo de arcore possui 
caracteristicas epropriedades uncicas que a tornam adequada para diferentes tipos de 
problema uma arvore binaria de busca é uma arcore em que cada no tem no maximo 2 filhos e os 
nos à esquerda tem valores menores que o nó pai enquanto os nós a direita tem valores maiores

*/

