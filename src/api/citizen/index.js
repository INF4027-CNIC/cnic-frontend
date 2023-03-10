import { Fetcher } from "api/root";
import { Response } from "api/root";

export class CitizenFetcher extends Fetcher {
  constructor() {
    super();
  }

  // Some methods
  async getCitizens() {
    // Get token from local storage
    const token = localStorage.getItem("cnic-token");

    // Add token to headers
    this.addToken(token);

    // Get citizens
    try {
      const response = await this.instance.get("/users/all-users");

      if (response && response.status === 200) {
        return new Response({
          data: response.data,
          status: response.status,
        });
      }
    } catch (err) {
      console.log(err);

      return new Response({
        error: err.response.data,
        status: err.response.status,
      });
    }
  }

  async createCitizen(payload) {
    // Get token from local storage
    const token = localStorage.getItem("cnic-token");

    // Add token to headers
    this.addToken(token);

    // Create citizen
    try {
      const response = await this.instance.post(
        "/users/create",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response && response.status === 201) {
        return new Response({
          data: response.data,
          status: response.status,
        });
      }
    } catch (err) {
      console.log(err);

      return new Response({
        error: err.response.data,
        status: err.response.status,
      });
    }
  }

  async uploadImage(formData: FormData) {
    // Get token from local storage
    const token = localStorage.getItem("cnic-token");

    // Add token to headers
    this.addToken(token);

    // Create citizen
    try {
      const response = await this.instance.post(
        "/users/upload-image",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response && response.status === 201) {
        console.log(response)
        return new Response({
          data: response.data,
          status: response.status,
        });
      }
    } catch (err) {
      console.log(err);

      return new Response({
        error: err.response.data,
        status: err.response.status,
      });
    }
  }
}
