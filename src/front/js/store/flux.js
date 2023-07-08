import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
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

      createUser: async (full_name, email, dni, password) => {
        try {    
        let response = await axios.post("https://rebecabergottini-scaling-waffle-56qjpqjq6g4f44q6-3001.preview.app.github.dev//api/signup", {
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
            "https://rebecabergottini-scaling-waffle-56qjpqjq6g4f44q6-3001.preview.app.github.dev//api/login",
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
        localStorage.removeItem("myToken");
        return false;
      },
    },
  };
};

export default getState;
