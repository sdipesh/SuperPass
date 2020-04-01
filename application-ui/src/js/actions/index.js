import { ADD_APPLICATION } from "../constants/action-types";
import { UPDATE_APPLICATION } from "../constants/action-types";
import { DELETE_APPLICATION } from "../constants/action-types";
import { LOAD_APPLICATIONS } from "../constants/action-types";
import { GET_ALL_APPLICATIONS } from "../constants/action-types";

export function addApplication(payload) {
  return { type: ADD_APPLICATION, payload };
}

export function updateApplication(payload) {
  return { type: UPDATE_APPLICATION, payload };
}

export function deleteApplication(payload) {
  return { type: DELETE_APPLICATION, payload };
}

export function loadApplications(payload) {
  return { type: LOAD_APPLICATIONS, payload };
}

export function getAllApplications(payload) {
  return { type: GET_ALL_APPLICATIONS, payload };
}
