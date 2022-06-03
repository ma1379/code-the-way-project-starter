import { parseFetchResponse } from '../parse-fetch-response/parse-fetch-response';

const baseURL = 'https://dev-lead2change-ctw.azurewebsites.net/example/';

/**
 * It makes a request to the server, parses the response, and returns the students
 * @returns An array of students.
 */
export const getStudents = async () => {
  const response = await fetch(`${baseURL}getstudents`, { method: 'GET' });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint, and returns the student object that was created
 * @param student - The student to add
 * @returns The student object
 */
export const addStudent = async (student) => {
  const response = await fetch(`${baseURL}createstudent`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint with the updated student
 * @param student - The student to update
 * @returns The response from the server.
 */
export const updateStudent = async (student) => {
  const response = await fetch(`${baseURL}updatestudent/${student.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};
