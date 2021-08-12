//uso estricto de JS siempre usar
"use strict"
//llamdo de los animales
export default
    class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;
//constructor es la forma en que se ordena para que tengan los datos
    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    get Nombre() {
        return this.#nombre;
    }

    get Edad() {
        return this.#edad;
    }

    get Img() {
        return this.#img;
    }

    get Sonido() {
        return this.#sonido;
    }

    set Comentarios(comentarios) {
        this.#comentarios = comentarios;
    }

    get Comentarios() {
        return this.#comentarios;
    }
}
//... califica dentro de llamando a los recursos del padrea
export class Leon extends Animal {
    constructor(...args) {
        super(...args);
    }

    Rugir(player) {
        player.src = `./assets/sounds/${this.Sonido}`;
        player.load();
        player.play();
    }
}

export class Lobo extends Animal {
    constructor(...args) {
        super(...args);
    }

    Aullar() {
        player.src = `./assets/sounds/${this.Sonido}`;
        player.load();
        player.play();
    }
}

export class Oso extends Animal {
    constructor(...args) {
        super(...args);
    }

    Gruñir() {
        player.src = `./assets/sounds/${this.Sonido}`;
        player.load();
        player.play();
    }
}

export class Serpiente extends Animal {
    constructor(...args) {
        super(...args);
    }

    Sisear() {
        //copiado clase revisar pere es indiferente de la fora de llamado 
        player.src = `./assets/sounds/${this.Sonido}`;
        player.load();
        player.play();
    }
}

export class Aguila extends Animal {
    constructor(...args) {
        super(...args);
    }

    Chillar() {
        player.src = `./assets/sounds/${this.Sonido}`;
        player.load();
        player.play();
    }
}