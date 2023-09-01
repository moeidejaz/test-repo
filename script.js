const password = document.getElementById("password")
const eye = document.querySelector(".fa-solid")

password.addEventListener("input", () => {

    setTimeout(() => {
        if (password.value === "") {
            eye.style.display = "none"
        }
    }, 1);
    eye.style.display = "block"
})

eye.addEventListener("click", (e) => {
//SIMPLE APPROACH
    // if (password.type === "password") {
    //     password.type = "text"
    //     eye.classList.remove("fa-eye")
    //     eye.classList.add("fa-eye-slash")
    // } else {
    //     password.type = "password"
    //     eye.classList.remove("fa-eye-slash")
    //     eye.classList.add("fa-eye")
    // }

//PRO APPROACH
    if(eye.classList.contains("fa-eye")){
        password.setAttribute("type","text")
        // eye.classList.remove("fa-eye")
        // eye.classList.add("fa-eye-slash")
        eye.classList.replace("fa-eye","fa-eye-slash")
    } else {
        password.setAttribute("type","password")
        // eye.classList.remove("fa-eye-slash")
        // eye.classList.add("fa-eye")
        eye.classList.replace("fa-eye-slash","fa-eye")
    }
})


const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Dummy Data API Response:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

