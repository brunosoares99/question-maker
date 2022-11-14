export interface ICoursesResponse {
  data: ICourses[]
}

export interface ICourses {
  id: string
  name: string
  description: string
}