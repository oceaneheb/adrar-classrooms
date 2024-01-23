<template>
    <div class="dashboard">
        <Sidebar />
        <main>
            <h3>Tableau de bord</h3>
        </main>
    </div>
</template>

<script setup>
  import Sidebar from '../components/Sidebar.vue'
</script>

<style>
    .dashboard {
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