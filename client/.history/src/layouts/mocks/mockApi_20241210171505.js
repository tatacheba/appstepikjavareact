export const getContacts = () => Promise.resolve([]);
export const addContact = (contact) =>
    Promise.resolve({ ...contact, id: Date.now() });
export const deleteContact = (id) => Promise.resolve(id);
