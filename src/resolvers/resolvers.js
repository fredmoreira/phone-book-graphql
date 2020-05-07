const contacts = [
  { id: 1, name: 'Fred', phone: '999888777', mobilephone: '888777999' },
  { id: 2, name: 'Tester', phone: '777888111', mobilephone: '22222288' },
  { id: 3, name: 'DevJs', phone: '666555444', mobilephone: '223556889' },
];

module.exports = {
  Query: {
    contacts: () => contacts,
    contact: () => contacts[1],
  },
  Mutation: {
    createContact: () => contacts[0],
  },
};
