function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
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
