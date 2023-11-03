import './styles.sass'

interface CustomButtonProps {
  children: React.ReactNode
  backgroundColor?: string
  onClick?: () => void
}

const CustomButton = ({ children, backgroundColor, onClick }: CustomButtonProps) => {
  return (
    <button className="customButton"style={{ backgroundColor }} onClick={onClick}> 
      {children}
    </button>
  )
}

export default CustomButton