interface myobject 
{
    [key:string]: any;
}

function createObject (items:myobject):myobject
{
    return items;
}

const object1 = createObject(
    {
        fruit :"apple",
        colour:"red",
        qunatity:"5",


    }
);

console.log("object1", object1);
console.log("object1", object1.fruit);
console.log("object1", object1.colour);
console.log("object1", object1.qunatity);
