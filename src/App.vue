<template>
  <section class="container-sesion container-xl">
    <div class="sesion">
      <div>
        <header class="header container-xl p-3">
            <h1 class=" title  h1 text-white"> <strong><span class="text-warning">Business</span> Flow</strong> </h1>
        </header>
    </div>
        <div class="container_auth_user">
            <h2>Autenticarse</h2>
            <form v-on:submit.prevent="processAuthUser" >
                <input type="text"
                    v-model="user_in.username"
                    placeholder="Username">
                <br>
                <input type="password"
                    v-model="user_in.password"
                    placeholder="Password">
                <br>
                <button class= "boton" type="submit">Iniciar Sesión</button>
            </form>
        </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
export default {
    name: "UserAuth",
    data: function(){
        return {
            user_in: {
                username:"",
                password:""
            }
        }
    },
    methods: {
        processAuthUser: function(){
            var self = this
            axios.post("https://desafio-7.herokuapp.com/user/auth/",
                        self.user_in, {headers: {}})
                .then(() => {
                    alert("Autenticación Exitosa");
                    self.$emit('log-in', self.user_in.username)
                })
            .catch((error) => {
                if (error.response.status == "404")
                    alert("ERROR 404: Usuario no encontrado.");
                if (error.response.status == "403")
                    alert("ERROR 403: Contraseña Erronea.");
                });
            }
        }
    }
</script>
<style>
html{
  box-sizing: border-box;
}
body{
  font-family: 'Roboto';
}
#app{
  background-image: linear-gradient( 109.6deg,  rgba(5,84,94,1) 16%, #bbb 91.1% );
}
.header{
  /*background-color: #0a043c;*/
  background-color: transparent;
}
.container-sesion{
  display: flex;
  height: 100vh;
  justify-content: center;
}
.sesion{
  width: 50%;
  max-width: 400px;
  height: 500px;
  padding: 20px;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 5px 7px 12px 1px #00000080;
}
.sesion input{
  border: none;
  width: 80%;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 5px 7px 12px 1px #00000080;
}

h2{
  color: white;
}
.sesion .boton{
  margin-top:40px;
  width: 50%;
}
.boton{
  border: none;
  border-radius: 10px;
  padding: 5px 15px;
  color: white;
  background-color: #56b14d ;
  box-shadow: 5px 7px 12px 1px #00000080;
}
.boton:hover{
  background-color:  #2db920;

}

.boton :active{
  outline: none;
}
/*           tabla.html             */
.container-sec{
  padding: 0;
  display: flex;
}
.navegador{
  width: 20%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /*background-color: #03506f;*/
}
.navegador .boton {
  width: 80%;
  ;
}

.container-rigth{
  width: 70%;
  padding: 20px;
}
.container-rigth h2{
  font-size: 40px;
  margin-top:20px;
  text-align: center;
}
.container-rigth h3{
  font-size: 25px;
  margin-top: 200px;
  text-align: center;
  color: white;
}

/* clientes*/
.buscador{
  display: flex;
  flex-wrap: wrap;
}
.buscador input{
  background-color: pink; /*url(./img/lupa.png);*/
  background-color: white;
  height: 40px;
  background-repeat: no-repeat;
  background-position: left;
  background-size: 30px 30px;
  /*padding-left: 20px;*/
}

.table{
  width:100%;
  height: 400px;
  overflow: scroll;
  padding: 10px;
  background-color: white;
}
.table table{
  width: 100%;
  border:none
}
/* footter*/

.footer{
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: white;
}
.footer a {
  color:white;
  text-decoration: none;
}
.footer a:hover{
  text-decoration: underline;
}

.agregar {
  margin-bottom: 10px;
}
.agregar input{
  border: none;
  border-radius: 15px;
  padding:5px 10px;
  margin:5px;
} 

</style>
