import { User } from "../user/user.interface";
import { UserToLogin } from "../user/userLogin.interface";
import { UserToSignUp } from '../user/userSignup.interface';

export interface AuthStore {
     user: null | User,
     loginUser: ( user : UserToLogin) => Promise<true | undefined>,
     signupUser: ( user : UserToSignUp) => Promise<true | undefined>
}