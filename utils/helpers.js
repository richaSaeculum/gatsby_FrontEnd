export const getCategories = (list) => {
  let a = list.map(item => {
    return {
      id: item.id,
      name: item.name,
      slug: item.slug
    }
  })
  return a
}
