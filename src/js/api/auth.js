const asyncTimeout = (t) => new Promise((resolve) => setTimeout(resolve, t));

/**
 * Log a user into application.
 *
 * @param {string} username
 * @param {string} password
 * @returns array containing error object on first element and data on the second element.
 */
export const login = async (username, password) => {
  try {
    // fake api call
    await asyncTimeout(500);
    var dataUser = {
      email: username,
      password: password,
    };

    let uri = process.env.VUE_APP_ROOT_API + '/api/login'
    this.axios.post(uri, dataUser).then((response) => {});
    if (username == "") {
      throw new Error("Username tidak boleh kosong");
    } else if (password == "") {
      throw new Error("Password tidak boleh kosong");
    } else if (username !== "user123" && password !== "123456") {
      throw new Error("Username atau password salah");
    } else {
      return [true, null];
    }
  } catch (error) {
    return [null, error];
  }
};

/**
 * Register a new user into application.
 *
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {string} cpassword
 * @returns array containing error object on first element and data on the second element.
 */
export const register = async (username, email, password, cpassword) => {
  try {
    // fake api call
    await asyncTimeout(500);
    var dataUser = {
      email: username,
      password: password,
      cpassword: cpassword,
    };
    let uri = process.env.VUE_APP_ROOT_API + '/api/register'
    this.axios.post(uri, dataUser).then((response) => {});
    if (username == "") {
      throw new Error("Username tidak boleh kosong");
    } else if (password == "") {
      throw new Error("Password tidak boleh kosong");
    } else if (cpassword == "") {
      throw new Error("Password salah");
    } else if (cpassword !== password) {
      throw new Error("Password salah");
    } else if (username !== "user123" && password !== "123456") {
      throw new Error("Username atau password salah");
    } else {
      return [true, null];
    }
  

    if (username !== "user123" && email !== "test@mail.com" && password !== "123456") throw new Error("Akun telah terdaftar");

    return [true, null];
  } catch (error) {
    return [null, error];
  }
};

/**
 * Send a forgot password link to user email.
 *
 * @param {string} email
 * @returns array containing error object on first element and data on the second element.
 */
export const forgotPassword = async (email) => {
  try {
    // fake api call
    await asyncTimeout(500);

    if (email !== "test@mail.com") throw new Error("Email tidak ditemukan");

    return [true, null];
  } catch (error) {
    return [null, error];
  }
};
