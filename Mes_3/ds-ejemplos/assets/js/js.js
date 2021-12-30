// Las pilas tratan de --Los ultimpos elementos --TODO DE LOS ULTIMOS ELEMENTOS
class Pila {
    // definir el constructor, q sers representante de este objeto
    constructor(){
        this.pila =[];
    };
// METODOS DE EL OBJETO PILA
// Agregar un elemento vas a saber que elemento vas a agregar
    add(Element){
        return this.pila.push(Element);
    };
    // eleminar una ELEMENTO
    delete(){
        return this.pila.pop();
    }
    // saber el tamaño de la pila (TAMAÑO DE ELEMENTOS)
    getSize(){
        return this.pila.length;

    }
    // leer un elemento(EL ULTIMO EN SER AGREGADO)
    getElement(){
        return this.pila[this.pila.length-1]
    }
    // leer todos los elementos
    getElements(){
        console.log(this.pila) 
    }
    
}
// LAS COLASS TRATAN DE LOS PRIMEROS ELEMENTOS
class Cola {
    // definir el constructor, q sers representante de este objeto
    constructor(){
        this.cola =[];
    };
    add(Element){
        return this.cola.push(Element);
    };
    // eleminar una ELEMENTO
    delete(){
        return this.cola.shift();
    };
    // saber el tamaño de la pila (TAMAÑO DE ELEMENTOS)
    getSize(){
        return this.cola.length;

    };
    // obtener el primer elemento
    getElementI(){
        return this.cola[0];
        console.log( this.cola[0]);
    }
    
    getElements(){
        console.log(this.cola) 
    }

}

class Arbol{
    constructor(node){
    this.node=node;
    this.decendents= [];
    }
    addNode(){
        this.decendents.push(node);
        return this.decendents;
    }
    addElement( Element){
        this.node= Element;
        return this.node;
    }
}