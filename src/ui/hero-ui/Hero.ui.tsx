import './Hero.module.css'

const HeroUi = () => {
  return (
    <header className="hero">
      <video className="videoHero" ref={videoRef} src={video} autoPlay muted />
      <video className="videoHeroMovil" ref={videoRef} src={videoMovil} autoPlay muted />
      <div className="titulo relative">
        <h1 className={`fade-text ${isChanging ? "fade-out" : "fade-in"} hero-text`}>
        {text}
      </h1>
      <Formulario/>
      </div>
    </header>
  )
}

export default HeroUi