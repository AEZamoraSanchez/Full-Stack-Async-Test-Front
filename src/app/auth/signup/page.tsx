'use client'
import { UserToSignUp } from "@/utils/interfaces/user/userSignup.interface";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/zustand/auth/auth.store";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {

          const router = useRouter();
          const { signupUser, user } = useAuthStore();

          const { register, handleSubmit, formState: { errors }, trigger } = useForm<UserToSignUp>({
               mode: 'onChange'
          });
     
          const registerUser  = async ( data : UserToSignUp ) => {
               const ready = await signupUser( data )
               if( ready) {
                    router.push('/');
               } 
          }    
     
          return (
               <main className="h-[100vh]">
                    <section className="flex flex-col items-center justify-center max-w-[450px] bg-orange-300 h-[100%]">
                         <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-[10px] p-[20px]">
                              
                              <input type="text" { ...register('name', { required : true, minLength: 5, maxLength: 15 })} onBlur={() => trigger('name')} />
                              { errors.name?.type == 'required' && <p>Username is required.</p>}
                              { errors.name?.type == 'minLength' && <p>Username must be at least 5 characters long. </p>}
                              { errors.name?.type == 'maxLength' && <p>Username must have a maximun of 15 characters. </p>}
     
                              <input type="text" { ...register('email', { required : true })} onBlur={() => trigger('email')}/>
                              { errors.email && <p>Email is required</p>} 
     
                              <input type="text" { ...register('password', { required : true, minLength: 5, maxLength: 15 })}onBlur={() => trigger('password')}/>
                              { errors.password?.type == 'required' && <p>Password is required</p>}
                              { errors?.password?.type == 'minLength' && <p>Password must be at least 5 characters long. </p>}
                              { errors?.password?.type == 'maxLength' && <p>Password must have a maximun of 15 characters. </p>}
     
                              <button type="submit"> Log in</button>
                         </form>

                         <Link href='/auth/login'>You have an account</Link>
                    </section>
               </main>
          )
     }

export default Signup;