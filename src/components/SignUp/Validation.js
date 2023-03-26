export default function validation(entrees){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(entrees.email === ""){
        errors.email = "Email is required"
    }
    else if(!email_pattern.test(entrees.email)){
        errors.email = "Email is not correct.Check your syntax"
    }




    if(entrees.password === ""){
        errors.password = "Password is required"
    }
    if(!password_pattern.test(entrees.password)){
        errors.password = "Email is not correct.Check your syntax"
    }

    return errors
}