function sandwich(...items:string[]): void 
{
    console.log("sandwich order");
    console.log("--------------");
    console.log("items" + items.join(","));
    console.log("num of items" + items.length);
    console.log("enjoy your sandwich");
    console.log();
}

sandwich("bread", "cheese");
sandwich("bread", "turkey");
sandwich("bread", "salami");