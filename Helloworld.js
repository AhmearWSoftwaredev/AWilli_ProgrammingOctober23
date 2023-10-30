    function salary_beforetaxes(number) {
        let salary = 0
        salary = (number / 52) * 2
        let Pa_taxes = 0.23
        return console.log(salary - (salary * Pa_taxes))  ;
    }


    function greeting () {
        return console.log('hello individual');
    }


//let what_i_make = 56000
//console.log('Every two weeks your check would be ' + (salary_beforetaxes(what_i_make)))

salary_beforetaxes.apply({},[56000])

//if (what_i_make < 100000){
//    console.log('you make less than six figures keep going')
//}
//else if(what_i_make > 100000){
//    console.log('you make over 100000? thats unheard of !')
//}
//else{
//    console.log('else statement being run')
//}