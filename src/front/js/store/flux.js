import axios from "axios";

const getState = ({ setStore }) => {
  return {
    store: {
      message: null,
      user: {}, // Estado inicial del usuario
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
a
        // Reset the global store
        setStore({ demo: demo });
      },


      // Función para crear un nuevo usuario
      createUser: async (full_name, email, dni, password) => {
        try {    
        let response = await axios.post("https://rebecabergottini-jubilant-engine-v4v97v96677hxvww-3001.preview.app.github.dev/api/signup", {
            full_name: full_name,
            email: email,
            dni: dni,
            password: password
        })
          localStorage.setItem("token", response.data.access_token); // Almacenar el token en el localStorage
          localStorage.setItem("auth", true); // Establecer el estado de autenticación a true
          setStore({
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
            "https://rebecabergottini-jubilant-engine-v4v97v96677hxvww-3001.preview.app.github.dev/api/login",
            {
              email: email,
              password: password,
            }
          );
          localStorage.setItem("token", response.data.access_token); // Almacenar el token en el localStorage
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

      // // Funcion para hacer la transferencia
      // transfer: async (iban, amount) => {
      //   try {
      //     const token = localStorage.getItem("token"); // Obtener el token de autenticación del localStorage
      
      //     await axios.post(
      //       "https://rebecabergottini-jubilant-engine-v4v97v96677hxvww-3001.preview.app.github.dev/api/transfers",
      //       {
      //         receiver_iban: iban,
      //         amount: amount
      //       },
      //       {
      //         headers: {
      //           "Authorization": "Bearer " + token
      //         }
      //       }
      //     );      
      //     return true;
      //   } catch (error) {
      //     alert(error);
      //   }
      // }      
    },
  };
};

export default getState;
