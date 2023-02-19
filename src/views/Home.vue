<template lang="html">
  <div class="home" @click.right.prevent>
    <div class="home-container container">
          <HeroHome/>
          <ProductDescription/>
          <UseCase/>
          <Featued/>
          <!--     <Supporters/>   --> 
          <Supporters/>
          <Celebrities/>
          <Partners/>
          <Questions/>
        </div>
    </div>
</template>
<script>
import Partners from "../components/Partners.vue";
import Supporters from "../components/Supporters.vue";
import Questions from "../components/Home/Questions.vue";
import Celebrities from "../components/Home/Celebrities.vue";
import Featued from "../components/Home/Featued.vue";
import UseCase from "../components/Home/UseCase.vue";
import ProductDescription from "../components/Home/ProductDescription.vue";
import HeroHome from "../components/Home/HeroHome.vue";

export default {
  name: "HomePage",
    components: {
    HeroHome,
    Supporters,
    Partners,
    Questions,
    Celebrities,
    Featued,
    UseCase,
    ProductDescription,
  },
   mounted(){
   this.$route.meta.title = "Home"
   this.$route.meta.description = "Dracoss is a startup that helps you to reduce water consumption using an affordable and a sustainable recycling water machine, our target is luxury restaurants "
   this.$route.meta.keywords = "recycling, Hydreau, water , recyling water machine , machine de recyclage , machine de recyclage d'eau usée , dracoss tunisie , machine, iot "

},
 data() {
      return {
        items : [{
        text:"Home",
        to:"#"
        }]
      }
      },
};

</script>
<style lang="css">
.home, .home-container {
    min-height: 100vh !important;
    background-image: url("../assets/img/bg.png");    
    background-position: center;
    background-size: cover;
    /* background-color: #1979B3; */
}
</style>
