import { test, moduleForModel } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('packages_location', 'PackagesLocation Model', {
  needs: ['model:item', 'model:image', 'model:donor_condition', 'model:user', 'model:designation', 'model:code', 'model:location']
});

test('Relationships with other models', function(assert) {
  assert.expect(4);
  var PackagesLocation = this.store().modelFor('packages_location');
  var relationshipWithItem = Ember.get(PackagesLocation, 'relationshipsByName').get('item');
  var relationshipWithLocation = Ember.get(PackagesLocation, 'relationshipsByName').get('location');

  assert.equal(relationshipWithItem.key, 'item');
  assert.equal(relationshipWithItem.kind, 'belongsTo');
  assert.equal(relationshipWithLocation.key, 'location');
  assert.equal(relationshipWithLocation.kind, 'belongsTo');
});

test('Checking computed properties', function(assert) {
  assert.expect(1);
  var packages_location = this.subject({ quantity: 5 });
  assert.equal(packages_location.get('quantityToMove'), 5);
});

test('PackagesLocation is a valid ember-data Model', function (assert) {
  assert.expect(1);

  var store  = this.store();
  var record = null;

  Ember.run(function() {
    store.createRecord('packages_location', {id: 1, quantity: 5});
    record = store.peekRecord('packages_location', 1);
  });

  assert.equal(record.get('quantity'), 5);
});
