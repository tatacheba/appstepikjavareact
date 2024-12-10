import mockContacts from "./mocks/mockData";
export const getContacts = () => Promise.resolve([mockContacts]);
export const addContact = (contact) =>
    Promise.resolve({ ...contact, id: Date.now() });
export const deleteContact = (id) => Promise.resolve(id);
