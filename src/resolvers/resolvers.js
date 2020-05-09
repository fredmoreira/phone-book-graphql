import Contact from '../model/contacts';

const resolvers = {
  Query: {
    contacts: () => Contact.find(),
    contact: (_, { id }) => Contact.findById(id),
  },
  Mutation: {
    createContact: (_, { name, phone, mobilephone }) =>
      Contact.create({ name, phone, mobilephone }),
  },
};

export default resolvers;
