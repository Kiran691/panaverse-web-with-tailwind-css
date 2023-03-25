import { FC } from "react"


const Button:FC<{text:string}> = ({text}) => {
  return (
    <button className="bg-[#00616C] text-white px-8 py-4 rounded-full shadow-lg text-xl font-medium hover:bg-red-500 duration-300">{text}</button>
  )
}

export default Button