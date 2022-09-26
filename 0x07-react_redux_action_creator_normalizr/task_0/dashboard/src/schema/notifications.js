import * as notifications from '../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
  return notifications.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
}
