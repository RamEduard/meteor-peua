/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 11/14/16
 * Time: 10:44 AM
 */

import { AutoForm } from 'meteor/aldeed:autoform'
import { ReactiveVar } from 'meteor/reactive-var'
import { Template } from 'meteor/templating'

AutoForm.addInputType('textarea-jodit', {
    template: 'afTextareaJodit'
})

Template.afTextareaJodit.onCreated(function() {
    // Update value
    this.value = new ReactiveVar(this.data.value);
})

Template.afTextareaJodit.onRendered(function() {
    let template = this,
        $textarea = template.$('textarea'),
        joditEditor = new Jodit($textarea, {
            "toolbarButtonSize": "large"
        });

    template.autorun(() => {
        template.value.set(joditEditor.val())
    });
});