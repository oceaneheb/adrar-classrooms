<template>
    <div class="dashboard">
        <Sidebar />
        <main>
            <h2>Tableau de bord</h2>
            <hr>
            <div class="listcourses">
                <ul class="list-group">
                    <li class="list-group-item bg-dark text-light">
                        <h4>Derniers cours ajoutés</h4>
                    </li>
                    <li v-for="course in courses" 
                    v-bind:key="course.id"
                    class="list-group-item d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center gap-2">
                            <span v-if="course.title === 'HTML'" :style="{backgroundColor: '#FFC37C', borderRadius: '20px', padding: '5px 10px', color: 'black'}">{{ course.title }} </span>
                            <span v-else-if="course.title === 'Javascript'" :style="{backgroundColor: '#F4FC93', borderRadius: '20px', padding: '5px 10px', color: 'black'}">{{ course.title }} </span>
                            <span v-else-if="course.title === 'CSS'" :style="{backgroundColor: '#9DCAFF', borderRadius: '20px', padding: '5px 10px', color: 'black'}">{{ course.title }} </span>
                            <span v-else :style="{backgroundColor: '#C2F3B0', borderRadius: '20px', padding: '5px 10px', color: 'black'}">{{ course.title }} </span>
                            <span>- Auteur : Mathieu M.</span>
                        </div>
                        <div class="d-flex gap-2">
                            <span :style="{color: '#65C0ED'}" class="material-icons">visibility</span>
                            <span :style="{color: '#2FB500'}" class="material-icons">edit</span>
                            <span :style="{color: '#F21414'}" class="material-icons">delete</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <button class="display-courses d-flex gap-1">Accéder à tous les cours
                    <span class="material-icons">arrow_forward</span>
                </button>
            </div>
        </main>
    </div>
</template>

<script>
  import Sidebar from '../components/Sidebar.vue'
  import firebase from 'firebase'

  export default {
    components: {
        Sidebar
    },
    data() {
        return {
            courses: [],
        };
    },
    created() {
        this.fetchCourses();
    },
    methods: {
        async fetchCourses() {
            try {
                const db = firebase.firestore();
                const coursesCollection = db.collection('courses');

                const querySnapchot = await coursesCollection.get();
                this.courses = querySnapchot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
            } catch (error) {
                console.log('Erreur : ', error);
            }
        },
    },
  };

</script>

<style scoped>
    .dashboard {
        display: flex;
        /* overflow: hidden; */
        width: 100vw;

        main {
        flex: 1 1 0;
        padding: 2rem;

            @media (max-width: 768px) {
                padding-left: 6rem;
            }
        }
    }

    .listcourses {
        width: 40%;
    }

    h2 {
        font-weight: bold;
    }

    .display-courses {
        background-color: var(--primary);
        margin-top: 1rem;
        padding: 0.5rem;
        border-radius: 6px;
        font-weight: 600;
        /* text-transform: uppercase; */
    }
</style>