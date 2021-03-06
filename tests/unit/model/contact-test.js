import { test, moduleForModel } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('contact', 'Contact model', {
  need:['model:addressable', 'model:address']
});

test('Relationships with other models', function(assert){
  assert.expect(2);
  var contact = this.store().modelFor('contact');
  var relationshipAddress = Ember.get(contact, 'relationshipsByName').get('address');

  assert.equal(relationshipAddress.key, "address");
  assert.equal(relationshipAddress.kind, "belongsTo");
});
