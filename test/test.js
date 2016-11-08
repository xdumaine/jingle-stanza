/* global describe, it, beforeEach, afterEach */

import { assert } from 'chai';
import sinon from 'sinon';
import stanzas from './stanzas';
import jingleStanza from '../index.js';

describe('jingleStanza', function () {
  let sandbox;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('will parse old style session-accepts', function () {
    assert.ok(jingleStanza);
    assert.ok(stanzas.sessionAccept);
    const data = jingleStanza.getData(stanzas.sessionAccept);
    assert.ok(data);
    console.log(data.toJSON().jingle.contents[0].description.toJSON());
    assert.ok(data.jingle.contents);
    assert.ok(data.jingle.contents[0].description);
    assert.equal(data.jingle.contents[0].description.descType, 'rtp');
  });

  it('will parse new style session-accepts', function () {
    assert.ok(jingleStanza);
    assert.ok(stanzas.sessionAccept);
    const data = jingleStanza.getData(stanzas.sessionAccept2);
    console.log(data.toJSON().jingle.contents[0].application.toJSON());
    assert.ok(data.jingle.contents);
    assert.ok(data.jingle.contents[0].application);
    assert.equal(data.jingle.contents[0].application.applicationType, 'rtp');
  });
});
