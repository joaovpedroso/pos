class Poligono{
	constructor(id, x, y){
		this.id = id;
		this.x = x;
		this.y = y;
	}
	toString(){
		return `Elemento id: (${this.id})`;
	}
}

class Circulo extends Poligono{
	toString(){
		return `Circulo (${this.id})`;
	}
}

let c = new Circulo('c1',0,10);
console.log(new String(c));