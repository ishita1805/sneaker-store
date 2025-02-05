
import { useContext } from "react"
import Navigation from "../components/navigation"
import Footer from "./Footer"
import { DBContext } from "../context"
import Icon from '../components/icon'
import icons from '../components/icon/icons.json'



const Login = () => {
  const { signIn } = useContext(DBContext);
  
  return (
    <div className="relative size-full flex flex-col items-center justify-start">
      <Navigation />
      <div className="flex w-[100vw] min-h-[100vh] flex-col items-center justify-center px-12 py-24">
        <div className="font-maharlika text-3xl mb-8">Wear your story</div>
        <div className="mb-1 font-maga text-base font-thin">It's great to have you here.</div>
        <div className="mb-8 font-maga text-base font-thin">Join my journey to transform fast fashion, one art-work at a time.</div>
        <button onClick={signIn} className="flex flex-row items-center gap-6 outline-none py-2 px-4 bg-neutral-100 text-neutral-700 border-solid border-2 border-neutral-200 rounded-lg text-base">
          Login with Google
          <Icon icon={icons.google} className="h-6 w-6" />
          </button>
      </div>
      <Footer />
    </div>
  )
}

export default Login