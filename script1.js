console.log("Щоб розпочати, уведіть таку фінкцію: triangle(значення1, 'тип1', значення2, 'тип2')");
console.log("Типи, які ви можете задати:  ");
console.log("• leg - катет");
console.log("• leghypotenuse - гіпотенуза");
console.log("• adjacent angle - прилеглий до катета кут");
console.log("• opposite angle - протилежний до катета кут");
console.log("• angle - один з двох гострих кутів");

function triangle(arg1, type1, arg2, type2) {
    
    console.log("\n>-- "+type1 +" = "+arg1+" | " +type2 + " = " + arg2 +" --<");  

    let a, b, c, alpha, beta;

    let countHypotenuse = 0, countAngles = 0;

    let dictVal = [arg1, arg2];
    let dictType =[type1, type2];
    for (let i=0;i<2;i++){
        let value = dictVal[i];
        let type = dictType[i];
        
        switch(type){
            case "leg":
                if (!a)
                    a = value;
                else b = value;
                break;
            case "hypotenuse":
                c = value;
                countHypotenuse+=1;
                break;
            case "adjacent angle":
            case "opposite angle":
            case "angle":
                countAngles+=1;
                break;
            default:
                console.log("Невідомий тип");
                return "failed";
        }
    }

    for (let i=0;i<2;i++){
        let value = dictVal[i];
        let type = dictType[i];
        
        switch(type){
            case "adjacent angle":
                beta = value;
                alpha = 90 - beta;
                break;
            case "opposite angle":
            case "angle":
                alpha = value;
                beta = 90 - alpha;
                break;
            case "leg":
            case "hypotenuse":
                break;
            default:
                console.log("Невідомий тип");
                return "failed";
        }
    }
   
    if (countAngles==2){
        console.log("Неправильний набір аргументів: задайте як мінімум одну сторону");
        return "failed";
    }
    if (countHypotenuse==2){
        console.log("Неправильний набір аргументів: дві гіпотенузи");
        return "failed";
    }

    if (arg1 <= 0 || arg2 <= 0) {
        console.log("Значення аргументів не можуть бути від'ємними або нульовими.");
        return "failed";
    }
    if ( alpha>=90 || alpha <=0){
        console.log("Некоректні значення кутів (кути мають бути вiд 0 до 90 градусiв не включно).");
        return "failed";
    }

    if (a && b) {
        c = Math.sqrt(a*a+b*b);
        alpha = Math.acos((b*b+c*c-a*a)/(2*b*c)) * 180 / Math.PI;
        beta = 90 - alpha;
    }
    else if (a && c) {
        b = Math.sqrt(c*c-a*a);
        alpha = Math.acos((b*b+c*c-a*a)/(2*b*c)) * 180 / Math.PI;
        beta = 90 - alpha;
    }
    else if (a && alpha){
        b = a*Math.tan(beta * Math.PI / 180); ;
        c = Math.sqrt(a*a+b*b);
    }
    else if (alpha && c){
        b = c*Math.cos(alpha * Math.PI / 180);
        a = c*Math.sin(alpha* Math.PI / 180);
    }

    console.log(`Катет a: ${a.toFixed(3)}`);  
    console.log(`Катет b: ${b.toFixed(3)}`);
    console.log(`Гіпотенуза (c): ${c.toFixed(3)}`);
    console.log(`Гострий кут alpha: ${alpha.toFixed(3)} градуси`);
    console.log(`Гострий кут beta: ${beta.toFixed(3)} градуси`);

    return "success";
}

// triangle(5,"leg",4,"leg");

// triangle(10,"hypotenuse",5,"leg");
// triangle(4,"leg",5,"hypotenuse");

// console.log("--------------------------------------");
// console.log("--------------------------------------");

// triangle(4,"leg",60,"opposite angle");
// triangle(60,"opposite angle",4,"leg");
// triangle(4,"leg",60,"adjacent angle");
// triangle(60,"adjacent angle",4,"leg");


// console.log("--------------------------------------");
// console.log("--------------------------------------");
// console.log("--------------------------------------");


// triangle(4,"hypotenuse",60,"opposite angle");
// triangle(60,"opposite angle",4,"hypotenuse");

// triangle(4,"hypotenuse",60,"adjacent angle");
// triangle(60,"adjacent angle",4,"hypotenuse");

// triangle(10,"hypotenuse",60,"angle");
// console.log(128);
// triangle(60,"angle",10,"hypotenuse");

// console.log("---------неправильний набір аргументів--------");
// triangle(10,"hypotenuse",5,"hypotenuse");
// triangle(10,"angle",5,"angle");
// triangle(60,"adjacent angle",60,"angle");
// console.log("---------неправильне значення аргументів--------");
// triangle(-10,"hyotenuse",5,"angle");
// triangle(90,"angle",5,"leg");
// triangle(60,"leg",-13,"angle");
