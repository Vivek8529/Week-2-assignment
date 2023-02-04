export const isEmail=(email) =>{
    if(typeof email !== "string"){
        return false;
    }
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        email)
    ) {
      return true;
    }
}
export const isValid=(user) =>
    isEmail(user.email) && user.password && user.fname && user.lname