import './styles.sass'

interface CustomInputProps {
    placeholder?: string
    icon?: React.ReactNode
}

const index = ({ placeholder, icon }: CustomInputProps) => {
    return (
        <>
            <div className='customInput__container' >
                <input
                    type='text'
                    className='customInput'
                    placeholder={placeholder}
                />
                <div className='customInput__icon'>
                    {icon}
                </div>
            </div>
        </>
    )
}

export default index
