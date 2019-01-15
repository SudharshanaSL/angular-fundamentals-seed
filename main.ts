import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

function ShoppingList() {
    this.groceries = [];
}

ShoppingList.prototype.addItem = function (item) {

    // this is this way
    // this.groceries.push(item);

    // angular way - it prefers this immutable way
    // makes change detection easy
    this.groceries = this.groceries.concat([item]);
}

ShoppingList.prototype.removeItem = function (item) {

    // angular way - it prefers this immutable way
    // makes change detection easy
    this.groceries = this.groceries.filter(function (grocery) {
        return grocery != item;
    })
}

var myList = new ShoppingList();

myList.addItem("Banana");
myList.addItem("Apple")

console.log(myList.groceries)

myList.removeItem("Apple")
console.log(myList.groceries)


// class ABCD {
// 	abc: string;
// }
