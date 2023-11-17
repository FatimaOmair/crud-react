export const validationUserData=(user)=>{
    let errors={};
    if(user.name.trim()==""){
        errors.name="Name is required";
    }
   else if(user.name.trim().length <3){
        errors.name="Name must be at least 3 characters long";
 
   }

   if(user.email.trim()==""){
    errors.email="Email is required";
}
else if(user.email.trim().length <9){
    errors.email="Email must be at least 9 characters long";

}

if(user.password.trim()==""){
    errors.password="Password is required";
}
else if(user.password.trim().length <6){
    errors.password="Password must be at least 6 characters long";

}

return errors;
}