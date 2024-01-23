<template>
    <div class="course">
        <Sidebar />
        <main class="home-page">
            <h1>Mes cours</h1>
        </main>
    </div>
</template>

<script setup>
  import Sidebar from '../components/Sidebar.vue'
</script>

<style>
    .course {
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