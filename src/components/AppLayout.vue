<template>
    <div>
        <Header />
        <main>
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    components: {
        Header,
        Footer
    }
};
</script>

<style scoped>
main {
    margin-top: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    min-height: calc(100vh - 100px);
}

main > * {
    max-width: 100%;
    width: 100%;
}
</style>