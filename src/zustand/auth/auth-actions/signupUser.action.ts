import { ErrorAuth } from "@/utils/interfaces/error/errorAuth.interface";
import { User } from "@/utils/interfaces/user/user.interface";
import { UserToSignUp } from "@/utils/interfaces/user/userSignup.interface";

export const signupUser = async ( user : UserToSignUp ) : Promise<User> => {
     try {
          console.log(user)
          const response = await fetch(`${process.env.URL_BACKEND!}/auth/signup`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.AUTH_TOKEN!}`
               },
               body: JSON.stringify(user)
          })

          const result : User | ErrorAuth = await response.json();

          if ('error' in result) {
               throw new Error(result.error);
          }          
          
          return result
     }
     catch (error) {
          throw error;
     }
} 