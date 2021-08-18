import axios from "axios";

const url = "http://surveyapp.ap-south-1.elasticbeanstalk.com";
// const url = "http://localhost:5000";

export async function fetcher<T>(endPoint: string, token: string) {
  try {
    const response = await axios.get<T>(url + endPoint, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.data;
    return data;
  } catch (e) {
    throw new Error();
  }
}
