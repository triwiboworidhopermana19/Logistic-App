const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

export const login = async ({ username, password }) => {
  try {
    // fake api call
    await delay(500);

    if (username !== "user123" && password !== "123456")
      throw new Error("Username atau password salah");

    return [true, null];
  } catch (error) {
    return [null, error];
  }
};

export const register = ({ username, email, password }) => {};

export const forgotPassword = async ({ email }) => {
  try {
    // fake api call
    await delay(500);

    if (email !== "test@mail.com") throw new Error("Email tidak ditemukan");

    return [true, null];
  } catch (error) {
    return [null, error];
  }
};
