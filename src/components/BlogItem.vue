<template>
    <div :class="mode">
        <img :src="imgUrl" alt="">
        <div class="cardBody">
            <div class="articleDetails">
                <span class="category">
                    <slot name="category"></slot>
                </span>
                <span class="dot"> . </span>
                <span class="date">
                    <slot name="date"></slot>
                </span>
            </div>
            <p class="title">
                <slot name="title"></slot>
            </p>
            <base-button mode="readMore">Read more</base-button>
        </div>
    </div>
</template>

<script>
import BaseButton from './UI/BaseButton.vue'
export default {
    components: {
        BaseButton

    },
    props: ["imgUrl", "mode"]
}
</script>

<style scoped>
.category {
    color: red;
    font-size: 14px;
    word-wrap: break-word;

}

.dot {
    color: #6c757d;

}

.date {
    color: #6c757d;
    font-size: 14px;
    word-wrap: break-word;

}

.title {
    font-weight: 700;
    word-wrap: break-word;
    padding-bottom: 4px;
    font-size: 19px;
}

.readMore {
    color: black;
    font-size: 14px;
    word-wrap: break-word;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    border: none;
}

.cardBody {
    padding: 20px 20px 20px 0px;
}

img {
    /* originally - 333*282, 400px breaks the page,  */
    /* width: 372px;
    height: 311px; */
    width: 100%;
    height: auto;
}

@media (max-width: 929px) {
    .title {
        font-size: 16px;
    }
}

@media screen and (max-width: 768px) {}

/* 
@media (max-width: 1140px) {
    img {
        width: 333px;
        height: 282px;
    }
}

@media (max-width: 1140px) {
    img {
        width: 333px;
        height: 282px;
    }
}

@media (min-width: 1025px) {
    img {
        width: 298px;
        height: 255px;
    }
} */
</style>