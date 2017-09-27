$(function(){
	// [Start][cwsp-1209][modeified by Alfred]
	$("input[name='Q_partnerType']").click(function() {
		var partnerType = $("input[name='Q_partnerType']:checked").length;
		if (partnerType < 1) {
			$(this).attr("checked", "checked");
			return;
		}
		if ($(this).val() == 1) {
//			if ($(this).attr("checked") == 'checked') {
			if ($(this).prop("checked")) {
				$('#servicePartner_spTypeId').removeAttr('disabled');
				$('#servicePartner_spTypeId').show();
			} else {
				$('#servicePartner_spTypeId').hide();
				$('#servicePartner_spTypeId').attr('disabled', 'disabled');
			}
		}
	});
	if ($("input[name='Q_partnerType'][value=1]").attr("checked") == 'checked') {
		$('#servicePartner_spTypeId').removeAttr('disabled');
		$('#servicePartner_spTypeId').show();
	} else {
		$('#servicePartner_spTypeId').hide();
		$('#servicePartner_spTypeId').attr('disabled', 'disabled');
	}
	// [End][cwsp-1209][modeified by Alfred]


	function getServicePartnerList() {
		$.getJSON("resource.json").done(function(result){
  			console.log(result);
  		});
	}

	function getServicePartnerListCallback(result) {
		console.log(result);
	}

	function getServicePartnerList2(callback) {
		$.getJSON("resource.json").done(callback);
	}
});