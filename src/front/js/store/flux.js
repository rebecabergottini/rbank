import axios from "axios";

const getState = ({ setStore }) => {
  return {
    store: {
      message: null,
      user: {}, // Estado inicial del usuario
      transfers: []
      },
    actions: {
      // Use getActions to call a function within a function
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      changeColor: (index, color) => {
        // Get the store
        const store = getStore();

        // Loop through the entire demo array to find the respective index and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
        // Reset the global store
        setStore({ demo: demo });
      },


      // Función para crear un nuevo usuario
      createUser: async (full_name, email, dni, password) => {
        try {    
        let response = await axios.post("https://rebecabergottini-automatic-space-66gq7gqgj5924gxw-3001.preview.app.github.dev/api/signup", {
            full_name: full_name,
            email: email,
            dni: dni,
            password: password
        })
          localStorage.setItem("token", response.data.token); // Almacenar el token en el localStorage
          localStorage.setItem("auth", true); // Establecer el estado de autenticación a true
          setStore({
            user:response.data.user,
            auth: true,
          }); // Actualizar el estado
          return true;
        } catch (error) {
          alert(error);
        }
      },
    
      // Función para iniciar sesión
      login: async (email, password) => {
        try {
          let response = await axios.post(
            "https://rebecabergottini-automatic-space-66gq7gqgj5924gxw-3001.preview.app.github.dev/api/login",
            {
              email: email,
              password: password,
            }
          );
          console.log(response)
          localStorage.setItem("token", response.data.token); // Almacenar el token en el localStorage
          localStorage.setItem("auth", true); // Establecer el estado de autenticación a true
          setStore({
            auth: true,
          }); // Actualizar el estado
          setStore({user:response.data.user})
          return true;
        } catch (error) {
          alert(error);
        }
      },

      // Función para cerrar sesión
      logout: () => {
        localStorage.removeItem("token"); // Eliminar el token del localStorage
        localStorage.removeItem("auth"); // Eliminar el estado de autenticación del localStorage
        setStore({
          auth: false, // Establecer el estado de autenticación a false
        }); // Actualizar el estado
      },
      getTransfers: async () =>{
        const opt = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
          },
        }
        try {
          const resp = await fetch("https://rebecabergottini-automatic-space-66gq7gqgj5924gxw-3001.preview.app.github.dev/api/transfers",opt)
          const data = await resp.json()
          setStore({transfers: data})
        } catch (error) {
          console.log(error)
        }
      },
      // Funcion para hacer la transferencia
      transfers: async (iban, amount) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"))
        
        const raw = JSON.stringify({
          "receiver_iban": iban,
          "amount": amount
        });
        
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://rebecabergottini-automatic-space-66gq7gqgj5924gxw-3001.preview.app.github.dev/api/transfers", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        }
      }
    }
  };

export default getState;
