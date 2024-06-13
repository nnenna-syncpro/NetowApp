<template>
    <div class="testimonialSection">
        <div class="testimonials">
            <p>Testimonials</p>
            <h3>What Clients Say</h3>
            <div class="testimonialItems">
                <testimonial-item :imgUrl=ImagePersonSamuel mode="testimonialItem">
                    <template #review>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean
                        massa. Cum sociis natoque penatibu.
                    </template>
                    <img alt="">
                    <template #reviewerName>
                        Samuel Eghe
                    </template>
                    <template #reviewerTitle>
                        CEO, Saed
                    </template>
                </testimonial-item>
                <testimonial-item :imgUrl=ImagePersonFagbo mode="testimonialItem testimonialItem__active">
                    <template #review>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean
                        massa. Cum sociis natoque penatibu.
                    </template>
                    <img alt="">
                    <template #reviewerName>
                        Ademola Fagbo
                    </template>
                    <template #reviewerTitle>
                        Programmer
                    </template>
                </testimonial-item>
                <testimonial-item :imgUrl=ImagePersonRita mode="testimonialItem">
                    <template #review>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean
                        massa. Cum sociis natoque penatibu.
                    </template>
                    <img alt="">
                    <template #reviewerName>
                        Rita Grace
                    </template>
                    <template #reviewerTitle>
                        Kanga Rep
                    </template>
                </testimonial-item>
            </div>
        </div>
        <div class="brands">

        </div>
    </div>
</template>

<script>
import TestimonialItem from './TestimonialItem.vue';
import ImagePersonSamuel from "../assets/img/person-samuel.png";
import ImagePersonFagbo from "../assets/img/person-fagbo.png";
import ImagePersonRita from "../assets/img/person-rita.jpg";


export default {
    components: {
        TestimonialItem
    },
    data() {
        return {
            ImagePersonSamuel,
            ImagePersonFagbo,
            ImagePersonRita
        }
    },
    // setup() {
    //     return {
    //         ImagePersonSamuel
    //     };
    // }
}
</script>

<style scoped>
.testimonialSection {
    padding: 80px 64px;
    background-image: url("../assets/img/bg-pic1.jpg");
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;
}

p {
    font-weight: 700;
    padding: 0px 15px;
    margin-bottom: 4px;
    text-align: center;
}

h3 {
    padding: 0px 15px;
    margin-bottom: 48px;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
}

.testimonialItems {
    display: flex;
}

.testimonialItem {
    padding: 0px 15px;
}

/* .testimonialItem__active {
    background-color: #e93314;
    color: #fff;
} */
</style>