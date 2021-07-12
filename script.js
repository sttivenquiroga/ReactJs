const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      // people(json.results, json.info);
    })
    .catch((error) => {
      console.log("Error ", error);
    });
};

const people = (people, pages) => {
  let header = React.createElement(
    "div",
    {
      id: "header",
      className: "header",
    },
    React.createElement(
      "header",
      null,
      React.createElement("h1", null, "Rick And Morty"),
      React.createElement(
        "ul",
        { className: "headerButton" },
        React.createElement(
          "li",
          { className: "page-item" },
          React.createElement("a", { className: "page-link" })
        )
      )
    )
  );
  let personajes = React.createElement(
    "div",
    { id: "containerPersonajes", className: "containerPersonajes" },
    React.createElement(
      "div",
      { className: "personaje" },
      people.map((pj, i) =>
        React.createElement(
          "div",
          { className: "personajeData", key: i },
          React.createElement("img", { src: pj.image }),
          React.createElement("h2", null, "Nombre: " + pj.name),
          React.createElement("h3", null, "Genero: " + pj.gender),
          React.createElement("h3", null, "Especie: " + pj.species),
          React.createElement("h3", null, "Estaus: " + pj.status)
        )
      )
    )
  );
  ReactDOM.render(personajes, document.getElementById("root"));
};

getData(API);
