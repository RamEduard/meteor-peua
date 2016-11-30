/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 11/25/16
 * Time: 4:05 PM
 */

import { AutoForm } from 'meteor/aldeed:autoform';
import mdDateTimePicker from '../../../lib/mdl-date-time-picker/mdDateTimePicker';
import { moment } from 'meteor/momentjs:moment'
import { Random } from 'meteor/random';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';

AutoForm.addInputType('datetime-picker', {
    template: 'afInputDatetimePicker_mdl'
})

Template.afInputDatetimePicker_mdl.onCreated(() => {
    let template = Template.instance();

    // Date Action - Random Id
    template.dateActionId = Random.id();

    // Time Action - Random Id
    template.timeActionId = Random.id();

    // mdDateTimePicker - Date
    template.date = new mdDateTimePicker({
        type: 'date',
        past: moment().startOf('year'),
        future: moment().add('1', 'year').endOf('year')
    });
    // mdDateTimePicker - Time
    template.time = new mdDateTimePicker({
        type: 'time'
    });
})

Template.afInputDatetimePicker_mdl.onRendered(() => {
    let template = Template.instance(),
        inputElement = template.$('.datetime-picker')[0];

    // Date trigger
    template.date.trigger = inputElement;
    template.time.trigger = inputElement

    // Event Listener onOk
    inputElement.addEventListener('onOk', () => {
      let formattedDate = moment(template.date.time).format('YYYY-MM-DD'),
          formattedTime = moment(template.time.time).format('HH:mm:ss'),
          formattedDateTime = formattedDate + ' ' + formattedTime;

      inputElement.value = formattedDateTime;
    });
});

Template.afInputDatetimePicker_mdl.events({
    'click .datetime-picker__date-action': (event, template) => {
        template.date.toggle();
    },
    'click .datetime-picker__time-action': (event, template) => {
        template.time.toggle();
    }
});

Template.afInputDatetimePicker_mdl.helpers({
    dateActionId () {
      let template = Template.instance();

      return template.dateActionId;
    },
    timeActionId () {
      let template = Template.instance();

      return template.timeActionId;
    }
});
