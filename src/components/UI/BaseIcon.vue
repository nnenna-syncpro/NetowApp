<template>
    <div :class="mode">
        <i>
            <slot></slot>
        </i>
    </div>
</template>

<script>
export default {
    props: ["mode"]
}
</script>