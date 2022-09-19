const deadpool = {
    name: 'Wade',
    surname: 'Winston',
    power: 'Regeneration',
    age: 50,
    getName(){
        return `${this.name} ${this.surname} ${this.power}`;
    }
};

console.log(deadpool.getName());

// const name = deadpool.name;
// const surname = deadpool.surname;
// const power = deadpool.power;

function showHero({name, surname, power, age = 0}) {
    console.log(name, surname, power, age);
}

showHero(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
//const [h1, h2 , h3] = heroes;

const [, , h3] = heroes;

console.log(h3);