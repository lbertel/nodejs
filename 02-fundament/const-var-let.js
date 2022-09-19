//the keyword var set global variables
//the keyword let set variable scope context
//the keyword const set constant

var name = 'Wolverine';

if( true ){
    var name = 'Magnet';
    console.log(name);
}

console.log(name);

let heroName = 'Superman';

if( true ){
    let heroName = 'Spider-man';
    console.log(heroName);
}

console.log(heroName);

const villageName = 'Mantis';

console.log(villageName);