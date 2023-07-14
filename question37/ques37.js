function shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("creating a ".concat(size, " with  the following message :'").concat(message, "' "));
}
shirt();
/*function shirt(size:string, message:string="i love typescript"): void{
    console.log(`creating a ${size} with  the following message :'${message}' `);

} */
//shirt("meduim");
/*function shirt(size:string, message:string): void{
    console.log(`creating a ${size} with  the following message :'${message}' `);

} */
//shirt("small", "helloworld");
