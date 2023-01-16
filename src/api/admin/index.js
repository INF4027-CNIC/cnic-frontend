import { Response } from "api/root";

export class AdminFetcher {
  constructor() {
    super();
  }

  // Some methods
  async login(payload) {
    // Login
    try {
      const response = await this.instance.post("/auth/login", payload);

      if (response && response.status === 200) {
        return new Response({
          data: response.data,
          status: response.status,
        });
      }
    } catch (err) {
      console.log(err);

      return new Response({
        error: err,
        status: err.response.status,
      });
    }
  }

  async register(payload) {
    // Register
    try {
      const response = await this.instance.post("/auth/register", payload);

      if (response && response.status === 201) {
        return new Response({
          data: response.data,
          status: response.status,
        });
      }
    } catch (err) {
      console.log(err);

      return new Response({
        error: err,
        status: err.response.status,
      });
    }
  }

  async getAdmins() {
    // Get token from local storage
    const token = localStorage.getItem("cnic-token");

    // Add token to headers
    this.addToken(token);

    // Get citizens
    try {
      const response = await this.instance.get("/admins");

      if (response && response.status === 200) {
        return new Response({
          data: response.data,
          status: response.status,
        });
      }
    } catch (err) {
      console.log(err);

      return new Response({
        error: err,
        status: err.response.status,
      });
    }
  }

  async addAdmin(payload) {
    // Get token from local storage
    const token = localStorage.getItem("cnic-token");

    // Add token to headers
    this.addToken(token);

    // Create citizen
    try {
      const response = await this.instance.post("/admin", payload);

      if (response && response.status === 201) {
        return new Response({
          data: response.data,
          status: response.status,
        });
      }
    } catch (err) {
      console.log(err);

      return new Response({
        error: err,
        status: err.response.status,
      });
    }
  }
}
