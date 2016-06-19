$( document ).on("ready", function() {

	//Link to Firebase
	var trainData = new Firebase ("https://train-schedule-wk7.firebaseio.com/");

	//Button for adding train info
	$("#submit").on("click", function() {

		//Grabs user inputs
		var Name = $("#trainNameInput").val().trim();
		var dest = $("#destinationInput").val().trim();
		var firstTrainTime = moment($("#startInput").val().trim(), "HH:mm").format("X");
		var freq = $("#frequencyInput").val().trim();
		var minAway = 0;
		var next = 0;

		//Creates local temp object for holding employee data

		var newTrainData = {
			destination: dest,
			frequency, frequency,
			minutesAway, minAway,
			nextArrival, next,
			trainName, Name
		}

		// Uploads new train data to database
		traindata.push(newTrainData);

		//logs everything to console
		console.log(newTrainData.destination);
		console.log(newTrainData.frequency);
		console.log(newTrainData.minutesAway);
		console.log(newTrainData.nextArrival);
		console.log(newTrainData.trainName);

		//Prevents moving to new page
		return false;
	})
});