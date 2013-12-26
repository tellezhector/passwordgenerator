interface = {};

interface.getIt = function()
{
	var difficulty = jQuery('#difficulty').val();
    var seed = jQuery('#seed').val()
	var word = jQuery('#word').val();
    var pass = p.translate(word, seed, difficulty);
	jQuery("#myModal").modal("show");
    var result = jQuery("#result").val(pass);
	result.select();
}

jQuery(document).ready(
	function()
	{
		jQuery("#myModal").on("shown.bs.modal", function()
			{
				var result = jQuery("#result");
				result.select();
			}
		);
	}
);