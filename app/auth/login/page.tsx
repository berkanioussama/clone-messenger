import LoginForm from '@/components/auth/login-form'
import CardWrapper from '@/components/auth/card-wrapper'

const LoginPage = () => {
    return (
        <div className='w-full h-svh flex justify-center items-center'>
            <CardWrapper 
                headerLabel={'Connect with your favorite people'}
                backButtonLabel={'Don`t have an account?'} backButtonHref={'/auth/register'} 
                showSocial
            >
                <LoginForm/>
            </CardWrapper>
        </div>
    );
}
 
export default LoginPage;