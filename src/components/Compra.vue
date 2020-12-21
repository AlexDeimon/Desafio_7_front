<template>
    <div class="container-rigth">
      <div class="buscador">
        <div class="d-flex align-items-center w-100">
        <input type="text" class="form-control " placeholder="Codigo de la compra"  v-model="compra.id_compra">
        <button class="btn btn-success m-2 " v-on:click="buscarCompra" >Buscar</button>
        <!--<input type="text" class="form-control " placeholder="Cedula del compra"  v-model="compra.cedula" v-on:keyup.enter="eliminarcompra">-->
      </div>
    </div>
    <div class="agregar">
      <input type="text" v-model='compra.id_compra' placeholder="ID">
      <input type="text" v-model='compra.cedula' placeholder="Cedula">
      <input type="text" v-model='compra.nombres' placeholder="Nombres">
      <input type="text" v-model='compra.apellidos' placeholder="Apellidos"  >
      <input type="text" v-model='compra.codigo_producto' placeholder="Codigo">
      <input type="text" v-model='compra.producto' placeholder="Nombre Producto">
      <input type="text" v-model='compra.precio_compra' placeholder="Precio"  >

      <button class="btn btn-success" v-on:click="crearCompra" >Agregar</button>
    </div>
        <div class="table">
          <table>
            <tr>
              <th>ID</th>
              <th>Cedula</th> 
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Codigo</th> 
              <th>Producto</th>
              <th>Precio</th>
            </tr>
            <tr v-for="compra in compras_list" v-bind:key="compra">
                <td>{{compra.id_compra}}</td>
                <td>{{compra.cedula}}</td>
                <td>{{compra.nombres}}</td>
                <td>{{compra.apellidos}}</td>
                <td>{{compra.codigo_producto}}</td>
                <td>{{compra.producto}}</td>
                <td>{{compra.precio_compra}}</td>
                
                <!--<td><button class=" btn btn-danger" @click='eliminarcompra'>-</button></td>
                <td><button class=" btn btn-info" @click='actulizarcompra(index)'>+</button></td>-->
            </tr>

          </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "compra",
    data(){
      
        return {
            compra: {
                id_compra: "",
                cedula: "",
                nombres: "",
                apellidos: "",
                codigo_producto: "",
                producto: "",
                precio_compra: "",
            },
        compras_list: [],
        }
    },
    methods: {
      mostrarCompras(){
        var compras = this.compras;
        axios.get('https://desafio-7.herokuapp.com/purchases/', compras)
        .then((response) => {
          this.compras_list = response.data
          console.log(response, compras);
          })
        .catch(function (error) {
          console.log(error);
        });
      },
      buscarCompra(){
        console.log("response", this.compra);
        var compra = this.compra;
        axios.post('https://desafio-7.herokuapp.com/purchase/search/', compra)
        .then((response) => {
          this
            console.log(response, compra);
        })
        .catch(function (error) {
          console.log(error);
        });
      },

      crearCompra(){
        console.log("response", this.compra);
        var compra = this.compra;
        axios.post('https://desafio-7.herokuapp.com/purchase/new/', compra)
        .then((response) => {
          this
            console.log(response, compra);

        })
        .catch(function (error) {
          console.log(error);
        });
      },
    }
}
</script>