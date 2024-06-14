<template>
    <div :class="mode">
        <base-icon class="icon">
            <slot name="icon"></slot>
        </base-icon>
        <span class="brandName">
            <slot name="brandName"></slot>
        </span>
    </div>
</template>

<script>
import BaseIcon from "./UI/BaseIcon.vue";
export default {
    props: ["mode"],
    components: {
        BaseIcon
    }
}
</script>

<style scoped>
/* .container {
    padding: 8px;
    border: 1px solid rgba(196, 196, 196, 1);
    color: rgba(42, 42, 42, 0.41);
    font-weight: 600;
    border-radius: 4px;
    text-align: center;
} */

.brandName {
    font-size: 28px;
    text-align: center;
    margin-top: 5px;
    line-height: 1.2;

}

.icon {
    margin-top: 5px;
}
</style>