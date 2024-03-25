// Prmitive Data Type Describe 

    // 1. Number TYpe Data :- 
        let number = 23;
        console.log(number);
        const numberTypeData = 423;
        console.log(numberTypeData);
        // integer number:
        const intgerNumber = 78;
        // Floating Number 
        const floatingNumber = 7.87;

    //  =====> Number  Methods :-
        // litarel syntex 
        const litarelSyntex = 34;
        // constactor syntex 
        // 1. Number 
        const constactorSyntex = Number(465);
        const constNumber = Number('87885')
        const nanNumber = Number('shfshfsdjf')
        console.log(Number(constNumber))
        console.log(constactorSyntex);
        // 2. Number.isFinite()
        const finiteNumber = 5215821;
        // console.log(Number.isFinite(finiteNumber));
        // 3. Numebr.isInteger
        const num1 = 34;
    //    console.log(Number.isInteger(num1));
       const num2 = 45.89;
    //    console.log(Number.isInteger(num2));
        // 4. Number.isNaN
        let notNumber = '5265';
        console.log(Number.isNaN(notNumber));
        // 5. Number.toFixed
        const fixedNumber = 3.7687685;
        console.log(fixedNumber.toFixed(4));

        // 6. Number.toPrecsion 

        console.log(fixedNumber.toPrecision(4));

        // 7. Number.parserInt()
        console.log(Number.parseInt(fixedNumber));
        // 8. Number.parseFloat()
        console.log(parseFloat(fixedNumber));
        
