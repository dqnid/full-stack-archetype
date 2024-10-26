function generateRandomString(size: number) {
  const value = Math.random() * Math.pow(10, size);
  return btoa(value.toString());
}

export { generateRandomString };
