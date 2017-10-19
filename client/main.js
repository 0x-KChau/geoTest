import {Meteor} from 'meteor/meteor';
import {Routes} from '../import/routes/routes';

Meteor.startup(()=>{
  Routes()
})
