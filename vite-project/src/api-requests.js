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
