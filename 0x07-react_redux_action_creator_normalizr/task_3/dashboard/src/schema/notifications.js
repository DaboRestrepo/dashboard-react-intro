import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
  const notification = normalizer.entities.notifications;
  const message = normalizer.entities.messages;
  const notByUser = [];

  for (const prop in notification) {
    if (notification[prop].author === userId) {
      notByUser.push(message[notification[prop].context]);
    }
  }
  return notByUser;
}

const user = new schema.Entity("users");

const message = new schema.Entity(
  'messages',
  {},
  {idAttribute: 'guid'}
);

const notification  = new schema.Entity(
  'notifications',
  {
    author: user,
    context: message
  }
);

export const normalizer = normalize(notificationsData.default, [notification]);
