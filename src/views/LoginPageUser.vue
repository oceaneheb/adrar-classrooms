<template>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-6">
                <img src="../../src/assets/img-connexion-stagiaire.png" alt=""> 
            </div>
            <div class="col-4 offset-1">
                <!-- <div class="return">
                    <span class="material-icons">arrow_back</span> -->
                <router-link to="/" class="return">
                    <span class="material-icons">arrow_back</span>
                    <span>Retour</span>
                </router-link>
                <!-- </div> -->
                <h3>Connexion Stagiaire</h3>
                <form v-on:submit.prevent="signIn">
                    <div class="input-field">
                        <label for="username">Nom d'utilisateur</label>
                        <input type="text" id="username" placeholder="Votre nom utilisateur" required v-model="email">
                    </div>
                    <div class="input-field">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" placeholder="Votre mot de passe" required v-model="password">
                        <p>J'ai oublié mon mot de passe</p>
                    </div>
                    <button type="submit">Valider</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'loginstudent',
    data: function() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        signIn() {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                alert(`Vous êtes connecté en tant que ${user.email}`)
                console.log('Successfully logged in!');
                this.$router.push('/dashboard') // redirect to the dashboard
            })
            .catch(error => {
                console.log(error)
                alert(error.message)
            })
        }
    }
}
</script>

<style scoped>

    form {
        margin-top: 2rem;

        label {
            color:rgba(101, 192, 237, 1);
            margin-bottom: 5px;
            font-size: 18px;
        }

        input {
            width: 100%;
            padding: 8px;
            border-radius: 4px;
            margin-bottom: 5px;
            font-size: 15px;
        }
        .input-field {
            margin-bottom: 20px;
        }
    }

    input::placeholder {
        color: #828282;
        opacity: 0.5;
    }

    button {
        padding: 10px 20px;
        background-color: var(--primary);
        color: #000000;
        border-radius: 38px;
        font-size: 18px;
    }

    p {
        text-decoration: underline;
        font-size: 13px;
        font-weight: 500;
    }

    .return {
        display: flex;
        gap: 5px;
        margin-bottom: 2rem;
        color: var(--dark);
        text-decoration: none;
    }
</style>