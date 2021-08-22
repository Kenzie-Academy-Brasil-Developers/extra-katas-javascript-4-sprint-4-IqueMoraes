const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";


const principal = document.querySelector('main');

function showResults(x) {
    const paragrafo = document.createElement('p');
    paragrafo.textContent = x;
                                
    principal.appendChild(paragrafo);

    
}

function kata1(x) {
    // implemente aqui o código
    let array = x.split(',');

    return array
}
kata1(gotCitiesCSV)
showResults(JSON.stringify(kata1(gotCitiesCSV)))


function kata2() {
    // implemente aqui o código
    let array = bestThing.split(' ')

    showResults(JSON.stringify(array))
    return array
}
kata2()


function kata3(x) {
    // implemente aqui o código
    let array = x.split(',')
    let string = array.join(';')
    showResults(string)
    return string

}
kata3(gotCitiesCSV)


function kata4(x) {
    // implemente aqui o código
    let string = x

    showResults(string.join(';'))
    return string.join(';')

}
kata4(lotrCitiesArray)


function kata5(x) {
    // implemente aqui o código
    let array = x.filter((item, index) =>{
        return index < 5
    })

    showResults(JSON.stringify(array))
    return array

}
kata5(lotrCitiesArray)


function kata6(x) {
    // implemente aqui o código
    let array = x.filter((item, index, aRRay) =>{
        return index > ((aRRay.length-1) - 5)
    })

    showResults(JSON.stringify(array))
    return array

}
kata6(lotrCitiesArray)


function kata7(x) {
    // implemente aqui o código
    let array = x.filter((item, index, aRRay) =>{
        return index > 1 && index < 5
    })

    showResults(JSON.stringify(array))
    return array

}
kata7(lotrCitiesArray)


function kata8(x) {
    // implemente aqui o código
    x.splice(2,1);

    showResults(JSON.stringify(x))
    return x

}
kata8(lotrCitiesArray)



function kata9(x) {
    // implemente aqui o código
    x.splice(5, Number.MAX_VALUE);

    showResults(JSON.stringify(x))
    return x

}
kata9(lotrCitiesArray)


function kata10(x) {
    // implemente aqui o código
    x.splice(2,0, "Rohan");

    showResults(JSON.stringify(x))
    return x

}
kata10(lotrCitiesArray)


function kata11(x) {
    // implemente aqui o código
    x.splice(5,1, 'Deadest Marshes');

    showResults(JSON.stringify(x))
    return x

}
kata11(lotrCitiesArray)


function kata12(x) {
    // implemente aqui o código
    let string = x.slice(0,14);

    showResults(JSON.stringify(string))
    return string

}
kata12(bestThing)


function kata13(x) {
    // implemente aqui o código
    let string = x.slice(-12);

    showResults(JSON.stringify(string))
    return string

}
kata13(bestThing)


function kata14(x) {
    // implemente aqui o código
    let string = x.slice(23, 38);

    showResults(JSON.stringify(string))
    return string

}
kata14(bestThing)


function kata15(x) {
    // implemente aqui o código
    let string = x.substr(-12);

    showResults(JSON.stringify(string))
    return string

}
kata15(bestThing)


function kata16(x) {
    // implemente aqui o código
    let string = x.substr(23,15);

    showResults(JSON.stringify(string))
    return string

}
kata16(bestThing)


function kata17(x) {
    // implemente aqui o código
    x.pop();

    showResults(JSON.stringify(x))
    return x

}
kata17(lotrCitiesArray)


function kata18(x) {
    // implemente aqui o código
    x.push('Deadest Marshes');

    showResults(JSON.stringify(x))
    return x

}
kata18(lotrCitiesArray)


function kata19(x) {
    // implemente aqui o código
    x.shift();

    showResults(JSON.stringify(x))
    return x

}
kata19(lotrCitiesArray)



function kata20(x) {
    // implemente aqui o código
    x.unshift('Mordor');

    showResults(JSON.stringify(x))
    return x

}
kata20(lotrCitiesArray)



/*----ATIVIDADES EXTRAS--------*/


function kata21(x) {
    // implemente aqui o código
    let index = x.indexOf("only")

    showResults(JSON.stringify(index))
    return index

}
kata21(bestThing)


function kata22(x) {
    // implemente aqui o código
    let index = x.indexOf("bit")

    showResults(JSON.stringify(index))
    return index

}
kata22(bestThing)



function contaVogais(x){
    let vogais = ["a","e","i","o","u"];
        for(let j=0; j<vogais.length;j++){
             let count = 0;
             let indiceVogal = x.indexOf(vogais[j]);
 
             while(indiceVogal != -1){
                 count++
                 indiceVogal = x.indexOf(vogais[j], indiceVogal+1);
             }
 
             if(count >1){
                 return x
             }
        }
 }


function kata23(x) {
    // implemente aqui o código
    let array = x.split(',')

    let array2 = array.filter(item =>{
       return contaVogais(item)
    })

    showResults(JSON.stringify(array2))
    return array2

}
kata23(gotCitiesCSV)



function kata24(x) {
    // implemente aqui o código
    let array = x.filter(item =>{
       return item.indexOf('or') >= 0
    })

    showResults(JSON.stringify(array))
    return array

}
kata24(lotrCitiesArray)



function kata25(x) {
    // implemente aqui o código
    let array = x.split(' ')

    array2 = array.filter(item =>{
       return item.indexOf('b') === 0
    })

    showResults(JSON.stringify(array2))
    return array2

}
kata25(bestThing)


function kata26(x) {
    // implemente aqui o código

    showResults(JSON.stringify(x.indexOf('Mirkwood') >= 0 ? "Sim" : "Não"))
    return x.indexOf('Mirkwood') >= 0 ? "Sim" : "Não"

}
kata26(lotrCitiesArray)



function kata27(x) {
    // implemente aqui o código

    showResults(JSON.stringify(x.indexOf('Hollywood') >= 0 ? "Sim" : "Não"))
    return x.indexOf('Mirkwood') >= 0 ? "Sim" : "Não"

}
kata27(lotrCitiesArray)


function kata28(x) {
    // implemente aqui o código

    showResults(JSON.stringify(x.indexOf('Mirkwood')))
    return x.indexOf('Mirkwood')

}
kata28(lotrCitiesArray)


function kata29(x) {
    // implemente aqui o código
    array = x.filter(item =>{
        return item.indexOf(' ') >=0
     })

    showResults(JSON.stringify(array[0]))
    return array[0]

}
kata29(lotrCitiesArray)



function kata30(x) {
    // implemente aqui o código

    showResults(JSON.stringify(x.reverse()))
    return x.reverse()

}
kata30(lotrCitiesArray)


function kata31(x) {
    // implemente aqui o código
    

    showResults(JSON.stringify(x.sort()))
    return x.sort()

}
kata31(lotrCitiesArray)



function kata32(x) {
    // implemente aqui o código
    x.sort( (a,b) => {
        return a.length - b.length
    })

    showResults(JSON.stringify(x))
    return x

}
kata32(lotrCitiesArray)

/*
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"; */