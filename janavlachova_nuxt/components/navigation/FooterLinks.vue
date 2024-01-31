<script lang="ts" setup></script>

<template>
    <div class="footer-links">
        <CommonLinkItem name="privacy-policy" />
        <CommonLinkItem name="terms-and-conditions" />
    </div>
</template>

<style lang="less" scoped>
.footer-links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 0 1rem 0;
    a {
        margin-right: 1rem;
    }
}
</style>
