// window.onload = function(){
var main_loop = true;
while (main_loop) {
    alert("Welcome to Los Pollos Hermanos!");

    var greetings_loop = true;
    var categ_loop = false;
    var meal_loop = true;
    var beve_loop = true;
    var dessert_loop = true; 
    var qty_loop = true;
    var type_loop = true;

    var order_index = 0;

    var Chosen_Food = [];
    var Chosen_Food_Price = [];
    var Chosen_Food_Qty = [];
    
    while (greetings_loop) {
        var cust_name = prompt("Please Enter your name: ");

        if (cust_name == null) {
            break;
        } else if (cust_name == "") {
            alert("Invalid Input, Please Enter a name");
            continue;
        } else {
            alert("Welcome " + cust_name + "! May I take your Order");
            greetings_loop = false;
            categ_loop = true;
        }
    }

    while (categ_loop) {
        meal_loop = true;
        beve_loop = true;
        dessert_loop = true;
        type_loop = true;
        qty_loop = true;

        var User_categ = prompt("Categories: \nA.) Meals\nB.) Beverages\nC.) Desserts\n\nPress Cancel to Cancel Order\nChoose your Category: ");

        if (User_categ == null) {
            alert("Thank You for Visiting Los Pollos Hermanos!");
            categ_loop = false;
            main_loop = false;
        } else if (User_categ == "") {
            alert("Invalid Input, Please select a Category");
            continue;
        } else if (User_categ == "A" || User_categ == "a") {
            Meals_Categ();
        }else if (User_categ == "B" || User_categ == "b") {
            Beverages_Categ();
        }else if (User_categ == "C" || User_categ == "c") {
            Desserts_Categ();
        }else {
            alert("Invalid Input, Pick a Category");
            continue;
        }
    }
}


function Meals_Categ() {
    while (meal_loop) {
        var meal_order = prompt("Los Pollos Hermanos Meals!\nA1 - 1pc Chicken Meal\nA2 - Ala King Zinger Steak Ala Carte\nA3 - Chicken Chops Meal\nA4 - Sisig Rice Bowl\nA5 - Spaghetti\n\nPress Cancel to Go Back\nChoose a Meal:");
        if (meal_order == null) {
            categ_loop = true;
            return;
        } else if (meal_order == "") {
            alert("Invalid Input, Please select a Meal");
            continue;
        } else if (meal_order == "A1" || meal_order == "a1") {
            Meal_Type(89, 20, "1pc Chicken with Rice");

        } else if (meal_order == "A2" || meal_order == "a2") {
            Meal_Type(99, 20, "Ala King Zinger Steak Ala Carte");

        } else if (meal_order == "A3" || meal_order == "a3") {
            Meal_Type(85, 20, "Chicken Chops");

        } else if (meal_order == "A4" || meal_order == "a4") {
            Meal_Type(105, 30, "Sisig Rice Bowl");

        } else if (meal_order == "A5" || meal_order == "a5") {
            Meal_Type(50, 45, "Spaghetti");

        } else {
            alert("Invalid Input, Pick a Meal")
            continue;
        }
    }    
}

function Meal_Type(solo_prc, meal_addprc, meal_name) {
    while (type_loop) {
        var type = prompt("Los Pollos Hermanos!\n" + meal_name + "\n\nMeal or Solo?\nA.) Meal (With Regular Drinks and Fries)     +₱ " + meal_addprc + "\nB.) Solo                                                           ₱ " + solo_prc + "\n\nPress Cancel to Go Back");
        if (type == "") {
            alert("Invalid Input, Please select a Type");
            continue;
        } else if (type == null) {
            meal_loop = true;
            return;
        } else if (type == "A" || type == "a") {
            var meal_prc = meal_addprc + solo_prc;
            Meal_qty(meal_name, meal_prc, "Meal");
        } else if (type == "B" || type == "b") {
            Meal_qty(meal_name, solo_prc, "Solo");
        } else {
            alert("Invalid Input, Please select a Type");
            continue;
        }
    }
}

function Meal_qty(meal_name, price, type) {
    var total_price;
    while(qty_loop){
        var qty = prompt("Los Pollos Hermanos!\n\nHow many " + meal_name + "?\n\nPress Cancel to Go back");
        
        if (qty == null){
            type_loop = true;
            return;
        } else if (qty == "") {
            alert("Invalid Input, Please input a Number");
            continue;
        } else if(isNaN(qty) || qty == "0"){ //isNaN returns true if it is Not A Number
            alert("Invalid Input, Please input a Number");
            continue;
        } else {
            total_price = Number(qty) * Number(price);
            var confirmation = confirm("Your Order (" + qty + ") " + type + " " + meal_name + "    ₱ " + total_price);
            if (confirmation == true) {
                Chosen_Food[order_index] = type + " " + meal_name;
                Chosen_Food_Qty[order_index] = qty;
                Chosen_Food_Price[order_index] = total_price;
                if (OrderAgain()) {
                    categ_loop = true;
                    qty_loop = false;
                    type_loop = false;
                    meal_loop = false;
                    return;
                } else {
                    main_loop = false;
                    categ_loop = false;
                    qty_loop = false;
                    type_loop = false;
                    meal_loop = false;
                }
                
            } else if(confirmation == false){
                continue;
            }
        }
    }
}

function OrderAgain() {
    var isOrderAgain = confirm("Do you want to order again?");

    if (isOrderAgain) {
        if (Chosen_Food.length == 5) {
            alert("Order Limit Has Been Reached!");
            OrderReceipt();
            alert("Thank you for choosing Los Pollos Hermanos!");
            return false;
        } else {
            order_index++;
            return true;
        }
    } else {
        OrderReceipt();
        alert("Thank you for choosing Los Pollos Hermanos!");
        return false;
    }
}

function Beverages_Categ() {
    while (beve_loop) {
        var beve_order = prompt("Los Pollos Hermanos Beverages!\nB1 - Sodas\nB2 - Ice Tea\nB3 - Pineapple Juice\nB4 - Iced Americano\nB5 - Coke Float\n\nPress Cancel to Go Back\nChoose a Meal:");
        if (beve_order == null) {
            categ_loop = true;
            return;
        } else if (beve_order == "") {
            alert("Invalid Input, Please select a Drink");
            continue;
        } else if (beve_order == "B1" || beve_order == "b1") {
            Beve_Type(30, 35, 40, "Soda");

        } else if (beve_order == "B2" || beve_order == "b2") {
            Beve_Type(25, 35, 45, "Ice Tea");

        } else if (beve_order == "B3" || beve_order == "b3") {
            Beve_Type(50, 65, 80, "Pineapple Juice");

        } else if (beve_order == "B4" || beve_order == "b4") {
            Beve_Type(50, 60, 70, "Iced Americano");

        } else if (beve_order == "B5" || beve_order == "b5") {
            Beve_Type(35, 45, 55, "Coke Float");

        } else {
            alert("Invalid Input, Pick a Drink")
            continue;
        }
    }
} 

function Beve_Type(reg_prc, med_prc, larg_prc, beve_name) {
    var soda_loop = true;
    var soda_flavor;
    while (type_loop) {
        if (beve_name == "Soda") {
            while (soda_loop) {
                var soda_type = prompt("Los Pollos Hermanos Sodas!\n\nType of Sodas:\nA.) Coke\nB.) Sprite\nC.) Royal\nD.) Pepsi\n\nPress Cancel to Go back");
                if (soda_type == "") {
                    alert("Invalid Input, Please select a Type of Soda");
                    continue;
                } else if (soda_type == null) {
                    beve_loop = true;
                    return;
                } else if (soda_type == "A" || soda_type == "a") {
                    soda_flavor = "Coke";
                    soda_loop = false;
                } else if (soda_type == "B" || soda_type == "b") {
                    soda_flavor = "Sprite";
                    soda_loop = false;
                } else if (soda_type == "C" || soda_type == "c") {
                    soda_flavor = "Royal";
                    soda_loop = false;
                } else if (soda_type == "D" || soda_type == "d") {
                    soda_flavor = "Pepsi";
                    soda_loop = false;
                } else {
                    alert("Invalid Input, Please select a Type of Soda");
                    continue;
                }
            }
        }

        var size = prompt("Los Pollos Hermanos!\n\nPick Size:\nA.) Regular (16oz)     ₱ " + reg_prc + "\nB.) Medium (20oz)    ₱ " + med_prc + "\nC.) Large (25oz)        ₱ " + larg_prc + "\n\nPress Cancel to Go back");

        if (size == "") {
            alert("Invalid Input, Please select a Size of Soda");
            continue;
        } else if (size == null) {
            if (beve_name == "Soda") {
                soda_loop = true;
                continue;
            } else {
                beve_loop = true;
                return;
            }
        } else if (size == "A" || size == "a") {
            if (beve_name == "Soda") {
                beve_qty((soda_flavor + " " + beve_name), reg_prc, "Regular")
            } else {
                beve_qty(beve_name, reg_prc, "Regular")
            }
        } else if (size == "B" || size == "b") {
            if (beve_name == "Soda") {
                beve_qty((soda_flavor + " " + beve_name), med_prc, "Medium")
            } else {
                beve_qty(beve_name, med_prc, "Medium")
            }
        } else if (size == "C" || size == "c") {
            if (beve_name == "Soda") {
                beve_qty((soda_flavor + " " + beve_name), larg_prc, "Large")
            } else {
                beve_qty(beve_name, larg_prc, "Large")
            } 
        } else {
            alert("Invalid Input, Please select a Size of Soda");
            continue;
        }
    }
}

function beve_qty(beve_name, price, type) {
    var total_price;
    while (qty_loop) {
        var qty = prompt("Los Pollos Hermanos!\n\nHow many " + type + " " + beve_name + "?\n\nPress Cancel to go back");

        if (qty == null) {
            type_loop = true;
            return;
        } else if (qty == "") {
            alert("Invalid Input, Please input a Number");
            continue;
        } else if (isNaN(qty) || qty == "0") {
            alert("Invalid Input, Please input a Number");
            continue;
        } else {
            total_price = Number(qty) * Number(price);
            var confirmation = confirm("Your Order (" + qty + ") " + type + " " + beve_name + "    ₱ " + total_price);
            if (confirmation == true) {
                Chosen_Food[order_index] = type + " " + beve_name;
                Chosen_Food_Qty[order_index] = qty;
                Chosen_Food_Price[order_index] = total_price;
                if (OrderAgain()) {
                    categ_loop = true;
                    qty_loop = false;
                    type_loop = false;
                    meal_loop = false;
                    beve_loop = false;
                    return;
                } else {
                    main_loop = false;
                    categ_loop = false;
                    qty_loop = false;
                    type_loop = false;
                    meal_loop = false;
                    beve_loop = false;
                }
                
            } else if(confirmation == false){
                continue;
            }
        }
    }
}

function Desserts_Categ() {
    while (dessert_loop) {
        var dessert_order = prompt("Los Pollos Hermanos Desserts!\n\nC1 - Sundae\nC2 - Pie\nC3 - Brownies       ₱ 35");

        if (dessert_order == null) {
            categ_loop = true;
            return;
        } else if (dessert_loop == "") {
            alert("Invalid Input, Please select a Dessert");
            continue;
        } else if (dessert_order == "C1" || dessert_order == "c1") {
            dessert_type("Sundae", 29);
        } else if (dessert_order == "C2" || dessert_order == "c2") {
            dessert_type("Pie", 39);
        } else if (dessert_order == "C3" || dessert_order == "c3") {
            dessert_type("Brownies", 35);
        } else {
            alert("Invalid Input, Please select a Dessert");
            continue;
        }
    }
}

function dessert_type(des_name, price) {
    var sundae_loop = true;
    var pie_loop = true;

    var sundae_flavor;
    var pie_flavor;
    var flavor;
    while (type_loop) {
        if (des_name == "Pie") {
            while (pie_loop) {
                pie_flavor = prompt("Los Pollos Hermanos!\n\nPick a Sundae Flavor:\nA.) Apple        ₱ " + price + "\nB.) Chocolate      ₱ " + price + "\nC.) Peach Mango        ₱ " + price + "\nD.) Ube        ₱ " + price + "\nE.) Buko       ₱ " + price + "\n\nPress Cancel to Go back");

                if (pie_flavor == null) {
                    dessert_loop = true;
                    return;
                } else if (pie_flavor == "") {
                    alert("Invalid Input, Please select a Flavor");
                    continue;
                } else if (pie_flavor == "A" || pie_flavor == "a") {
                    flavor = "Apple";
                    dessert_qty(des_name, price, flavor);
                } else if (pie_flavor == "B" || pie_flavor == "b") {
                    flavor = "Chocolate";
                    dessert_qty(des_name, price, flavor);
                } else if (pie_flavor == "C" || pie_flavor == "c") {
                    flavor = "Peach Mango";
                    dessert_qty(des_name, price, flavor);
                } else if (pie_flavor == "D" || pie_flavor == "d") {
                    flavor = "Ube";
                    dessert_qty(des_name, price, flavor);
                } else if (pie_flavor == "E" || pie_flavor == "e") {
                    flavor = "Buko";
                    dessert_qty(des_name, price, flavor);
                } else {
                    alert("Invalid Input, Please select a Flavor");
                    continue;
                }
                pie_loop = false;
            }
        } else if (des_name == "Sundae"){
            while (sundae_loop) {
                sundae_flavor = prompt("Los Pollos Hermanos!\n\nPick a Pie Flavor:\nA.) Hot Fudge       ₱ " + price + "\nB.) Hot Caramel        ₱ " + price + "\n\nPress Cancel to Go back");

                if (sundae_flavor == null) {
                    dessert_loop = true;
                    return;
                } else if (sundae_flavor == "") {
                    alert("Invalid Input, Please select a Flavor");
                    continue;
                } else if (sundae_flavor == "A" || sundae_flavor == "a") {
                    flavor = "Hot Fudge";
                    dessert_qty(des_name, price, flavor);
                } else if (sundae_flavor == "B" || sundae_flavor == "b") {
                    flavor = "Hot Caramel";
                    dessert_qty(des_name, price, flavor);
                } else {
                    alert("Invalid Input, Please select a Flavor");
                    continue;
                }
                sundae_loop = false;
            }
        } else if (des_name == "Brownies") {
            dessert_qty(des_name, price, "");
        }
    } 
}

function dessert_qty(des_name, price, flavor) {
    var total_price;
    while (qty_loop) {
        var qty = prompt("Los Pollos Hermanos!\n\nHow many " + flavor + " " + des_name + "?\n\nPress Cancel to go back");

        if (qty == null) {
            type_loop = true;
            return;
        } else if (qty == "") {
            alert("Invalid Input, Please input a Number");
            continue;
        } else if (isNaN(qty) || qty == "0") {
            alert("Invalid Input, Please input a Number");
            continue;
        } else {
            total_price = Number(qty) * Number(price);
            var confirmation = confirm("Your Order (" + qty + ") " + flavor + " " + des_name + "    ₱ " + total_price);
            if (confirmation == true) {
                Chosen_Food[order_index] = flavor + " " + des_name;
                Chosen_Food_Qty[order_index] = qty;
                Chosen_Food_Price[order_index] = total_price;
                if (OrderAgain()) {
                    categ_loop = true;
                    qty_loop = false;
                    type_loop = false;
                    meal_loop = false;
                    beve_loop = false;
                    dessert_loop = false;
                    return;
                } else {
                    main_loop = false;
                    categ_loop = false;
                    qty_loop = false;
                    type_loop = false;
                    meal_loop = false;
                    beve_loop = false;
                    dessert_loop = false;
                }
                
            } else if(confirmation == false){
                continue;
            }
        }
    }
}

function OrderReceipt() {
    for (i = 0; i < Chosen_Food.length; i++) {
        document.write(Chosen_Food[i] + " </br>");
        document.write("₱ " +Chosen_Food_Price[i] + " </br>");
        document.write(Chosen_Food_Qty[i] + " qty</br>");
    }
}