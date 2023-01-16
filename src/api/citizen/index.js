import { Response } from "api/root";

export class CitizenFetcher {
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
      const response = await this.instance.get("/citizens");

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

  async createCitizen(formData) {
    // Get token from local storage
    const token = localStorage.getItem("cnic-token");

    // Add token to headers
    this.addToken(token);

    // Create citizen
    try {
      const response = await this.instance.post(
        "/citizens",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
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
        error: err,
        status: err.response.status,
      });
    }
  }
}
