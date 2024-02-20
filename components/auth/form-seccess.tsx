import {CheckCircledIcon} from '@radix-ui/react-icons'

interface FormSuccessProps {
    message?: string;
}

const FormSuccess = ({message}: FormSuccessProps) => {

    if(!message) return null;
    
    return (
        <div className='flex gap-x-2 justify-center items-center p-3 text-sm bg-emerald-500/15 text-emerald-500 rounded-md'>
            <CheckCircledIcon className='w-4 h-4'/>
            <p>{message}</p>
        </div>
    );
}
 
export default FormSuccess;