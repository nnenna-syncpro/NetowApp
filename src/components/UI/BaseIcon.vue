<template>
    <button :class="mode" :type="type">
        <i>
            <slot></slot>
        </i>
    </button>
</template>

<script>
export default {
    props: ["mode", "type"]
}
</script>