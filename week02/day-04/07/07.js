'use strict';

var shop_items = ["Cupcake", 2, "Brownie", false]

// Accidentally we added "2" and "false" to the array. 
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)

var index1 = shop_items.indexOf(2);
var index2 = shop_items.indexOf(false);

shop_items[index1] = 'Croissant';
shop_items[index2] = 'Ice cream';