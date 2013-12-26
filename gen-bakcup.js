var p = {};

p.alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$&=?[]()./@";
p.images = ["puma", "perro", "gato", "conejo", "volador", "caminante", "correlon", "sin", "con", "cola", "fabi", "hector", "hermes", "mercurio", "toro", "caballo", "cebolla", "camaleon"];
p.l33t = {"a":"4","b":"B","c":"(","d":"D","e":"3","f":"F","g":"9","h":"#","i":"1","j":"J","k":"<","l":"!","m":"M","n":"N","o":"0","p":"P","q":"9","r":"R","s":"5","t":"7","u":"U","v":"V","w":"vv","x":"><","y":"Y","z":"2"};
hell =function()
{
    alert("here!")
}
p.randomCharIndex = function()
{
    var size = p.images.length;
    return Math.round(Math.random() * size);
}

p.dictionaryGenerator = function()
{
    var dictionary = {};
    for(var i in p.alphabet)
    {
        dictionary[p.alphabet[i]] = p.images[p.randomCharIndex()];
    }
    
    return dictionary;
}

p.plainDictionary = function(dictionary)
{
    var result = "";
    for(var i in p.alphabet)
    {
        var x = p.alphabet[i];
        result += dictionary[x];
    }
    
    return result;
}

p.translate = function(str)
{
    var result = "";
    var noseparado = true;
    for (var i in str)
    {
        var x = str[i];
        if (i < 1)
        {
            result += p.l33tify(p.dictionary[x]);
        }
        
        else{
            result += p.dictionary[x];
        }
                
        if(result.length > 15 && noseparado)
        {
            result += "-";
            noseparado = false;
        }
    }
    
    while(result.length  < 10)
    {
        result += result;
    }
        
    return result;
}

p.l33tify = function(str)
{
    var result = "";
    for(var i in str)
    {
        result += p.l33t[str[i]];
    }
    
    return result;
}

p.dictionary = 
{
    "a" : "abeja",
    "b" : "babosa",
    "c" : "caballo",
    "d" : "doloroso",
    "e" : "elefante",
    "f" : "foca",
    "g" : "ganzo",
    "h" : "hector",
    "i" : "imbecil",
    "j" : "jirafa",
    "k" : "kit",
    "l" : "loco",
    "m" : "mama",
    "n" : "nene",
    "o" : "oscuro",
    "p" : "pendejo",
    "q" : "quebrado",
    "r" : "ruco",
    "s" : "sapo",
    "t" : "tigre",
    "u" : "ubre",
    "v" : "volcan",
    "w" : "wally",
    "x" : "xenofobico",
    "y" : "yema",
    "z" : "zorra",
    "." : "marron",
    "/" : "guitar"
}