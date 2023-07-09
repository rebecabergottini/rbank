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

      // Función para obtener el perfil del usuario

      // getUserProfile: () => {
      //   const token = getToken(); // Obtener el token almacenado

      //   if (token) {
      //     axios
      //       .get("https://rebecabergottini-scaling-waffle-56qjpqjq6g4f44q6-3001.preview.app.github.dev/api/profile", {
      //         headers: {
      //           "Content-Type": "application/json"
      //         },
      //       })
      //       .then((response) => {
      //         console.log(response.data); // Imprimir datos del perfil en la consola
      //         setStore({ user: response.data });
      //       })
      //       .catch((error) => {
      //         console.error(error); // Manejar el error de la solicitud
      //       });
      //   } else {
      //     console.log("No se encontró ningún token"); // Manejar el caso en el que no hay un token almacenado
      //   }
      // },

      // Función para crear un nuevo usuario
      createUser: async (full_name, email, dni, password) => {
        try {    
        let response = await axios.post("https://rebecabergottini-scaling-waffle-56qjpqjq6g4f44q6-3001.preview.app.github.dev/api/signup", {
            full_name: full_name,
            dni: dni,
            email: email,
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
      login: async (userEmail, userPassword) => {
        try {
          let response = await axios.post(
            "https://rebecabergottini-scaling-waffle-56qjpqjq6g4f44q6-3001.preview.app.github.dev/api/login",
            {
              email: userEmail,
              password: userPassword,
            }
          );
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

      // Función para cerrar sesión
      logout: () => {
        localStorage.removeItem("token"); // Eliminar el token del localStorage
        localStorage.removeItem("auth"); // Eliminar el estado de autenticación del localStorage
        setStore({
          auth: false, // Establecer el estado de autenticación a false
        }); // Actualizar el estado
      },
    },
  };
};

export default getState;
