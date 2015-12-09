var test = require('tape');

test('discovery stanza', function (t) {
  t.plan(1);

  var jingleStanza = require('../index.js');
  var data = jingleStanza.getData('<iq xmlns="jabber:client" to="bob@test.com/sio-5633" type="set" id="56674c910000df445ffa426d"><services xmlns="urn:xmpp:extdisco:1"><service host="stun.l.google.com" port="19302" type="stun"/></services></iq>');
  t.equal(typeof data, 'object');
});
