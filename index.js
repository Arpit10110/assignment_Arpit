const getUsersButton = document.getElementById("get-users-button");
const userGrid = document.getElementById("user-grid");
const loader = document.getElementById("loader");

getUsersButton.addEventListener("click", () => {
  loader.style.display = "block";
  getUsersData();
});

async function getUsersData() {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    const users = data.data;

    userGrid.innerHTML = "";
    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";
      userCard.innerHTML = `
        <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" class="user-avatar">
        <h3>${user.first_name} ${user.last_name}</h3>
        <p>${user.email}</p>
      `;
      userGrid.appendChild(userCard);
    });

    loader.style.display = "none";
  } catch (error) {
    console.error("Error fetching users:", error);
    loader.style.display = "none";
  }
}
