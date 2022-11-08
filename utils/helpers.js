export const getCategories = (list) => {
  let a = (list || []).map(item => {
    return {
      id: item.categoryId,
      name: item.category,
      slug: item.category
    }
  })
  return a
}
