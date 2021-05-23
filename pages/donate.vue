<template>
	<div>
		<div class="content">
			
			<h1>Donate</h1>

			<p>If you want to support Blockbench development and help pay the running cost of the servers, feel free to use the Donate button.
				Include your Discord user name in the donation message to receive a Donator role on the Blockbench Discord server.</p>

			<p><b>What donations are used for:</b></p>
			<ul>
				<li>50% of the received donations go to the Coalition of <a href="https://www.rainforestcoalition.org/" target="_blank" rel="noopener">Rainforest Nations</a> to protect the rainforests, reduce carbon dioxide emissions and mitigate climate change.</li>
				<li>The remaining 50% go towards Blockbench development and server costs.</li>
			</ul>

			<div>
				<form target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post" class="form-group">
					<input type="hidden" name="cmd" value="_donations">
					<input type="hidden" name="business" value="jannis@blockbench.net">
					<input type="hidden" name="item_name" value="Blockbench">
					<input type="hidden" name="item_number" value="blockbench">
					<input type="hidden" name="currency_code" value="USD">
					<input type="hidden" name="amount" id="amount_36a6697fe5eebfeabc64f9e70fb8921e" value="">
					<input type="hidden" name="no_note" value="0">
					<input type="hidden" name="no_shipping" value="1">
					<input type="hidden" name="notify_url" value="https://blockbench.net/wp-admin/admin-post.php?action=add_wpedon_button_ipn">
					<input type="hidden" name="lc" value="EN_US">
					<input type="hidden" name="bn" value="WPPlugin_SP">
					<input type="hidden" name="return" value="">
					<input type="hidden" name="cancel_return" value="">
					<input class="wpedon_paypalbuttonimage" type="image" src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="Make your payments with PayPal. It is free, secure, effective." style="border: none;">
					<img alt="" border="0" style="border:none;display:none;" src="https://www.paypal.com/EN_US/i/scr/pixel.gif" width="1" height="1">
				</form>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	head () {
		return {
			title: 'Donate - Blockbench',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Donate to Blockbench'
				}
			]
		}
	}
}
</script>
