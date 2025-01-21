//callback - function inside another function inside the argument

// function submitForm(submit,db){
//     var [dbName,comment] = db()
//     console.log("DB name is SECE",dbName);
//     console.log(submit)
// }
// function database(){
//     dbName = "SECE"
//     return [dbName,"Data Stored Successfully"]
// }
// submitForm("Form validation Successful",database)

function submitForm(submit,isFormVaild){ //main function
    if(isFormVaild){
        console.log("Fields Validated Successfully")
        console.log(submit)
    }
    else{
        console.log("Form Validation Failed")
        console.log("Form Submission Unsuccessful")
    }
}
function formValidation(){
    email = "sece@sece.ac.i"
    password = "123456"
    if(email === "sece@sece.ac.in" && password){
        return true
    }else{
        return false
    }
}
submitForm("hi",formValidation)