import {ExclamationTriangleIcon} from '@radix-ui/react-icons'

interface FormErrorProps {
    message?: string;
}

const FormError = ({message}: FormErrorProps) => {

    if(!message) return null;
    
    return (
        <div className='flex gap-x-2 justify-center items-center p-3 text-sm bg-destructive/15 text-destructive rounded-md'>
            <ExclamationTriangleIcon className='w-4 h-4'/>
            <p>{message}</p>
        </div>
    );
}
 
export default FormError;