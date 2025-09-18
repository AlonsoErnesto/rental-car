export const isAdministrator = (userId: string | null | undefined): boolean => {
  return userId === process.env.NEXT_PUBLIC_ADMINISTRATOR;
};
