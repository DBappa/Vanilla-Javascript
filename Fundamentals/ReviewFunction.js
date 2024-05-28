
const calcCurrentAge= function(dob){
    return 2024-dob;
}

const retireAge = currentAge => 60-currentAge;

function calculateRetirementAge(name,dob){

    const calculateCurrentAge=calcCurrentAge(dob)
    const retirementAge= retireAge(calculateCurrentAge);

    logRetireAge(name,retirementAge);
}


function logRetireAge(name,retirementAge){

    if(retirementAge > 0){
        console.log(`Mr ${name} has ${retirementAge} years to retire.`)
    }else{
        console.log(`Mr ${name} has ${retirementAge} is already retired.`)
    }
}

calculateRetirementAge('Bappa',1990);