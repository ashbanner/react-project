export async function login(username, password) {
  const response = await fetch(
    "https://umbrage-interview-api.herokuapp.com/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  const data = await response.json();
  return data.access_token;
}

export async function fetchPeople() {
  try {
    const storedToken =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const response = await fetch(
      "https://umbrage-interview-api.herokuapp.com/people",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Request Failed");
    }

    const responseData = await response.json();
    return responseData.people;
  } catch (error) {
    throw new Error("Request Failed");
  }
}

export async function fetchPerson(id) {
  try {
    const storedToken =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const response = await fetch(
      `https://umbrage-interview-api.herokuapp.com/people/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Request Failed");
    }

    const responseData = await response.json();
    return responseData.person;
  } catch (error) {
    throw new Error("Request Failed");
  }
}
