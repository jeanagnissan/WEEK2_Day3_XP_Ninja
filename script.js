
/* ***************** Exercice 1 : Checking the BMI ************* */


// 1 - create two objects
// 2 - add a function key in each objects that calculate BMI

let firstPerson = {
    FullName : "Ezekiel kouassi",
    Mass : 65,
    Height : 1.85,
    BMICalculator : function () {
        return (this.Mass/Math.pow(this.Height, 2)); // BMI formula
    }
}

let secondPerson = {
    FullName : "Charlène Cissé",
    Mass : 85,
    Height : 1.70,
    BMICalculator : function () {
        return (this.Mass/Math.pow(this.Height, 2)); // BMI formula
    }
}

// 3 - create a JS function that compares the BMI of both objects

function compareBMI(firstPerson, secondPerson) {

    /**
     * @description : cette fonction compare 2 object person et determine qui des deux
     * à le plus grand BMI.
     * @param : firstPerson
     * @param : secondPerson
     * @returns
     */
    
    if(firstPerson.BMICalculator() > secondPerson.BMICalculator()) {
        console.log(`the person who have the largest BMI is : ${firstPerson.FullName}`);
        return;
    }
    console.log(`the person who have the largest BMI is : ${secondPerson.FullName}`);
}

// 4 - call the function for display the name of the person who has the largest BMI

compareBMI(firstPerson, secondPerson);

/* ***************** End Exercice 1 ************* */

/* ***************** Exercice 2 : Grade Average ***************** */

// variable

let gradesList = [15, 16, 8, 7, 51, 96, 0, 1];


// questions 1 and 2

function findAvg(gradesList) {

    /**
     * @description : cette fonction permet de calculer la moyenne d'une personne a l'aide
     * de ses notes. et elle appelle une autre fonction en son sein qui deternime si l'utilisateur
     * dois passer non
     * @param : gradesList -> la liste des notes de l'utilisateur
     * @param : average > reprensente la moyenne
     * @param : sum -> represente la somme des notes
     */
    
    let average = 0;
    let sum = 0;
    for(let grade of gradesList) {
        sum+=grade;
    }

    average = sum/gradesList.length; // calcule de la moyenne

    console.log(`The average is : ${average}`);
    checkIfAverageIsGood(average); // appel de la fonction de vérification

}

// questions 3 and 4

function checkIfAverageIsGood(average) {

    /**
     * @description : cette fonction vérifie la validité de la moyenne
     * @param : average -> represente la moyenne
     */
    
    if(average > 65) {
        console.log("Successfully you can pass!");
        return;
    }
    console.log("wooh, sorry you faild, you must repeat the course");
}

findAvg(gradesList);

/* ***************** End Exercice 2 ***************** */

/**
 * @author : Konate Mamadou Kernel
 */
