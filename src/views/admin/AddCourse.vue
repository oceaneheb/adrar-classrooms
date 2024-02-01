<template>
    <div class="background vh-100 py-4">
        <div class="flex">
            <div>←</div>
            <h2>Détails du cours</h2>
            <h2 style="margin-left: 5px;">Ajouter un cours</h2>
        </div>
        <hr class="border border-light bg-white" style="background-color:white"/>
        <br>
        <hr class="border border-light bg-white" style="background-color:red"/>
        
        <h4>Catégorie du cours</h4>
        <button class="validation">Sélectionner ˅</button>
        <br>
        <h4>Titre</h4>
		<textarea placeholder="" cols="50" rows="1" name="title" id="title"></textarea>
        <form action="/signup" method="post" id="signup"></form>
        <h4>Description</h4>
        <textarea placeholder="" cols="50" rows="5" name="description" id="description"></textarea>
        <button class="validation" style="margin-bottom: 30px;">Sélectionner ˅</button>
        <form action="/signup" method="post" id="signup">
            <h4>Titre</h4>
		    <textarea placeholder="" cols="50" rows="1" name="title" id="title"></textarea>
            <h4>Description</h4>
            <textarea placeholder="" cols="50" rows="5" name="description" id="description"></textarea>
        </form>

        <h4>Importer le PDF du cours</h4>
        <button class="download">(nom du cours).pdf</button>
        <button class="download">Ajouter un pdf
            <img src="./Frame.png" alt="">
        </button>
        
        <div style="height: 40%;"></div>
        <footer style="text-align: right;" class="app-footer">
            <button class="validation">Sélectionner</button>
            <button class="cancel">Annuler</button>
        </footer>
        
        <div style="height: 40%;"></div>
        <div style="text-align: right; justify-content: end;">
            <button class="validation">Enregistrer</button>
            <button class="cancel">Supprimer</button>
        </div>
    </div>
</template>

<style scoped>
    .background {
    background-color : #f3f3f3;
    padding: 40px;
    }
    p.underline {
        background-color: yellow;
        display: inline;
        border-radius: 12px;
        padding: 10px;
    }
    h2 {
        font-family: 'Inter', 'sans-serif';
        font-weight: 800;
    }
    h4 {
        font-family: 'Inter', 'sans-serif';
        font-weight: 600;
    }

    hr {
        color: white;
        color: red;
        height: 5px;
    }

    .flex {
        display: flex;
    }

    button.download {
        border: 1px solid rgb(223, 223, 223);
        padding: 7px;
        background-color: white;
        border-radius: 7px;
        font-family: 'Inter', 'sans-serif';
    }

    button.validation {
        border: 1px solid #65c0ed;
        background-color: #65c0ed;
        border-radius: 5px;
        font-family: 'Inter', 'sans-serif';
        padding: 5px;
    }

    button.cancel {
        border: 1px solid #ce1515;
        background-color: #ce1515;
        color: white;
        border-radius: 5px;
    }

</style>
