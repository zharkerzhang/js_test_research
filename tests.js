QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "asynchronous test: async input focus", function( assert ) {
  var done = assert.async();
  var input = $( "#test-input" ).focus();
  setTimeout(function() {
    assert.equal( document.activeElement, input[0], "Input was focused" );
    done();
  });
});


QUnit.test("Service Partner checkbox test", function(assert) {
	$("input[name='Q_partnerType'][value=1]").click();
	var result = $('#servicePartner_spTypeId').is(':hidden');
	assert.ok(result,"Passed");
});

QUnit.test( "asynchronous test: async get resource", function( assert ) {
  var done = assert.async();
  $.getJSON("resource.json").done(function(result){
  	console.log(result);
    	assert.ok( result != null, "result not null" );
    	done();
  });
});
/*
QUnit.test( "asynchronous test: async get resource", function( assert ) {
  	var done = assert.async();
  	getServicePartnerList2(getServicePartnerListCallback);
  	console.log(result);
    	assert.ok( result != null, "result not null" );
    	done();
  });
*/
});

