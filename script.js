function random_photo() {
	var array_of_names_of_images = ['image001.jpg','image002.jpeg','image003.jpeg','image004.jpeg',
	'image005.jpeg','image006.jpeg','image007.jpeg','image008.jpeg','image009.jpeg','image010.jpeg']
	var random_index = Math.floor(Math.random() * 10);
	var div_content = array_of_names_of_images[random_index];
	document.getElementById('content').src = div_content;
	console.log(div_content);
}
function sound(){
	var myAudio = new Audio();        // create the audio object
	myAudio.src = "sound_effect.mp3"; // assign the audio file to it
	myAudio.play(); 
}
random_photo();
sound();