//Objeto que contiene la informacion de los Restaurantes (Nombre, Descripccion, Direccion y URL de la imagen)
let restaurants = [
  { name: 'Comidas Rapidas', description: 'Domicilio GRATIS', address: 'Barranquilla - Av. 56 Nro. 30', image: 'https://www.comedera.com/wp-content/uploads/2022/03/Pan-de-perro-caliente-shutterstock_1472131574.jpg' },
  { name: 'Comida Mexicana', description: 'Precios Accesibles', address: 'Bogota - Av. 15 Nro. 35', image: 'https://www.recetasnestle.com.co/sites/default/files/2022-06/ingredientes-comida-de-mar-parrilla.jpg' },
  { name: 'Comida De Mar', description: 'Aquí se come como en casa pero sin tener que lavar los platos', address: 'Cartagena - Av. 17 Nro. 15', image: 'https://www.recetasnestle.com.co/sites/default/files/2022-06/ingredientes-comida-de-mar-parrilla.jpg' },
  { name: 'Comida Japonesa', description: 'Rico Japon', address: 'Bogota - Av. 28 Nro 19', image: 'https://topadventure.com/__export/1669493518121/sites/laverdad/img/2022/11/26/cocina_japonesa_platillos_portada.jpg_218792355.jpg' }
];

//Funcion para cargar el html de la pagina de inicio
function CargarRestaurantes(restaurantes){
  //recorrer el arreglo de restaurantes
  let restaurantesHTML = '';
  for (let i = 0; i < restaurantes.length; i++) {
    restaurantesHTML += `
    <div class="restaurant-option">
      <img src="${restaurantes[i].image}" alt="${restaurantes[i].name}" width="300" height="200">
      <h3>${restaurantes[i].name}</h3>
      <p>${restaurantes[i].address} <br> ${restaurantes[i].description}</p>
    </div>
    `;
    //agregar al Div .content-restaurant-option
    document.querySelector('.content-restaurant-option').innerHTML = restaurantesHTML;
  }

}

function CargarRestaurantesTable(restaurantes){
  //vaciar tbody de la tabla .table
  document.querySelector('.table tbody').innerHTML = '';
  let restaurantesHTML = '';
  for (let i = 0; i < restaurantes.length; i++) {
    restaurantesHTML += `
    <tr>
      <td>${restaurantes[i].name}</td>
      <td>${restaurantes[i].address}</td>
      <td>${restaurantes[i].description}</td>
      <td><img src="${restaurantes[i].image}" alt="${restaurantes[i].name}" width="100" height="100"></td>
    </tr>
    `;
    //agregar al tbody de la tabla .table
    document.querySelector('.table tbody').innerHTML = restaurantesHTML;
  }
}

function addRestaurant(){
  //Obtener los valores de los inputs del formulario #newRestaurantForm
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let address = document.getElementById('address').value;
  let image = document.getElementById('image').value;

  //verificar que los campos no esten vacios
  if(name != '' && description != '' && address != '' && image != ''){
    //adiccionar los valores al arreglo de restaurantes
    restaurants.push({name, description, address, image});
    //actualizar la lista de restaurantes
    CargarRestaurantesTable(restaurants);
    //limpiar los campos del formulario
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('address').value = '';
    document.getElementById('image').value = '';
    //mostrar mensaje de exito
    alert('Restaurante agregado con exito');
  }else{
    alert('Todos los campos son obligatorios');
  }
}

function searchRestaurant(){
  //Obtener el valor del input #textSearchRestaurant
  let search = document.getElementById('textSearchRestaurant').value;
  //verificar que el campo no este vacio
  if(search != ''){
    //filtrar el arreglo de restaurantes
    let filteredRestaurants = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(search.toLowerCase()));
    //actualizar la lista de restaurantes
    CargarRestaurantesTable(filteredRestaurants);
  }else{
    alert('El campo de busqueda no puede estar vacio');
  }
}