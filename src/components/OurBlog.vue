<template>
    <div class="blogContainer">
        <div class="blogHeader">
            <div>
                <h3>Who We Are</h3>
                <h4>From The Blog</h4>
            </div>
        </div>
        <div class="blogCards">
            <blog-item :imgUrl=ImageArticle1 mode="blogCard">
                <img src="" alt="">
                <template #category>News</template>
                <template #date>10 June, 2020</template>
                <template #title>A webinar on starting a career in software testing</template>
            </blog-item>
            <blog-item :imgUrl=ImageArticle2 mode="blogCard">
                <img src="" alt="">
                <template #category>News</template>
                <template #date>12, July, 2020</template>
                <template #title>A webinar on starting a career in software testing</template>
            </blog-item>
            <blog-item :imgUrl=ImageArticle3 mode="blogCard">
                <img src="" alt="">
                <template #category>News</template>
                <template #date>20 August, 2020</template>
                <template #title>A webinar on starting a career in software testing</template>
            </blog-item>
        </div>
    </div>
</template>

<script>
import BlogItem from './BlogItem.vue'
import ImageArticle1 from "../assets/img/Article1.png";
import ImageArticle2 from "../assets/img/Article2.png";
import ImageArticle3 from "../assets/img/Article3.png";

export default {
    components: {
        BlogItem
    },
    props: ["imgUrl", "mode"],
    data() {
        return {
            ImageArticle1,
            ImageArticle2,
            ImageArticle3
        }
    }
}
</script>

<style scoped>
.blogContainer {
    background-color: rgba(248, 245, 242, 0.97);
    padding: 80px 64px;
}

h3 {
    font-size: 12px;
    margin-bottom: 8px;
}

h4 {
    font-size: 24px;
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 1.2;

}

.blogCards {
    display: flex;
}

.blogCard {
    padding: 0px 8px;
}
</style>