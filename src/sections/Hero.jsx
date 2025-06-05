import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"

const Hero = () => {
  return (
    <section className="flex justify-center min-h-screen overflow-hidden item-start md:items-start md:justify-start c-space">
        <HeroText />
        <ParallaxBackground />
        <figure className="absolute inset-0" style={{width:"100vw", height: "100vh"}}></figure>
    </section>
  )
}

export default Hero
