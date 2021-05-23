import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TaskCollection';
import { Accounts } from 'meteor/accounts-base';

const SEED_USERNAME = 'meteorite1';
const SEED_PASSWORD = 'password';
const insertTask = (taskText, user) => TasksCollection.insert({ text: taskText, userId: user._id,createdAt: new Date() });
 
Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  const user = Accounts.findUserByUsername(SEED_USERNAME);
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(taskText => insertTask(taskText, user));
  }
});
