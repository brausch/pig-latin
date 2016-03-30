
// user interface logic
$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("#word").val();
    var splits = [];
    splits = word.split(' ');


    splits.forEach(function(split){
      var vowels = ["a", "e", "i", "o", "u"]
      var newVowel = []

      vowels.forEach(function(vowel){
        if(split.indexOf(vowel) !== -1){
          return newVowel.push(split.indexOf(vowel));
        }
      });


      var min = Math.min.apply(Math, newVowel);
      var begin1 = ""
      var begin2 = ""

      for (var index = 0; index < min; index += 1){
        begin1 = begin1 + split[index];
        begin2 = split.split(split[index]);
        }
        if (min === 0){
          begin1="";
          var pig = split + begin1 + "ay"
        } else {
          var pig = begin2[1] + begin1 + "ay"
        }
        $("#result").show();
        $(".latin").append(" " + pig);

    });

    // });





    $("#result").show();
  });
});
