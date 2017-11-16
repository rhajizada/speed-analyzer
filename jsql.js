var jsonfile = require('jsonfile');
var file = 'data.json';
var table = jsonfile.readFileSync(file);
//console.dir(table);

function printSchema(){
    // Prints the table schema 
    var schema = "";
    for(var i =0; i < Object.keys(table[0]).length; i++){
        schema = schema + Object.keys(table[0])[i] + "    ";
    }
    console.log(schema);
}

function schema(){
    var attribute = new Array();
    for(var i =0; i < Object.keys(table[0]).length; i++){
        attribute.push(Object.keys(table[0])[i]);
    }
    return attribute;
}


function printTable(){
    var attribute = new Array();
    attribute = schema();
    var tuple = new Array();
    for(var i = 0; i < table.length; i++){
        for(var j = 0; j < attribute.length; j++){
            tuple[i] = tuple[i] + table[i][attribute[j]] + "  ";
        }
        console.log(tuple[i]);
    }
}

printTable();