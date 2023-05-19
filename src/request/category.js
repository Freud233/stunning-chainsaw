import service from "./axios";

export const getCategories = (id) => { 
  return service({
    url: `/categories/${id}`,
    method: 'get',
  })
}