<template>
    <div class="brandsContainer">
        <brand-item mode="brandItem">
            <template #icon>
                <icon-amazon></icon-amazon>
            </template>
            <template #brandName>
                Konga
            </template>
        </brand-item>
        <brand-item mode="brandItem">
            <template #icon>
                <icon-adidas></icon-adidas>
            </template>
            <template #brandName>
                Adidas
            </template>
        </brand-item>
        <brand-item mode="brandItem">
            <template #icon>
                <icon-verify-me></icon-verify-me>
            </template>
            <template #brandName>
                VerifyMe
            </template>
        </brand-item>
        <brand-item mode="brandItem">
            <template #icon>
                <icon-amazon></icon-amazon>
            </template>
            <template #brandName>
                Amazon
            </template>
        </brand-item>
        <brand-item mode="brandItem">
            <template #icon>
                <icon-saed></icon-saed>
            </template>
            <template #brandName>
                Saed
            </template>
        </brand-item>
        <brand-item mode="brandItem">
            <template #icon>
                <icon-amazon></icon-amazon>
            </template>
            <template #brandName>

            </template>
        </brand-item>
        <brand-item mode="brandItem">
            <template #icon>
                <icon-netflix></icon-netflix>
            </template>
            <template #brandName>

            </template>
        </brand-item>
        <brand-item mode="brandItem">
            <template #icon>

            </template>
            <template #brandName>
                OmniSwift
            </template>
        </brand-item>
    </div>
    <!-- <div class="brandsContainer">
        <brand-item mode="brandItem">
            <icon-face-smile mode="brandIcon"></icon-face-smile>
            <span>Konga</span>
        </brand-item>
        <brand-item mode="brandItem">
            <icon-face-smile mode="brandIcon"></icon-face-smile>
            <span>Konga</span>
        </brand-item>
        <brand-item mode="brandItem">
            <icon-face-smile mode="brandIcon"></icon-face-smile>
            <span>Konga</span>
        </brand-item>
        <brand-item mode="brandItem">
            <icon-face-smile mode="brandIcon"></icon-face-smile>
            <span>Konga</span>
        </brand-item>
        <brand-item mode="brandItem">
            <icon-face-smile mode="brandIcon"></icon-face-smile>
            <span>Konga</span>
        </brand-item>
        <brand-item mode="brandItem">
            <icon-face-smile mode="brandIcon"></icon-face-smile>
            <span>Konga</span>
        </brand-item>
        <brand-item mode="brandItem">
            <icon-face-smile mode="brandIcon"></icon-face-smile>
            <span>Konga</span>
        </brand-item>
        <brand-item mode="brandItem">
            <icon-face-smile mode="brandIcon"></icon-face-smile>
            <span>Konga</span>
        </brand-item>

    </div> -->
</template>

<script>
// import IconFacesmile from "./logos/IconFaceSmile.vue";
import IconAdidas from "./logos/IconAdidas.vue";
import IconAmazon from "./logos/IconAmazon.vue";
import IconSaed from "./logos/IconSaed.vue";
// import IconFaceSmile from './logos/IconFaceSmile.vue';
import BrandItem from "./BrandItem.vue";
// import IconApple from "./logos/IconApple.vue";
import IconNetflix from "./logos/IconNetflix.vue";
import IconVerifyMe from "./logos/IconVerifyMe.vue";

export default {
    components: {
        // IconFaceSmile,
        BrandItem,
        IconAdidas,
        IconSaed,
        IconAmazon,
        // IconApple,
        IconNetflix,
        IconVerifyMe

    }
}
</script>

<style scoped>
.brandsContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0px -15px;
    text-align: center;
    padding: 32px 80px;
    width: 100%;
    justify-content: space-between;
}

.brandItem {
    padding: 8px;
    border: 1px solid rgba(196, 196, 196, 1);
    color: rgba(42, 42, 42, 0.41);
    border-radius: 4px;
    /* was 258px, 224px is the breaking point */
    width: 223px;
    margin: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

@media (max-width: 1260px) {
    .brandsContainer {
        flex-basis: auto;
        justify-content: flex-start;
    }

    .brandItem {
        /* 220px breaks @1247, 215px breaks @1227; 210px breaks @1207; 200px breaks @1167 */
        /* width: 200px; */
        width: 22%;
    }
}

@media (max-width: 1168px) {
    .brandsContainer {
        flex-basis: auto;
        justify-content: flex-start;
    }

    .brandItem {
        /* 190px breaks @1127, 180px breaks @1087 */
        width: 22%;
    }
}

@media (max-width: 1088px) {
    .brandsContainer {
        flex-basis: auto;
        justify-content: center;
        padding: 32px 20px 32px 70px;
    }

    .brandItem {
        /* 3 in a row -  220px breaks @1007; 200px breaks @947 */
        width: 200px;
    }
}

@media (max-width: 949px) {
    .brandsContainer {
        flex-basis: auto;
        justify-content: flex-start;
        padding: 32px 20px 32px 70px;
    }

    .brandItem {
        /* 2 in a row -  46.5% breaks @858; 46% breaks @787; 45% breaks @687 */
        width: 45%;
    }
}

@media (max-width: 687px) {
    .brandsContainer {
        flex-basis: auto;
        justify-content: flex-start;
        padding: 32px 20px 32px 50px;
    }

    .brandItem {
        /* 2 in a row -  46.5% breaks @858; 46% breaks @787; 45% breaks @687 */
        width: 45%;
    }
}

@media (max-width: 620px) {
    .brandsContainer {
        flex-basis: auto;
        justify-content: flex-start;
        padding: 32px 20px 32px 50px;
    }

    .brandItem {
        /* 2 in a row -  46.5% breaks @858; 46% breaks @787; 45% breaks @687 */
        width: 100%;
    }
}

/* @media (max-width: 1016px) {
    .brandsContainer {
        justify-content: flex-start;

    }

    .brandItem {
        width: 220px;
    }
} */
</style>