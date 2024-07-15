import { UserToLogin } from "./userLogin.interface"

export interface UserToSignUp extends UserToLogin {
     name: string
}