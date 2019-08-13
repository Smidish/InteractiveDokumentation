var questions = [
  {
    frage: "Hey, ich bin Finge und ich kenne mich verdammt gut mit Menschen und Finanzen aus. Ich würde dir gerne ein paar Fragen stellen. Ich speichere keine von deinen Angaben.",
    id: 0,
    buttons: [
      {
        antwort: "Cool",
        id: 0,
        questionId: 1
      },
      {
        antwort: "HELL YES!",
        id: 1,
        questionId: 1
      }
    ]
  },
  {
    frage: "Was tust du momentan mit deinem Leben?",
    id: 1,
    buttons: [
      {
        antwort: "Schüler/Azubi",
        id: 0,
        questionId: 2
      },
      {
        antwort: "Student",
        id: 1,
        questionId: 0
      },
      {
        antwort: "Ich bin ein produktiver Teil der Gesellschaft und arbeite",
        id: 2,
        questionId: 0
      }
    ]
  },
  {
    frage: "Wie viel Geld hast du am Ende des Monats über?",
    id: 2,
    buttons: [
      {
        antwort: "Ein bisschen was",
        id: 0,
        questionId: 3
      },
      {
        antwort: "Nichts oder wenig",
        id: 1,
        questionId: 4
      }
    ]
  }
];

var results = [
{
  name: "Playful: Sorgloses Wochenende",
  text: "<p>lucky you</p>"
},

{
  name: "Dreamy: Urlaubsvorfreude",
  text: "<p>lucky you</p>"
},
{
  name: "Helpful: Charity",
  text: "<p>lucky you</p>"
},
{
  name: "Useful: Notgroschen",
  text: "<p>lucky you</p>"
},
{
  name: "Serious: Altersvorsorge",
  text: "<p>lucky you</p>"
}];

var tools = [
{
  name: "Sporty",
  text: "<p>lucky you</p>"
},

{
  name: "Foodie",
  text: "<p>lucky you</p>"
},
{
  name: "Sleepy",
  text: "<p>lucky you</p>"
},
{
  name: "Produktiv",
  text: "<p>lucky you</p>"
},
{
  name: "Automatisch",
  text: "<p>lucky you</p>"
},
{
  name: "Selbstkontrolle",
  text: "<p>lucky you</p>"
}];

//Erste Frage laden
$(document).ready(function(){
  loadNextQuestion(0);
});

function loadNextQuestion(quest_id){
   //shizzle leeren
   var id = 0;
   $( "#finge" ).empty();
   $('#btns').empty();
   $('#finge').show();
   $('#btns').show();
   $('#result').hide();

   //checken, ob ein Endscreen kommen muss
   if(quest_id==3||quest_id==4){
      $('#finge').hide();
      $('#btns').hide();
      $('#result').show();

      switch(quest_id){
        case 3: id=0; break;
        case 4: id=1; break;
        case 66: id=2; break;
        case 77: id=3; break;
        case 88: id=4; break;
        default: loadNextQuestion(0); break;
      }
      //Endscreen laden
      $('#what').append(results[id].text);
  }
  else{
   //Frage updaten
   $('#finge').append("<p>"+ questions[quest_id].frage +"</p>");

   //Buttons zur Frage generieren
   for(i=0; i< questions[quest_id].buttons.length; i++){
      id = questions[quest_id].buttons[i].id;
      $('#btns').append("<button id="+id+">"+questions[quest_id].buttons[i].antwort+"</button>");

      //Buttons Funktion zur Weiterleitung an die nächst Frage mitgeben
      $('#'+id).click(function() {
        var localid = this.id;
        var currentquestionid = quest_id;
        loadNextQuestion(questions[quest_id].buttons[this.id].questionId);
      });
    }
  }
}

$( function() {
    $( "#datepicker" ).datepicker();
  } );
