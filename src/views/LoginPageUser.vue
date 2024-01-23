<template>
    <div>
        <div class="container bg-success">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel bg-primary white-text center">
                        <h3>Connexion Stagiaire</h3>
                        <form v-on:submit.prevent="signIn">
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>
                                <input type="text" id="email" v-model="email">
                                <label for="email">Email</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="text" id="password" v-model="password">
                                <label for="password">Mot de passe</label>
                            </div>
                            <button class="btn btn-large grey lighten-4 black-text">Valider</button>
                        </form>
                    </div>
                </div>
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
    signIn() { // we also renamed this method
    firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password) // THIS LINE CHANGED
        .then((data) => {
            console.log('Successfully logged in!');
            this.$router.push('/dashboard') // redirect to the feed
        })
        .catch(error => {
            console.log(error)
            // switch (error.code) {
            //     case 'auth/invalid-email':
            //         errMsg.value = 'Invalid email'
            //         break
            //     case 'auth/user-not-found':
            //         errMsg.value = 'No account with that email was found'
            //         break
            //     case 'auth/wrong-password':
            //         errMsg.value = 'Incorrect password'
            //         break
            //     default:
            //         errMsg.value = 'Email or password was incorrect'
            //         break
            // }
        })
}
        // login: function(e) {
        //     firebase
        //         .auth()
        //         .signInWithEmailAndPassword(this.email, this.password)
        //         .then(
        //             user => {
        //                 alert(`Vous êtes connecté en tant que ${user.email}`);
        //                 this.$router.push('/');
        //             },
        //             err => {
        //                 alert(err.message);
        //             }
        //         );
        //     e.preventDefault();
        // }
    }
}
</script>