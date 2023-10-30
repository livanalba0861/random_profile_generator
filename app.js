function inputValues (input, textElement) {
    input.addEventListener("change", () => {
        textElement.innerText = input.value
    })
};

inputValues (document.getElementById("first_name"), document.getElementById("profile_fName"));
inputValues (document.getElementById("last_name"), document.getElementById("profile_lName"));
inputValues (document.getElementById("position"), document.getElementById("profile_position"));
inputValues (document.getElementById("role"), document.getElementById("profile_role"));
inputValues (document.getElementById("city"), document.getElementById("profile_city"));
inputValues (document.getElementById("country"), document.getElementById("profile_country"));



