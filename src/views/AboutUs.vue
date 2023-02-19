<template lang="html">
  <div class="about" @click.right.prevent>
    <div class="about-container container">
      <div class="about-content second-padding pt-250">
        <b-row>
          <b-col  col lg="6" md="6" sm="12" cols="12">
            <h1 class="about-content1-h1">Who We <sup class="exposant">Are</sup> </h1>
            <h1 class="responsive-about-content1-h1">Who We Are </h1>
            <p class="about-content-p">{{dataToDisplay[0].text}}.</p>
          </b-col>
          <b-col  col lg="6" md="6"sm="6" cols="6" class="text-center responsive-display">
            <img :src="getImage(dataToDisplay[0].image)" class="product-image" alt="Dracoss team, Amen Souli, Fatma Jedidi, Ichraf Slimani">
          </b-col>
        </b-row>  

        <b-row class="mt-100">
          <b-col  col lg="6" md="6"sm="12" cols="6" class="text-center responsive-display">
            <img :src="getImage(dataToDisplay[1].image)" class="product-image" alt="Process,iot">
          </b-col>
          <b-col  col lg="6" md="6" sm="12" cols="12">
            <h1 class="about-content3-h1">Our Mission</h1>
            <p class="about-content-p3">{{dataToDisplay[1].text}}</p>
          </b-col>
        </b-row>

        <b-row class="mt-100">
                   <b-col  col lg="6" md="6" sm="12" cols="12">
            <h1 class="about-content2-h1">Our Vision</h1>
            <p class="about-content-p">{{dataToDisplay[2].text}}</p>
          </b-col>
          <b-col  col lg="6" md="6"sm="12" cols="6" class="text-center responsive-display">
            <img :src="getImage(dataToDisplay[2].image)" class="product-image" alt="" >
          </b-col>
        </b-row>  
          </div>
          <Value/>
          <Leadership/>
        </div>
        
    </div>
</template>
<script>
import Partners from "../components/Partners.vue";
import Leadership from "../components/AboutUs/Leadership.vue";
import Value from "../components/AboutUs/Value.vue";
import axios from "axios";
export default {
  name: "AboutUs",
  data() {
      return {
        dataToDisplay:{},
         items : [
          {
        text:"Home",
        to:"/"
        },
        {
        text:"AboutUS",
        to:"/about-us"
        },
        ]
      }
      },
      components: {
      Partners,
      Leadership,
      Value
    },
     created(){
        axios
        .get(
          "https://dracoss-backend.onrender.com/api/descriptions"
        )
        .then((response) => {
          console.log(response);
          this.dataToDisplay=response.data
        })
        .catch((error) => {
          this.errorMessage = error.message;
        });
    },
    mounted(){
   this.$route.meta.title = "About Us"
   this.$route.meta.description = "Dracoss is making machines for restaurants to recycle wastewater. Our machine collects, cleans, and recycles the water from washers, dryers, rain, and air conditioning units. Our machine is a combination of an innovative wastewater treatment system that removes ( Solids, Floatants, Colors, bacteria ..) and an integrated IoT system with the machine so we detect and we collect personalized and detailed data on water consumption and water quality. With Dracoss, restaurants are able to recycle 10,000L/day of water, saving up to 80% and reusing the same quantity of water many times to reduce water cost and consumption in an affordable and free energy way using an integrated photovoltaic plaque."
   this.$route.meta.keywords = "recycling , water , recyling water machine , machine de recyclage , machine de recyclage d'eau usée , dracoss tunisie , machine, affordable machine,  "
   

},
    methods: {
        getImage(item){
          if(item){
            return "https://res.cloudinary.com/dfsd4vgsl/image/upload/v1648146968/"+item
          }else{
            return "https://res.cloudinary.com/dfsd4vgsl/image/upload/v1614448392/495-4952535_create-digital-profile-icon-blue-user-profile-icon_2_cptuoe.png"
          }
        }
    },
};

</script>
<style lang="css">
.about, .about-container {
    min-height: 100vh !important;
    background-image: url("../assets/img/bg.png");    
    background-position: center;
    background-size: cover;
    /* background-color: #1979B3; */
}
/* .about, .about-container {
    min-height: 100vh !important;
    background-color: #1979B3;
    background: linear-gradient(130deg, #1979B3, #004772, #005D99);
    background-size: 200% 200%;
    -webkit-animation: myBackground 15s ease infinite;
    -moz-animation: myBackground 15s ease infinite;
    animation: myBackground 15s ease infinite;
}
@-webkit-keyframes myBackground {
    0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
}
@-moz-keyframes myBackground {
    0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
}
@keyframes myBackground { 
    0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
} */

.about-content1-h1 {
  font-size: 125px;
  width: 60%;
  color: #fff;
  font-weight: 900;
  line-height: 75%;
  letter-spacing: 0.2rem;
}
.about-content2-h1 {
  font-size: 125px;
  color: #fff;
  font-weight: 900;
  line-height: 100%;
  letter-spacing: 0.2rem;
}
.about-content3-h1 {
  font-size: 125px;
  color: #fff;
  font-weight: 900;
  line-height: 100%;
  letter-spacing: 0.2rem;
}
.about-content-p {
  font-size: 18px;
  color: #fff;
  padding-right: 6rem;
  /* padding-top: 2rem !important;  */
  /* padding-bottom: 4rem !important; */
}
.about-content-p3 {
  font-size: 18px;
  color: #fff;
  padding-right: 6rem;
}
.product-image {
  /* width: 170px; */
  height: 320px;
  flex: 100%;

}
.order {
  border: 3px solid white;
  border-radius: 15px;
  color: #fff;
  padding-top: 1.5rem;
  padding-left: 3rem;
  padding-bottom: 0.5rem;
}
.order-h3 {
  font-size: 50px;
  /* line-height: 70%; */
}
.input-about {
  background-color: transparent !important;
  border-radius: 15px !important;
  position: absolute;
  border: solid 2px white !important;
  color: #fff !important;
  margin-top: 1rem;
}
/* .btn-icon {
  background-color: transparent !important;
  border-color: transparent !important;
   left: 22vw; /* 330 
  top: 2vh; /* 15px 
} */
.exposant {
  font-size: 50px;
  font-weight: 600;
  position:  absolute;
  top: 8.3rem;
  /* right: 0.5rem; */
}
.btn1 {
  background-color: transparent !important;
  border: solid 2px white !important;
  border-radius: 10px !important;
  font-size: 13px !important;
}
.btn3 {
  background-color: transparent !important;
  border: solid 2px white !important;
  border-radius: 10px !important;
  font-size: 13px !important;
}
@media only screen and (max-width: 768px) {
  .order {
    padding-bottom: 1.5rem;
    margin-top: 20px;
  }
  
}
@media only screen and (max-width: 1000px) {
 .about-content-p3 {
  padding-right: 1rem;
}
  
}

@media only screen and (max-width: 445px) {
  .about-content{
    padding: 1rem 0.5rem;
  }
    .about-content h1{
     padding-right: 25px;
    padding-left: 15px;
  }
    .about-content p{
     padding-right: 10px;
    padding-left: 10px;
  }
}
</style>

