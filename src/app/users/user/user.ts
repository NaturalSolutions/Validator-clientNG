  export interface User {
  id?: number;
  name?: string;
   password?: string;
    firstName?: string;
      LastName?: string;
username?: string;
email?:string;
      address?:{
        street ?:string,
        suite?:string,
        city?:string,
        zipcode?:string,
         geo?:{
          lat?: number,
          lng?: number
        }     
      }
  }