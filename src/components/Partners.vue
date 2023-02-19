
<template lang="html">
  <div id="partners">
    <div class="partners-content text-center logo-padding" >
    <h2 class="h2-blue">Our Partners</h2>
    <div>
      <div class="title-line mb-50"></div>
    </div>
    		 <!-- :stagePadding=20  -->
     <carousel 
      v-if="dataToDisplay.length > 0"
     :items="items" 
     :dots="false" 
		 :nav="false" 
     :responsive="{0:{items:1},650:{items:2},1000:{items:3},1250:{items:4}}">
      <div v-for="(elementImage,indexKey) in dataToDisplay" :key="indexKey"> 
          <a :href="elementImage.link" target="_blank" rel="noopener"><img :src="getImage(elementImage)" class="img-partner" :alt="getAlt(indexKey)"></a> 
           </div>
            
    </carousel>

    </div>
  </div>
</template>
<script>
import carousel from 'vue-owl-carousel'
import axios from "axios";

export default {
  name: "Partners",
    components: { carousel },
  data() {
    return {
      items: 6,
      dataToDisplay:{}
    };
  },
  computed: {},
    created(){
        axios
        .get(
          "https://dracoss-backend.onrender.com/api/partners"
        )
        .then((response) => {
          console.log("te",response);
          this.dataToDisplay=response.data
        })
        .catch((error) => {
          this.errorMessage = error.message;
        });
    },

  methods: {
       getImage(item){
          if(item.image){
            return "https://res.cloudinary.com/dfsd4vgsl/image/upload/v1648146968/"+item.image
          }
        },
  
  getAlt(index){
          console.log("alt img", index)
          switch (index) {
            case 0:
              return "Partner 1"
              break;
           case 1:
              return "Partner 2"
              break;
            case 2:
              return "Partner 3"
              break;
            case 3:
              return "Partner 4"
              break;
            default:
              break;
          }
        }
        },
};
</script>
<style lang="css">
.partners-content .owl-stage .owl-item{
  padding-left: 3rem!important;
  padding-right: 3rem !important;
  padding-bottom: 2rem !important;
}
.partners-content .owl-stage .owl-item img{
  border: 2px solid #fff;
  border-radius:20px !important;
}

.partners-row div{
  padding-bottom: 0.7rem;
  padding-right: 0px!important;
}
.img-partner {
    width: 150px; 
   height: 200px;  
}
.owl-carousel.owl-loaded{
  display: inline-flex;
}
.div-partners{
  width: 25%;
  padding: 1rem;
}
.div-partners img{
  border: 2px solid #fff;
  border-radius:20px !important;
}


</style>