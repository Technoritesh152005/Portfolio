import {ThemeToggle} from "../components/ThemeToggle"
import {StarBg} from "../components/StarBg"
import {HeroSection} from "../components/HeroSection"
import {Footer} from "../components/Footer"
export const Home =()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
       <ThemeToggle/>

       {/* Bg effects */}
       <StarBg/>

       <main>
        <HeroSection/>
       </main>

       <Footer/>
    </div>
}