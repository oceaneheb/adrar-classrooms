<template>
    <div class="course">
        <Sidebar />
        <main>
            <div class="return">
                <span class="material-icons">arrow_back</span>
                <span>Retour</span>
            </div>
            <div>
                <h2>Ajouter un cours</h2>
                <hr>
                <div class="addcourse">
                    <div>
                        <h4 class="add-categorie">Catégorie</h4>
                        <div class="dropdown">
                            <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sélectionner
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item">Javascript</a>
                                <a class="dropdown-item">PHP</a>
                                <a class="dropdown-item">VueJS</a>
                            </div>
                        </div>
                    </div>
                    <form @submit.prevent="addCourse">
                        <div class="add-title">
                            <label for="title">Titre</label>
                            <input type="text" id="title" v-model="title">
                        </div>
                        <div class="add-description">
                            <label for="description">Description</label>
                            <textarea name="description" id="description" cols="30" rows="8" v-model="content"></textarea>
                        </div>
                        <div class="import-pdf">
                            <label for="fichierpdf">Importer un fichier PDF</label>
                            <input type="file" id="fichierpdf" name="fichierpdf" accept=".pdf">
                        </div>
                        <div class="validation-button">
                            <button type="submit" class="validation">Valider</button>
                            <button class="cancel">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
  import Sidebar from '../components/Sidebar.vue'
  import firebase from 'firebase'

  export default {
    name: 'addcourse',
    components: {
        Sidebar
    },
    data: function() {
        return {
            title: '',
            content: ''
        };
    },
    methods: {
        async addCourse() {
            try {
                const db = firebase.firestore();
                const coursCollection = db.collection('cours');

                await coursCollection.add({
                    title: this.title,
                    content: this.content,
                });

                console.log('Cours ajouté');
            } catch (error) {
                console.log('Erreur:', error);
            }
        }
    }
  }

</script>

<style scoped>
    .course {
        display: flex;
        overflow: hidden;
        width: 100vw;

        main {
        flex: 1 1 0;
        padding: 2rem;

            @media (max-width: 768px) {
                padding-left: 6rem;
            }
        }
    }

    h2 {
        font-weight: bold;
    }

    .return {
        display: flex;
        gap: 5px;
        margin-bottom: 1rem;
        color: var(--dark);
        text-decoration: none;
    }

    .addcourse {
        background-color : #f3f3f3;
        padding: 2rem;
        width: 50%;
    }

    .add-categorie {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 0.2rem;
    }
    .dropdown-toggle {
        border: 1px solid var(--primary);
        background-color: var(--primary);
        border-radius: 5px;
        padding: 5px;
    }
    .add-title, .add-description, .import-pdf {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;

        label {
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 0.2rem;
        }
    }

    .validation-button {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 1rem;

        .validation  {
            width: 100px;
            height: 40px;
            border: 1px solid #65c0ed;
            background-color: #65c0ed;
            border-radius: 5px;
            padding: 5px;
        }
        .cancel {
            width: 100px;
            height: 40px;
            border: 1px solid #ce1515;
            background-color: #ce1515;
            color: white;
            border-radius: 5px;
            padding: 5px;
        }
    }

    button.download {
        border: 1px solid rgb(223, 223, 223);
        padding: 7px;
        background-color: white;
        border-radius: 7px;
        font-family: 'Inter', 'sans-serif';
    }

</style>