import React from 'react'
import { useI8n } from '../../hooks/useI8n'
import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from '../buttons/SecondaryButton'
import './Hero.css'

const Hero = () =>{
    const {t} = useI8n()

    const handelStartlearning = () =>{
        console.log("Start Learning")   
    }

    const handelDownload = ()=>{
        console.log("Download App")
    }

    return(
        <section className="hero">
            <div className="hero-container">
                <div className="hero-badge">
                    <span className="badge-status">
                        {t('hero.badge')}
                    </span>
                </div>

                <h1 className="herotitle hero-heading">
                    {t1('hero.title1')}
                </h1>

                <p className="hero-title text description">
                    {t('hero.description')}
                </p>


                <div className="hero-sections">
                    <PrimaryButton onClick={handelStartlearning}>
                        <span className="button-icons">cap</span>
                        {t('hero.startLearning')}
                    </PrimaryButton>

                    <SecondaryButton onClick={handelDownload}>
                        <span className="button-icons">download</span>
                        {t('hero.download')}
                    </SecondaryButton>
                </div>
            </div>
        </section>
    )
}

export default Hero;