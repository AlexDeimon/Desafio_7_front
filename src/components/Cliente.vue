<template>
    <div class="container-rigth">
      <div class="buscador">
        <div class="d-flex align-items-center w-100">
        <input type="text" class="form-control " placeholder="Cedula del cliente"  v-model="cliente.cedula">
        <button class="btn btn-success m-2 " v-on:click="buscarCliente" >Buscar</button>
        <!--<input type="text" class="form-control " placeholder="Cedula del cliente"  v-model="cliente.cedula" v-on:keyup.enter="eliminarCliente">-->
        <button class="btn btn-success m-2 " v-on:click="eliminarCliente" >Eliminar</button>
      </div>
    </div>
    <div class="agregar">
      <input type="text" v-model='cliente.cedula' placeholder="Cedula">
      <input type="text" v-model='cliente.nombres' placeholder="Nombres">
      <input type="text" v-model='cliente.apellidos' placeholder="Apellidos">
      <input type="text" v-model='cliente.email' placeholder="Email"  >
      <input type="text" v-model='cliente.telefono' placeholder="Telefono"  >

      <button class="btn btn-success" v-on:click="crearCliente" >Agregar</button>
      <button class="btn btn-success" v-on:click="actualizarCliente" >Actualizar</button>
      <button class="btn btn-success" v-on:click="mostrarClientes" >Ver Clientes</button>
    </div>
        <div class="table">
          <table>
            <tr>
              <th>Cedula</th>
              <th>Nombres</th> 
              <th>Apellidos</th>
              <th>Email</th>
              <th>Telefono</th>
            </tr>
            <tr v-for="cliente in clientes_list" v-bind:key="cliente">
                <td>{{cliente.cedula}}</td>
                <td>{{cliente.nombres}}</td>
                <td>{{cliente.apellidos}}</td>
                <td>{{cliente.email}}</td>
                <td>{{cliente.telefono}}</td>
                
                <!--<td><button class=" btn btn-danger" @click='eliminarCliente'>-</button></td>
                <td><button class=" btn btn-info" @click='actulizarCliente(index)'>+</button></td>-->
            </tr>

          </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "cliente",
    data(){
      
        return {
            cliente: {
                cedula: "",
                nombres: "",
                apellidos: "",
                email: "",
                telefono: "",
            },
        clientes_list: [],
        }
    },
    methods: {
      mostrarClientes(){
        var clientes = this.clientes;
        axios.get('https://desafio-7.herokuapp.com/clients/', clientes)
        .then((response) => {
          this.clientes_list = response.data
          console.log(response, clientes);
          })
        .catch(function (error) {
          console.log(error);
        });
      },
      buscarCliente(){
        console.log("response", this.cliente);
        var cliente = this.cliente;
        axios.post('https://desafio-7.herokuapp.com/client/search/', cliente)
        .then((response) => {
          this.cliente_list = response.data
            console.log(response, cliente);
        })
        .catch(function (error) {
          console.log(error);
        });
      },

      crearCliente(){
        console.log("response", this.cliente);
        var cliente = this.cliente;
        axios.post('https://desafio-7.herokuapp.com/client/new/', cliente)
        .then((response) => {
          this
            console.log(response, cliente);

        })
        .catch(function (error) {
          console.log(error);
        });
      },

      actualizarCliente(){
        console.log("response", this.cliente);
        var cliente = this.cliente;
        axios.put('https://desafio-7.herokuapp.com/client/update/', cliente)
        .then((response) => {
          this
            console.log(response, cliente);

        })
        .catch(function (error) {
          console.log(error);
        });
      },

      eliminarCliente(){
        console.log("response", this.cliente);
        var cliente = this.cliente;
        axios.post('https://desafio-7.herokuapp.com/client/delete/', cliente)
        .then((response) => {
          this
            console.log(response, cliente);

        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
}
</script>