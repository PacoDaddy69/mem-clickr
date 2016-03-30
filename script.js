$(document).ready(function()	{

	console.log("Loaded");

	var player1 = false;
	
	var player2 = false;
	
	var clicks1 = 0;
	
	var clicks2 = 0;
	
	var fbRef = new Firebase("https://burning-inferno-220.firebaseio.com/");
	
	$('#player1').click(function()	{
		
		player2 = false;
		
		player1 = true;
		
		$('#player2').hide();
			
		$('#doge').click(function()	{
			
			clicks1 = clicks1 + 1;
			
			fbRef.child('clicks1').set(clicks1);
			
			$('#clicks1').text(clicks1);
			
		});
		
	});
	
	$('#player2').click(function()	{
		
		player1 = false;
		
		player2 = true;
		
		$('#player1').hide();
			
		$('#doge').click(function()	{
			
			clicks2 = clicks2 + 1;
			
			fbRef.child('clicks2').set(clicks2);
			
			$('#clicks2').text(clicks2);
			
		});
		
	});
		
	});