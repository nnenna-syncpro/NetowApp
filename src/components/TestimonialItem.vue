<template>
    <div :class="mode">
        <blockquote :class="mode">
            <icon-quote-right mode="quotes"></icon-quote-right>
            <p class="review">
                <slot name="review"></slot>
            </p>
        </blockquote>
        <div class="pointer"></div>
        <br>
        <img :src="imgUrl" alt="">
        <p class="reviewerName">
            <slot name="reviewerName"></slot>
        </p>
        <p class="reviewerTitle">
            <small>
                <slot name="reviewerTitle"></slot>
            </small>
        </p>
    </div>
</template>

<script>
import IconQuoteRight from "./icons/IconQuoteRight.vue";
export default {
    components: {
        IconQuoteRight
    },
    props: ["imgUrl", "mode"]
}
</script>

<style scoped>
.quotes {
    width: 16px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

blockquote {
    padding: 24px;
    margin-bottom: 16px;
    background-color: #fff;
    border: solid 3px #f2f0ee;
}

.review {
    margin-bottom: 16px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    color: #6c757d;
}

img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;

}

.reviewerName {
    color: #6c757d;
    font-size: 20px;
    font-weight: 700;
    margin-top: 8px;
    margin-bottom: 0px;
    text-align: center;
}

.reviewerTitle {
    font-size: 80%;
    text-align: center;
}

.pointer {
    height: 20px;
    width: 20px;
    background-color: white;
    border-right: solid 3px #f2f0ee;
    border-bottom: solid 3px #f2f0ee;
    margin: 0 auto;
    transform: rotate(45deg);
    margin-top: -27px;
    position: relative;
    z-index: 10;
}

/* .testimonialItem__active {
    background-color: #e93314;
    color: #fff;
    border: solid 3px #e93314;
} */
</style>