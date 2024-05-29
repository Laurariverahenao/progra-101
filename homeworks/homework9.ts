function heroesThatStartsWith( nameList: string[], letter: string ){
    letter = letter.toUpperCase();
    let newNameList: string[] = [];

    for ( let i = 0; i < nameList.length; i++) {
        let name= nameList [i];

        if ( name.startsWith(letter) ) {
            newNameList.push( name )
        }

    }
    // tambien se puede hacer con otro tipo de ciclo for
    // for( let name of namelist ) {
        // newNameList.push (name):
    //}


    return newNameList;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
export let herosWithLetterS = heroesThatStartsWith( heroes, 'h' );  
console.log( herosWithLetterS ); // She Hulk, Spiderman