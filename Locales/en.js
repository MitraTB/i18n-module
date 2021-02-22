export default async (context, locale) => {
  return await Promise.resolve({
    pageTitle: 'ProDuctList',
    home: 'Home',
    about: 'About',
    lang: 'Lang',
    user: 'User',
    search: 'Search',
    profile: 'Profile',
    register: 'Sign Out',
    newProduct: 'New Product',
    products: 'Products',
    categories: 'Categories'
  })
}
