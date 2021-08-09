// PROBLEM 1 (Seer To Mon)

function seerToMon(seer){
    // Handling Invalid Input(Negative Number)
    if(seer < 0){
        let error = 'Invalid Input,The Given Number Is A Negative Number';
        return error; //Returning Error String
    }
    //Converting Seer To Mon
    let mon = seer / 40.0;
    return mon;//Returning Answer
}


//PROBLEM 2 (Total Sales)
 
function totalSales(shirtAmount, pantAmount, shoeAmount){  
    // Handling Invalid Input Of Negative Number
    if(shirtAmount < 0 || pantAmount < 0 || shoeAmount < 0){
        let error = 'Invalid Input,All Of Three Three Input Must Be Positive Number Or Zero';
        return error; //Returning Error String
    }
    let totalAmount = (shirtAmount * 100) + (pantAmount * 200) + (shoeAmount * 500); //Calculating Total Sales
    return totalAmount;//Returning The Calculated Total Sales
}


//PROBLEM 3 (Delivery Cost)

function deliveryCost(tShirtAmount){
    // Handling Invalid Input If Invalid Negative Number Is Received As Parameter
    if( tShirtAmount < 0){ 
        let error = 'Invalid Input,Tshirt Amount Can not be A Negative Number';
        return error; //Returning Error String
    }
    let totalDeliveryCost = 0;
    if( tShirtAmount <= 100){
        totalDeliveryCost = tShirtAmount * 100; //Less Than Equal 100 TShirt Delevery Cost
        return totalDeliveryCost;
    }
    else if( tShirtAmount <= 200){
        totalDeliveryCost = (100 * 100) + ((tShirtAmount - 100) * 80) ; //Less Than Equal 200 TShirt Delevery Cost
        return totalDeliveryCost;
    }
    else{
        totalDeliveryCost = (100 * 100) +(100 * 80) +((tShirtAmount - 200) * 50); //More Than 200 TShirt Delevery Cost
        return totalDeliveryCost;
    }
}


//PROBLEM 4 (Perfect Friend)

function perfectFriend(friendList){
    // Handling Invalid Input And Returning Error String
    if(friendList.length = 0){ 
        let error = "Can't Procced,The Inputed String Array Is Empty";
        return error; //Returning Error String

    }
    //Checking For First Five Length String And Returning The String
    for(let i = 0; i < friendList.length; i++){
        //If Answer Is Found,Then Returning It Immidiately
        if(friendList[i].length == 5){
            return friendList[i];
        }
    }
    //If Input Is Valid But There Is No Desired Answer Found
    let ansNotFound = "Answer Did Not Find For The Given Input";
    return ansNotFound;//Returning An String For This Type Of Case
}



