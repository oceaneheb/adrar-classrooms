<template>
    <div class="container px-4">
      <div class="row">
        <div class="col-md-5 col-lg-4">
          <div class="bloc">
            <h3>Vous êtes stagiaire ?</h3>
            <router-link class="button" to="/loginuser">
                <span>Me connecter</span>
            </router-link>
            <img src="../assets/img-connexion-stagiaire.png" alt="">
          </div>
        </div>
        <div class="rond-bleu">
          <span>ou</span>
        </div>
        <div class="col-md-5 col-lg-4">
          <div class="bloc">
            <h3>Vous êtes formateur ?</h3>
            <router-link class="button" to="/loginadmin">
                <span>Me connecter</span>
            </router-link>
            <img src="../assets/img-connexion-formateur.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
  
    }
  </script>
  
  <style>
  
  .row {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
  
    .rond-bleu {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-30px, -30px);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: var(--primary);
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
  
      span {
        color: white;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 1.2rem;
      }
    }
  }
  
  .bloc {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    width: 400px;
    height: 350px;
  
    h3 {
      font-size: 25px;
      font-weight: 500;
      margin-top: 1rem;
    }
  
    .button {
      background: var(--primary);
      border-radius: 10px;
      padding: 0.5rem 1rem;
      color: white;
      margin-top: 0.5rem;
      border-radius: 5px;
      text-decoration: none;
    }
  
    img {
      width: 60%;
    }
  }
  </style>