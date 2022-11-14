import { ICoursesResponse } from "../types/course"
import api from "./api"

export async function getCourses(): Promise<ICoursesResponse> {
  const response = await api.get('/courses')
  return response.data    
}