import { SenNotification } from "./send-notification";

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SenNotification()

    const { notification } = await sendNotification.execute({
        content: 'This is a notification',
        category: 'social',
        recipientId: 'example recipient-id'
    });
    expect(notification).toBeTruthy();
  })
});