import axios from "axios";

const getState = ({ setStore }) => {
  return {
    store: {
      message: null,
      user: {},
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

      
      createUser: async (full_name, email, dni, password) => {
        try {    
        let response = await axios.post("https://rebecabergottini-scaling-waffle-56qjpqjq6g4f44q6-3001.preview.app.github.dev/api/signup", {
            full_name: full_name,
            dni: dni,
            email: email,
            password: password
        })
        if (response.status === 200) {
          alert(response.data.msg)
          return true;
        }
    } catch (error) {
        if (error.response.status === 401)
            alert(error.response.data.msg)
        return false;
      }
    },
    
      login: async (userEmail, userPassword) => {
        try {
          let response = await axios.post(
            "https://rebecabergottini-scaling-waffle-56qjpqjq6g4f44q6-3001.preview.app.github.dev/api/login",
            {
              email: userEmail,
              password: userPassword,
            }
          );
          console.log(response);

          return true;
        } catch (err) {
          console.log(err);

          if (err.response.status === 404) {
            return false;
          }
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("auth");
        setStore({
          auth: false,
        });
      },
    },
  };
};

export default getState;
