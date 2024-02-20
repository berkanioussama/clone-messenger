import RegisterForm from '@/components/auth/register-form'
import CardWrapper from '@/components/auth/card-wrapper'

const RegisterPage = () => {
    return (
        <div className='w-full h-svh flex justify-center items-center'>
            <CardWrapper 
                headerLabel={'Create new account'}
                backButtonLabel={'Already have an account? Login'} backButtonHref={'/auth/login'} 
                showSocial
            >
                <RegisterForm/>
            </CardWrapper>
        </div>
    );
}
 
export default RegisterPage;