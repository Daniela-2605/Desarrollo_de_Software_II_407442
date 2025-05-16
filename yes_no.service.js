const getYesNoFetch = async() => {
    const url = "https://yesno.wtf/api?force=yes";
    const response = await fetch(url);

    if(!response) {
        throw new Error("Error al cosultar el servidor");
    }

    const data = await response.json();
    return {
        answer: data.answer,
        forced: data.forced,
    }
};

getYesNoFetch().then((response) => {
    console.log(response);
});

module.exports = { getYesNoFetch }; 


