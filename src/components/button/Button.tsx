import './Button.scss'

type buttonProps = {
  text: string,
  btn?: string,
};

const Button = ({text, btn = ""}: buttonProps) => {
  return (
    <button className={`btn ${btn}`}>{text}</button>
  )
}

export default Button