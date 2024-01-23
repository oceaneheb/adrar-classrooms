<template>
    <div class="settings">
        <Sidebar />
        <main class="home-page">
            <h1>Paramètres</h1>
        </main>
    </div>
</template>

<script setup>
  import Sidebar from '../components/Sidebar.vue'
</script>

<style>
    .settings {
        display: flex;

        main {
        flex: 1 1 0;
        padding: 2rem;

            @media (max-width: 768px) {
                padding-left: 6rem;
            }
        }
    }
</style>