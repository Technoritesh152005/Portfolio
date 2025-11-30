import {ThemeToggle} from "../components/ThemeToggle"
import {StarBg} from "../components/StarBg"
import { Navbar } from "../components/Navbar"
import {HeroSection} from "../components/HeroSection"
import {Footer} from "../components/Footer"
export const Home =()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
       <ThemeToggle/>

       {/* Bg effects */}
       <StarBg/>

       <Navbar/>

       <main>
        <HeroSection/>
       </main>

       <Footer/>
    </div>
}