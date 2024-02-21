import service from "@/request/request.ts"
type StrOrnull = string | null
type Num = number

interface changeT<T> {
  author: T
  bookname: T
  id: number
  publisher: T
}
type MyboosFormType = changeT<StrOrnull>

// 图书管理页面
export function getBookList(params: { creator: StrOrnull }) {
  return service({
    url: "",
    params,
  })
}

export function addBook(data: MyboosFormType) {
  return service({
    url: "",
    method: "post",
    data,
  })
}
export function deleteBook(id: Num) {
  return service({
    url: `/${id}`,
    method: "delete",
    data: id,
  })
}
export function getBook(id: Num) {
  return service({
    url: `/${id}`,
    data: id,
  })
}
export function editBook(id: Num, data: MyboosFormType) {
  return service({
    url: `/${id}`,
    method: "put",
    data,
  })
}
