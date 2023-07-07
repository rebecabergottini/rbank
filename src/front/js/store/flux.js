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

      createUser: (username, email, password) => {
        fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          body: JSON.stringify({
            username,
            email,
            dni,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => console.log(data));
      },

      login: async (userEmail, userPassword) => {
        try {
          let response = await axios.post(
            "https://rebecabergottini-automatic-lamp-pvr4qr4r4xjf9w5v-3001.preview.app.github.dev/api/login",
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
        let token = localStorage.getItem("myToken");
        return token != null ? true : false;
      },
    },
  };
};

export default getState;
