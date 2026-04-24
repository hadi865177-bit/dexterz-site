// Generate SEO-friendly slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Get blog ID from slug by matching title
export const getBlogIdFromSlug = (slug: string, blogs: any[]): string | null => {
  const blog = blogs.find(b => generateSlug(b.title) === slug);
  return blog?.id || null;
};
