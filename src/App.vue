<script setup>
import TheNavbar from "./components/TheNavbar.vue"
import TheBanner from "./components/TheBanner.vue"
import WhoWeAre from "./components/WhoWeAre.vue"
import CoreServices from "./components/CoreServices.vue"
import OurServices from "./components/OurServices.vue"
import OurTestimonials from "./components/OurTestimonials.vue"
import OurBlog from "./components/OurBlog.vue"
// import CallToAction from "./components/CallToAction.vue"
import BaseFooter from "./components/UI/BaseFooter.vue"
</script>

<template>
  <the-navbar></the-navbar>

  <the-banner></the-banner>
  <who-we-are></who-we-are>
  <core-services></core-services>
  <our-services></our-services>
  <our-testimonials></our-testimonials>
  <our-blog></our-blog>
  <!-- <call-to-action></call-to-action> -->
  <base-footer></base-footer>
</template>
