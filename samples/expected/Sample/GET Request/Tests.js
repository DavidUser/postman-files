pm.test('Response OK', function() {
  pm.expect(pm.response.code).to.equal(200);
});

pm.test('Expected Args', function() {
  var first = pm.environment.get("first");
  pm.expect(pm.response.json().args).to.deep.equal({"first": first});
})

pm.test('Expected protocol', function() {
  var expected = pm.environment.get("protocol");
  pm.expect(pm.response.json()["x-forwarded-proto"], expected);
})
