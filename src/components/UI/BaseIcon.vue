<template>
    <button class="searchButton normalButton" type="submit">
        <i class="icon">
            <slot></slot>
        </i>
    </button>
</template>

<style scoped>
.searchButton {
    overflow: visible;
    width: 15px;
    background-color: transparent;
    border: none;
}

.icon {
    color: #fff;
    position: relative;
    right: 24px;
    top: 4px;
}
</style>