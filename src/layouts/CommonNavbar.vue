
<template lang="html">

<nav>
  <div :class="getClass()">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand to="/"><img src="../assets/img/Dracoss.png" alt="dracoss, Dracoss, dracoss logo"> </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav >
        <b-navbar-nav avbar-nav class="ml-auto">
          <b-nav-item to="/about-us"> <span data-content="About Us">About Us</span> </b-nav-item>
          <b-nav-item href="/#device"> <span data-content="The device"> The device </span> </b-nav-item>
          <b-nav-item href="/#services"><span data-content="Services"> Services </span> </b-nav-item>
          <b-nav-item href="/#features"> <span data-content="Featured in">Featured in </span> </b-nav-item>
          <b-nav-item href="/#partners"> <span data-content="Our Partners">Our Partners </span> </b-nav-item>
          <b-nav-item href="/#faq"> <span data-content="FAQ">FAQ </span> </b-nav-item>
          <b-nav-item href="/#contact"> <span data-content="Contact us">Contact us </span> </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

</nav>
</template>
<script>
export default {
  name: "CommonNavbar",
  data() {
    return {
          activeItem: 0,
    };
  },
  created() {},
  methods: {
    getClass(){
      return 'nav-bar-style navbar-transparent'
    }
  },
  computed: {},
};
</script>
<style lang="css">
a, a:hover, a:focus, a:active {
      text-decoration: none !important;
      color: inherit !important; 
}
.nav-bar-style img{
    max-height: 40px;
}
.nav-bar-style .nav-link{
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff!important;
    padding: 0rem 1rem!important;
}

.dropdown-item.active, .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #0d0627!important;
}
.dropdown-item:hover, .dropdown-item:focus {
    color: #fff!important;
    text-decoration: none;
    background-color: #0d0627!important;
}

.nav-bar-style .navbar{
  position: absolute!important;
  width: 100%;
  padding: 2.5rem 4rem;
}

  .navbar-transparent .navbar{
  background: transparent !important;
  }

.navbar-transparent  .nav-bar-button button{
  font-family: Roboto;
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  background: #0d0627;
  border: 0;
  padding: 0.375rem 1rem;
}

/* .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus{
  color: #fff!important;
  font-size: 19px;
} */
.navbar-dark .navbar-nav .nav-link{
 position: relative;
  transition: -webkit-clip-path 275ms ease;
  transition: clip-path 275ms ease;
  transition: clip-path 275ms ease, -webkit-clip-path 275ms ease;
}
.navbar-dark .navbar-nav .nav-link:hover span::before, .navbar-dark .navbar-nav .nav-link:focus span::before {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.navbar-dark .navbar-nav .nav-link span {
  position: relative;
  display: inline-block;
}
.navbar-dark .navbar-nav .nav-link span::before {
  position: absolute;
  content: attr(data-content);
  text-decoration: underline;
  text-decoration-thickness: 3px;
  -webkit-text-decoration-color: #fff;
          text-decoration-color: #fff;
  -webkit-clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
          clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
  transition: -webkit-clip-path 275ms ease;
  transition: clip-path 275ms ease;
  transition: clip-path 275ms ease, -webkit-clip-path 275ms ease;
}


.nav-bar-button svg{
  margin-right: 8px!important;
}
.navbar .navbar-collapse{
    padding-left: 1rem;
  }
  .nav-bar-button li{
    display: flex;
    align-items: center;
    padding-right: 1rem;
}
/* *********************************************************************************************************** */
/* responsive */

@media only screen and (max-width: 991px) {
  .nav-bar-button li{
    display: none;
   }
   .navbar .navbar-collapse{
    padding-left: 0rem;
  }
  .navbar .navbar-collapse{
    background:transparent!important;
    z-index:9999
  }
  .navbar .navbar-collapse .nav-link{
    color:#ffffff!important
  }
}

@media only screen and (max-width: 420px) {
  .navbar .navbar-collapse{
    background:transparent!important;
    z-index:9999
  }
  .nav-bar-style .navbar{
    padding: 1.25rem 2rem;
  }
}

</style>