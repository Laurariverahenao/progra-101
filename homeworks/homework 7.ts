function max ( a: number, b: number, c: number ){

    if ( a > b) {
        if ( a > c ){
            // tambien se puede hacer como terciario de esta forma
            //para reducir codigo.
            // return (a > b) ? a : b;
            return a;
        } else {
            return c;
        }
    }
    if ( b > c ){
        // return (b > c ) ? b : c;
        return b;
    } else {
        if ( a > c ){
            // return (a > c ) ? a : c;
            return a
        } else {
            return c;
        }
    }

}

export let maxValue = max( 10, 32, 6);

console.log (maxValue);

