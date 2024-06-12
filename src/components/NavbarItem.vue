<template>
    <li class="navbar__nav--item">
        <a href="" class="navbar__nav--link">
            <slot></slot>
        </a>
    </li>
</template>

<style scoped>
.navbar__nav--item {
    padding: 0 16px;
}

.navbar__nav--link {
    padding: 8px;
    color: white;
    font-weight: 500;
    display: block;
    font-size: 14px;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
}
</style>