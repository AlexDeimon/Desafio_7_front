<template>
<div>
    <div>
        <header class="header container-xl p-3">
            <h1 class=" title  h1 text-white"> <strong><span class="text-warning">Business</span> Flow</strong> </h1>
        </header>
    </div>
    <div>
        <section class=" container-sec container-xl ">
            <nav class="navegador">
                <button class="boton" @click="$router.push('/home')">Home</button>
                <button class="boton" @click="$router.push('/cliente')">Clientes</button>
                <!--<router-link class="boton" to="/producto">Productos</router-link>-->
                <button class="boton" @click="$router.push('/producto')">Productos</button>
                <button class="boton" @click="$router.push('/compra')">Compras</button>
                <button class="boton bg-danger" onclick="location.href='../index.html'" >Salir</button>
            </nav>
            <router-view/>
        </section>
    </div>
</div>
    <!--<footer class="footer"> <p> Hecho con 💚 por   <a href="https://github.com/RingilDeveloper"> RingilDeveloper</a> </p></footer>-->
</template>

<script>
export default {
    name: "Main"
}
</script>