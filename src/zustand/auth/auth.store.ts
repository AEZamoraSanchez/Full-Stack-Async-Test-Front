import { UserToLogin } from "@/utils/interfaces/user/userLogin.interface";
import { create } from "zustand";
import { loginUser } from "./auth-actions/loginUser.action";
import { AuthStore } from "@/utils/interfaces/stores/authStore.interface";
import { UserToSignUp } from "@/utils/interfaces/user/userSignup.interface";
import { signupUser } from "./auth-actions/signupUser.action";

export const useAuthStore = create <AuthStore>((set) => ({
     user: null,
     loginUser: async ( user : UserToLogin ) => {
          try {
               const userLogged = await loginUser ( user )

               set((state : any ) => ({
                    ...state,
                    user: userLogged
               }))

               return true
          }
          catch (error) {
               console.error(error)
          }
     },
     signupUser: async ( user : UserToSignUp ) => {
          try {
               const userRegistered = await signupUser ( user )
               
               console.log(userRegistered)
               set((state : any ) => ({
                    ...state,
                    user: userRegistered
               }))

               return true
          }
          catch (error) {
               console.error(error)
          }
     }

}))