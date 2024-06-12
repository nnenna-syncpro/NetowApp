<template>
    <div class="banner-content-item">
        <img class="banner-image" src="../assets/img/girl_jacket.png" alt="">
        <div class="content">
            <h2>
                <slot name="contentCaption">
                    <h2>{{ contentCaption }}</h2>
                </slot>
            </h2>
            <slot name="bannerButton"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ["contentCaption"],
}
</script>

<style scoped>
.content {}

.banner-content-item {
    background-color: #20345c;
    /* position: relative; */
}

h2 {
    margin-bottom: 8px;
    text-align: center;
    color: #fff;
    font-weight: 500px;
    line-height: 1.2;
    position: relative;
    font-size: 48px;

    margin: 0;
    position: absolute;
    top: 25%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, 100%);

    /* transform: translateY(-100%);
    top: 50%; */

    /* position above button */
    /* margin: 0;
    position: absolute;
    top: 100%;
    -ms-transform: translateY(50%);
    transform: translateY(50%); */
}

.banner-image {
    margin: auto;
    display: block;
    max-height: 95vh;
    max-width: 100%;
    height: 100%;
    border-style: none;
    overflow-clip-margin: content-box;
    /* vertical-align: middle; */
    text-align: center;

}
</style>