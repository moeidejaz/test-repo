// import data from "./dummyData.json"
// console.log(data);

const data = [
    {
        "id": 1,
        "full_name": "John Doe",
        "age": 30,
        "gender": "Male",
        "email": "john.doe@example.com",
        "phone": "+1 (123) 456-7890",
        "address": "123 Main St, Cityville, USA"
    },
    {
        "id": 2,
        "full_name": "Jane Smith",
        "age": 28,
        "gender": "Female",
        "email": "jane.smith@example.com",
        "phone": "+1 (234) 567-8901",
        "address": "456 Elm St, Townsville, USA"
    },
    {
        "id": 3,
        "full_name": "David Johnson",
        "age": 35,
        "gender": "Male",
        "email": "david.johnson@example.com",
        "phone": "+1 (345) 678-9012",
        "address": "789 Oak St, Villageton, USA"
    },
    {
        "id": 4,
        "full_name": "Sarah Williams",
        "age": 25,
        "gender": "Female",
        "email": "sarah.williams@example.com",
        "phone": "+1 (456) 789-0123",
        "address": "101 Pine St, Hamletville, USA"
    },
    {
        "id": 5,
        "full_name": "Michael Brown",
        "age": 40,
        "gender": "Male",
        "email": "michael.brown@example.com",
        "phone": "+1 (567) 890-1234",
        "address": "202 Cedar St, Suburbia, USA"
    },
    {
        "id": 6,
        "full_name": "Emily Davis",
        "age": 22,
        "gender": "Female",
        "email": "emily.davis@example.com",
        "phone": "+1 (678) 901-2345",
        "address": "303 Maple St, Countryside, USA"
    },
    {
        "id": 7,
        "full_name": "Daniel Lee",
        "age": 32,
        "gender": "Male",
        "email": "daniel.lee@example.com",
        "phone": "+1 (789) 012-3456",
        "address": "404 Birch St, Riverside, USA"
    },
    {
        "id": 8,
        "full_name": "Olivia Clark",
        "age": 29,
        "gender": "Female",
        "email": "olivia.clark@example.com",
        "phone": "+1 (890) 123-4567",
        "address": "505 Spruce St, Mountainside, USA"
    },
    {
        "id": 9,
        "full_name": "Matthew Taylor",
        "age": 27,
        "gender": "Male",
        "email": "matthew.taylor@example.com",
        "phone": "+1 (901) 234-5678",
        "address": "606 Redwood St, Lakeshore, USA"
    },
    {
        "id": 10,
        "full_name": "Sophia Martinez",
        "age": 31,
        "gender": "Female",
        "email": "sophia.martinez@example.com",
        "phone": "+1 (012) 345-6789",
        "address": "707 Willow St, Beachtown, USA"
    },
    {
        "id": 10,
        "full_name": "xxx",
        "age": 31,
        "gender": "Female",
        "email": "sophia.martinez@example.com",
        "phone": "+1 (012) 345-6789",
        "address": "707 Willow St, Beachtown, USA"
    }
]

const users = document.querySelector(".data")

data.map(data => {
    users.innerHTML += `
    <div class="info">
        <h4 class="fullName">${data.full_name}</h4>
        <p class="gender">${data.gender}</p>
    </div>
    `
})

const inputEl = document.getElementById("input")
inputEl.focus()

const searchData = (e) => {


    const usersList = document.querySelectorAll(".info")
    const term = (e.target.value).toLowerCase()

    usersList.forEach(data => {
        const name = data.querySelector(".fullName").textContent.toLowerCase()
        const gender = data.querySelector(".gender").textContent.toLowerCase()
        
        if (name.includes(term) || gender.includes(term)){
            data.style.display = "flex"
        } else {
            data.style.display = "none"
        }
    })
}

inputEl.addEventListener("input", searchData)