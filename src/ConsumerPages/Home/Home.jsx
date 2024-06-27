import styles from './Home.module.css'
import teste from '../../assets/img/pechinchaLogo.svg'
import logosimple from '../../assets/img/logo_simple.svg'

import star from '../../assets/img/star.svg'
import starYellow from '../../assets/img/starYellow.svg'
import CategoryProd from '../../components/CategoryProd/CategoryProd';
import step from '../../assets/img/etapa (1).svg'
import step2 from '../../assets/img/step22.svg'
import kaique from '../../assets/img/kaiqueAvalia.jpg'
import React, { useRef } from 'react';
import TituloFormato from '../../components/TituloFormato/TituloFormato';
import { useState, useEffect } from 'react'
// import carrossel
import { Swiper, SwiperSlide } from 'swiper/react';
// imports banner
import Banner from '../../components/Banner/Banner';
import imgBanner from '../../assets/img/banner.svg';
import CarouselProd from '../../components/CarouselProd/CarouselProd';
// imports mercados cadastrados
import mercadoLogo from '../../assets/img/mercadodia.svg'
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import rateimg from '../../assets/img/altoFalante.png'
import amigao from '../../assets/img/Market/amigao.png'
import violeta from '../../assets/img/Market/violeta.png'
import recoy from '../../assets/img/Market/ricoy.png'
import { useTranslation } from "react-i18next";
import bannerc from '../../assets/img/bannerc.png' 

function Home() {
    const { t } = useTranslation();

    const [slidesPerView, setSlidePerView] = useState(1)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 720) {
                setSlidePerView(1);
            } else {
                setSlidePerView(2);
            }
        }

        handleResize();
    }, [])


    const descRef = useRef();
    const titleRef = useRef();

    const descRef3 = useRef();



    function step1() {
        if (descRef.current || titleRef.current) {
            descRef.current.innerHTML = `${t("text01")}`;
            titleRef.current.innerHTML = `${t("Como chega os produtos?")}`;

        }
    }

    function alterarConteudo() {
        if (descRef.current || titleRef.current) {
            descRef.current.innerHTML = `${t("text02")}`;
            titleRef.current.innerHTML = `${t("2. Como encontrar os produtos?")}`;

        }
    }

    function step3() {
        if (descRef.current || titleRef3.current) {
            descRef.current.innerHTML = `${t("text03")}`;
            titleRef.current.innerHTML = `${t("3. E para comprar?")}`;

        }
    }

    return (
        <div>
            <HeaderConsumer />
            <main className={styles.container_home} >
                {/*  Categorias dos produto*/}
                <section className={styles.hero_section}>
                    <div className={styles.container_slogan} id='container'>
                        <img src={teste} alt="logo" className={styles.img_logo} />
                        <img src={logosimple} alt="logo" className={styles.img_logo} id={styles.logo_responsive}/>

                        <h2 className={styles.slogan_subtitle}>{t("slogan01")}</h2>

                        <div className={styles.search}>
                            <input type="search" placeholder='Pechinchar' className={styles.search_bar} />
                            <button className={styles.btn_bar}><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>


                    <img src={star} alt="star" className={styles.star} />

                    <img src={starYellow} alt="star" className={styles.star_2} />
                </section>

                {/*  Categorias dos produto*/}

                <section className={styles.categorySection}>
                    <header className={styles.text}>
                        <h2 className={styles.title}>{t("slogan")} <span className={styles.destaque}>Pechincha</span></h2>
                        <p className={styles.subtitle}>{t("EscolhaCategoria")}</p>
                    </header>

                    <CategoryProd />
                </section>

                {/* Como funciona a chegada dos produtos na plataforma*/}

                <section className='background'>
                    <div className={styles.comoFunciona}>
                        <TituloFormato categoria={t("Como funciona?")} />

                        <div className={styles.container_content}>
                            <article className={styles.passos}>

                                <div className={styles.boxLeft}>
                                    <div className={styles.passo} onClick={step1}>
                                        <span>1</span>
                                    </div>
                                    <div className={styles.passo} onClick={alterarConteudo}>
                                        <span>2</span>
                                    </div>
                                    <div className={styles.passo} onClick={step3}>
                                        <span>3</span>
                                    </div>
                                    <div className={styles.passo}>
                                        <span>4</span>
                                    </div>
                                </div>

                                <h2 className={styles.title_tutorial} ref={titleRef}>{t("Como chega os produtos?")}</h2>
                                <p className={styles.desc} ref={descRef}>
                                    {t("text01")}
                                </p>
                            </article>

                            <div className={styles.boxRight}>

                                <Swiper
                                    // controla quantos slides por foto quero que apareça
                                    slidesPerView={slidesPerView}
                                // define se é clicavel ou não

                                >

                                    <SwiperSlide>
                                        <img src={step} alt="Banner Promocional" className={styles.step_img} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img src={step2} alt="Banner Promocional" className={styles.step_img} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img src={step} alt="Banner Promocional" className={styles.step_img} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Promoções */}

                <section className="background">
                    <div className={styles.container_promotion} id="container">   {/* Container */}
                        <Banner bannerimg={imgBanner} bannerc={bannerc} /> {/* Banner de promoções */}
                        <CarouselProd />    {/* Carrossel de produtos */}
                    </div>
                </section>

                <div id="background">
                    <section className={styles.mercados} id='container'>
                        <TituloFormato
                            categoria={t("Ja trabalham conosco")} />
                        <div className={styles.container_mercados}>
                            <div className={styles.card_mercado}>
                                <img src={mercadoLogo} alt="Logo Mercado" className={styles.logo_mercado} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>

                            <div className={styles.card_mercado} id={styles.marketTwo}>
                                <img src={amigao} alt="Logo Mercado" className={styles.logo_mercado} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>

                            <div className={styles.card_mercado} id={styles.marketThree}>
                                <img src={violeta} alt="Logo Mercado" className={styles.logo_mercado_2} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>

                            <div className={styles.card_mercado} id={styles.marketTwo}>
                                <img src={recoy} alt="Logo Mercado" className={styles.logo_mercado_2} />
                                <button className={styles.btn}>
                                    Ver Promoções
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                <div id="background">
                    <section className={styles.section_rate} id='container'>
                        <h2 className={styles.title} id={styles.title_rate}>{t("O QUE ESTÃO COMENTANDO SOBRE A")}<span className={styles.destaque}> PECHINCHA</span></h2>
                        <div className={styles.rate_section} id='container'>

                            <img src={rateimg} alt="Avaliação" className={styles.img_person} />

                            <div className={styles.container_rate}>
                                <div className={styles.rate_card}>
                                    <div className={styles.info_user}>
                                        <div className={styles.user_icon}>
                                            <img src={kaique} alt="Usuária avaliador" />
                                        </div>

                                        <div className={styles.user_info}>
                                            <h3>Kaique Oliveira Mota</h3>
                                            <p>{t("Estudante")}</p>
                                        </div>
                                    </div>

                                    <div className={styles.rate_info}>
                                        <p>{t("Comentario01")}</p>
                                    </div>

                                    <div className={styles.stars}>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>

                                    </div>
                                </div>

                                <div className={styles.rate_card}>
                                    <div className={styles.info_user}>
                                        <div className={styles.user_icon}>
                                            <img src="https://media.licdn.com/dms/image/D4D03AQG1EFTN1o1MWA/profile-displayphoto-shrink_800_800/0/1694273409957?e=1723075200&v=beta&t=OmgLSaUwmM2X8Vz2aKmdSpSmPcSrp0W6g5p0_BPvBlg" alt="Usuária avaliador" />
                                        </div>

                                        <div className={styles.user_info}>
                                            <h3>Gabriel Gallo</h3>
                                            <p>{t("Estudante")}</p>
                                        </div>
                                    </div>

                                    <div className={styles.rate_info}>
                                        <p>{t("Comentario02")}</p>
                                    </div>

                                    <div className={styles.stars}>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* Perguntas frequentes */}

                <div id="background">
                    <section className={styles.perguntas} id='container'>
                        <TituloFormato
                            categoria={t("TituloPerguntas")} />
                        <div className={styles.container_perguntas}>
                            <div className={styles.pergunta}>
                                <h3>{t("Pergunta01")}</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>

                            <div className={styles.pergunta}>
                                <h3>{t("Pergunta02")}</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>

                            <div className={styles.pergunta}>
                                <h3>{t("Pergunta03")}</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>

                            <div className={styles.pergunta}>
                                <h3>{t("Pergunta04")}</h3>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>



                        </div>
                    </section>


                </div>
            </main>
        </div>
    )
}

export default Home;