/* eslint-disable import/prefer-default-export */
import mongoose from 'mongoose';
import { ContactSchema } from '../model/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
  const newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) res.send(err);
    res.json(contact);
  });
};

export const getContact = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) res.send(err);
    res.json(contact);
  });
};
