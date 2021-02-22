export default async (context, locale) => {
  return await Promise.resolve({
    pageTitle: 'محصولات',
    home: 'خانه',
    about: 'درباره ما',
    lang: 'زبان',
    user: 'کاربر',
    search: 'جستجو',
    profile: 'پروفایل',
    register: 'ثبت نام',
    newProduct: 'محصول جدید',
    products: 'محصولات',
    categories: 'دسته بندی ها '
  })
}
