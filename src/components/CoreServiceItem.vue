<template>
    <div>
        <div>
            <base-icon>
                <slot name="icon"></slot>
            </base-icon>
            <h3 :class="mode">
                <slot name="serviceTitle"></slot>
            </h3>
            <p>
                <slot name="serviceText"></slot>
            </p>
            <base-icon-button mode="iconButton">
                <slot name="iconButton"></slot>
            </base-icon-button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["mode"]
}
</script>

<style scoped>
h3 {
    font-size: 28px;
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 1.2;
}

P {
    font-size: 16px;
    margin-bottom: 16px;
}
</style>