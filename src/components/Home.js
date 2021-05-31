import React from "react";
import "../style/Home.scss";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/LittleFiresEverywhere/LITT_S1_Xsite_FT_HeroTALL_1500x600_PV_en-GB._CB431647716_.jpg"
          alt="banner"
        />
        <div className="home__container--row">
          <Product
            id= {123}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={19.99}
            image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg'
            rating={4}
          />
          <Product
            id= {1234}
            title="Kenwood kMix KMX750RD, Robot Pâtissier, Robot pâtissier multifonctions avec Bol en Acier 5 L, 1000 Watt, Rouge"
            price={389}
            image='https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg'
            rating={3}
          />
        </div>
        <div className="home__container--row">
          <Product
            id= {12345}
            title="Samsung Galaxy Fit2 Tracker de Fitness avec écran Couleur AMOLED 1,1 - Confortable - Étanche - Jusqu'à 21 Jours d'autonomie - Analyse du Sommeil - Noir"
            price={39.90}
            image='https://m.media-amazon.com/images/I/71qamkc+RUL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg'
            rating={4}
          />
          <Product
            id= {123456}
            title="Echo Plus (2ème génération) Reconditionné Certifié, Son de qualité premium avec un hub maison connectée intégré, Tissu anthracite"
            price={89.99}
            image='https://m.media-amazon.com/images/I/71Nk6mmYFZL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg'
            rating={5}
          />
          <Product
            id= {1234567}
            title="Apple iPad Pro (11 Pouces, 2ᵉ génération, Wi-FI, 128 Go) - Argent (2020)"
            price={789}
            image='https://m.media-amazon.com/images/I/815a+XjrgvL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg'
            rating={5}
          />
        </div>
        <div className="home__container--row">
          <Product
            id= {12345678}
            title="Samsung C49RG90, Ecran PC Gaming incurvé, Format Ultra-Large, Dalle VA 49', Résolution 5K (5120 x 1440), 120 Hz, 4ms, HDR 1000, QLED, AMD Freesync, Noir"
            price={949.90}
            image='https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
