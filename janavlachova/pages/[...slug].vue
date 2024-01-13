<script lang="ts" setup>
const {
    t,
    getLocalePath,
    currentPagePath,
    setDefaultLocaleCode,
    localeExists,
    currentLocale,
    setLocaleCode,
    initI18n,
} = useI18n();
const route = useRoute();

initI18n();

if (
    !Array.isArray(route.params.slug) ||
    !route.params.slug.length ||
    !localeExists(route.params.slug[0])
) {
    setDefaultLocaleCode();
    currentPagePath.value = `${currentLocale.value?.code ?? "en"}${route.path}`;
} else {
    setLocaleCode(route.params.slug[0]);
    currentPagePath.value = `${route.path}`;
}
</script>

<template>
    <NuxtLink :to="getLocalePath('/')">{{ t("menu.home") }}</NuxtLink>
    <NuxtLink :to="getLocalePath(t('url.about'))">
        {{ t("menu.about") }}
    </NuxtLink>
    <NuxtLink :to="getLocalePath(t('url.projects'))">
        {{ t("menu.projects") }}
    </NuxtLink>
    <NuxtLink :to="getLocalePath(t('url.contact'))">
        {{ t("menu.contact") }}
    </NuxtLink>

    <main>
        <img
            alt="jana vlachova logo"
            class="logo"
            src="@/static/logo.svg"
            width="125"
            height="125"
        />
        jana vlachova
        <ContentDoc :path="currentPagePath ?? '/'" />
    </main>
</template>
