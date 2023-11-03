import './styles.sass'

interface CustomInputProps {
    placeholder?: string
} 

const index = ({ placeholder }: CustomInputProps) => {
    return <input type='text' className='customInput' placeholder={placeholder} />
}

export default index
