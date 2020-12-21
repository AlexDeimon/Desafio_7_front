<template>
    <div class="container-rigth">
      <div class="buscador">
        <div class="d-flex align-items-center w-100">
        <input type="text" class="form-control " placeholder="Codigo del producto"  v-model="producto.codigo_producto">
        <button class="btn btn-success m-2 " v-on:click="buscarProducto" >Buscar</button>
        <!--<input type="text" class="form-control " placeholder="Cedula del producto"  v-model="producto.cedula" v-on:keyup.enter="eliminarproducto">-->
        <button class="btn btn-success m-2 " v-on:click="eliminarProducto" >Eliminar</button>
      </div>
    </div>
    <div class="agregar">
      <input type="text" v-model='producto.codigo_producto' placeholder="Codigo">
      <input type="text" v-model='producto.nombre_producto' placeholder="Nombre">
      <input type="text" v-model='producto.precio' placeholder="Precio">
      <input type="text" v-model='producto.cantidad_disponible' placeholder="Cantidad"  >

      <button class="btn btn-success" v-on:click="crearProducto" >Agregar</button>
      <button class="btn btn-success" v-on:click="actualizarProducto" >Actualizar</button>
      <button class="btn btn-success" v-on:click="mostrarProductos" >Ver Productos</button>
    </div>
        <div class="table">
          <table>
            <tr>
              <th>Codigo</th>
              <th>Nombre</th> 
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
            <tr v-for="producto in productos_list" v-bind:key="producto">
                <td>{{producto.codigo_producto}}</td>
                <td>{{producto.nombre_producto}}</td>
                <td>{{producto.precio}}</td>
                <td>{{producto.cantidad_disponible}}</td>
                
                <!--<td><button class=" btn btn-danger" @click='eliminarproducto'>-</button></td>
                <td><button class=" btn btn-info" @click='actulizarproducto(index)'>+</button></td>-->
            </tr>

          </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "producto",
    data(){
      
        return {
            producto: {
                codigo_producto: "",
                nombre_producto: "",
                precio: "",
                cantidad_disponible: "",
            },
        productos_list: [],
        }
    },
    methods: {
      mostrarProductos(){
        var productos = this.productos;
        axios.get('https://desafio-7.herokuapp.com/products/', productos)
        .then((response) => {
          this.productos_list = response.data
          console.log(response, productos);
          })
        .catch(function (error) {
          console.log(error);
        });
      },
      buscarProducto(){
        console.log("response", this.producto);
        var producto = this.producto;
        axios.post('https://desafio-7.herokuapp.com/product/search/', producto)
        .then((response) => {
          this
            console.log(response, producto);
        })
        .catch(function (error) {
          console.log(error);
        });
      },

      crearProducto(){
        console.log("response", this.producto);
        var producto = this.producto;
        axios.post('https://desafio-7.herokuapp.com/product/new/', producto)
        .then((response) => {
          this
            console.log(response, producto);

        })
        .catch(function (error) {
          console.log(error);
        });
      },

      actualizarProducto(){
        console.log("response", this.producto);
        var producto = this.producto;
        axios.put('https://desafio-7.herokuapp.com/product/update/', producto)
        .then((response) => {
          this
            console.log(response, producto);

        })
        .catch(function (error) {
          console.log(error);
        });
      },

      eliminarProducto(){
        console.log("response", this.producto);
        var producto = this.producto;
        axios.post('https://desafio-7.herokuapp.com/product/delete/', producto)
        .then((response) => {
          this
            console.log(response, producto);

        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
}
</script>