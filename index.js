function calcAge(){
    let dob = document.getElementById("dob").value;
    let dob_date = new Date(dob);
    let curr_date = new Date();

    //calc years
    let years = curr_date.getFullYear() - dob_date.getFullYear();

    if((curr_date.getMonth() < dob_date.getMonth()) || ((curr_date.getMonth() === dob_date.getMonth()) && (curr_date.getDate() < dob_date.getDate()))){
        years--;
    }
    document.getElementById("age").value = years;
}