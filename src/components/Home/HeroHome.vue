<template >
   <div class="home-content pt-250 second-padding">
        <!-- <video autoplay muted loop class="myVideo">
          <source src="../../assets/img/video.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video> -->
        <b-row>
          <b-col  col lg="6" md="6" sm="12" cols="12">
            <h1 class="home-content-h1 ">Our Machine </h1>
            <p class="home-content-p">Our startup Dracoss helps you to save and to recycle water using an affordable and sustainable machine. We make recycling wastewater accessible to everyone in an affordable way . </p>
          </b-col>

          <b-col col lg="6" md="6" sm="12" cols="12" class="text-right responsive-text-right">
            <img src="../../assets/img/produit.png" class="product-img" 
            alt="Recycling water machine, dracoss product, recycling water">
          </b-col>
        </b-row>  

        <b-row>
          <b-col col lg="12" md="12" sm="12" cols="12" class="mt-50">
            <div class="order"> 
              <b-row>
              <b-col col lg="6" md="6" sm="12" cols="12">
                  <h1 class="order-h3">Pre-Order Now </h1>
                  <p class="order-p">Pre-order now and get a discount of 15%</p>
              </b-col>

              <b-col col lg="6" md="6" sm="12" cols="12">

                   <b-input-group>
                    <b-form-input placeholder="Your email" @keyup.enter="subscriber()" v-model="form.email" type="email" class="input-home" required></b-form-input>
                    <b-input-group-append>
                      <b-button type="submit" @click="subscriber()"  class="btn-icon"><b-icon icon="chevron-right"></b-icon> </b-button>
                    </b-input-group-append>
                    </b-input-group>

              </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>

          </div>

</template>
<script>
import axios from "axios";
export default {
  name: "HeroHome",
  data() {
      return {
        form: {
          state: true,
          email: 'Your email',
        },
        dataToDisplay:{},
        show: true
      }
    },
  computed: {},
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

  methods: {
      subscriber() {
        console.log(JSON.stringify(this.form));
        axios
        .post(
          "https://dracoss-backend.onrender.com/api/subscribers",this.form
        )
        .then((response) => {
          console.log(response);
          this.form.email=""
           this.$toast.open({
            message: "Email sent",
            type: "success",
            duration: 7000
          });
        })
        .catch((error) => {
          this.errorMessage = error.message;
           this.$toast.open({
            message: "Error during",
            type: "error",
            duration: 7000
          });
        });
      
      },
  }
};
</script>
<style lang="css">


.home-content-h1 {
  font-size: 110px;
  color: #fff;
  font-weight: 900;
  line-height: 90%;
  letter-spacing: 0.2rem;
  
   
}
.home-content-p {
  font-size: 20px;
  color: #fff;
  padding-top: 2rem; 
  padding-bottom: 4rem;
   
  
}
.product-img {
  width: 50%;
  margin-right: 10%;
  height: 100;
  flex: 200%;
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
  line-height: 70%;
}
.input-home {
  background-color: transparent !important;
  border-radius: 15px !important;
  position: absolute ;
  border: solid 2px white !important;
  color: #fff !important;
  margin-top: 1rem;
}

.btn-icon {
  background-color: transparent !important;
  border-color: transparent !important;
   /* left: 22vw; /* 330 */
  /* top: 2vh; 15px */
    position: relative!important;
    top: 9px;
    left: -2.5rem;
  
} 

@media only screen and (max-width: 768px) {
  .order {
    padding-bottom: 1.5rem;
    margin-top: 20px;
  }
  .btn-icon {
    left: rem;
  }
  
}
@media only screen and (max-width: 445px) {
  .home-content{
    padding: 1rem 0.5rem;
  }
    .home-content h1{
     padding-right: 25px;
    padding-left: 10px;
    font-size: 55px;
  }
    .home-content p{
    padding-right: 10px;
    padding-left: 10px;
    font-size: 19px;
  }
  .product-img {
  width: 80%;
  height: 80;
  flex: 100%;
}
}
</style>