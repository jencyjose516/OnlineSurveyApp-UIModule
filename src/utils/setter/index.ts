import axios from "axios";

const url = "http://surveyapp.ap-south-1.elasticbeanstalk.com";
// const url = "http://localhost:5000";

export async function setter<T>(
  endPoint: string,
  param: { [key: string]: any },
  token?: string
) {
  const config = token ? { Authorization: `Bearer ${token}` } : undefined;

  try {
    return await axios.post<T>(url + endPoint, param, {
      headers: config,
    });
  } catch (e) {
    throw e;
  }
}
