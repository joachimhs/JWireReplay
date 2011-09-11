// ==========================================================================
// Project:   JWireReplayView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals JWireReplayView */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
JWireReplayView = SC.Application.create(
  /** @scope JWireReplayView.prototype */ {

  NAMESPACE: 'JWireReplayView',
  VERSION: '0.1.0',

  JWireReplayStore: SC.Store.create().from(SC.Record.fixtures)
});
