'use client'
import { UserToLogin } from "@/utils/interfaces/user/userLogin.interface";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/zustand/auth/auth.store";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {

     const router = useRouter();
     const { user, loginUser } = useAuthStore();

     const { register, handleSubmit, formState: { errors }, trigger } = useForm<UserToLogin>({
          mode: 'onChange'
     });

     const logedUser  = async ( data : UserToLogin ) => {
          const ready = await loginUser( data )
           if( ready) {
                router.push('/');
           } 
 
     }    

     return (
          <main className="h-[100vh]">
               <section className="flex flex-col items-center justify-center max-w-[450px] bg-orange-300 h-[100%]">
                    <form onSubmit={handleSubmit(logedUser)} className="flex flex-col gap-[10px] p-[20px]">

                         <input type="text" { ...register('email', { required : true })} onBlur={() => trigger('email')}/>
                         { errors?.email?.type == 'required' && <p>Email is required</p>} 

                         <input type="text" { ...register('password', { required : true, minLength: 5, maxLength: 15 })} onBlur={() => trigger('password')}/>
                         { errors?.password?.type == 'required' && <p>Password is required</p>}
                         { errors?.password?.type == 'minLength' && <p>Password must be at least 5 characters long. </p>}
                         { errors?.password?.type == 'maxLength' && <p>Password must have a maximun of 15 characters. </p>}

                         <button type="submit"> Log in</button>
                    </form>
                    <Link href='/auth/signup'>Create an account</Link>
               </section>
          </main>
     )
}

export default Login;