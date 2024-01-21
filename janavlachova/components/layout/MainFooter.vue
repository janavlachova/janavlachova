<script lang="ts" setup></script>

<template>
    <footer class="footer">
        <div class="page-container">
            <div class="copyright">Copyright @ 2024 janavlachova.com</div>
            <NavigationFooterLinks />
        </div>
    </footer>
</template>

<style lang="less" scoped>
.footer {
    padding-block: 1rem;
    box-shadow: 0 0 3px 0 var(--color-border);
    font-size: 0.9rem;
    .copyright {
        font-weight: 300;
    }
    .page-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
