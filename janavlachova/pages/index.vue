<script lang="ts" setup>
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
    <NuxtLink :to="localePath('/')">{{ t("menu.home") }}</NuxtLink>
    <NuxtLink :to="localePath(t('urls.about'))">{{ t("menu.about") }}</NuxtLink>
    <NuxtLink :to="localePath(t('urls.projects'))">{{
        t("menu.projects")
    }}</NuxtLink>
    <NuxtLink :to="localePath(t('urls.contact'))">{{
        t("menu.contact")
    }}</NuxtLink>

    <main>jana vlachova</main>
</template>

<style lang="less" scoped></style>
