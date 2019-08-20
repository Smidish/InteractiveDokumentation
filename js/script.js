//scroll down for code
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
        questionId: 3
      },
      {
        antwort: "Arbeit",
        id: 2,
        questionId: 7
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
        questionId: 102
      },
      {
        antwort: "Nichts oder wenig",
        id: 1,
        questionId: 101
      }
    ]
  },
  {
    frage: "Hast du ein festes Einkommen?",
    id: 3,
    buttons: [
      {
        antwort: "Ja",
        id: 0,
        questionId: 4
      },
      {
        antwort: "Nein",
        id: 1,
        questionId: 2
      }
    ]
  },
  {
    frage: "Hast du Geld am Ende des Monats über?",
    id: 4,
    buttons: [
      {
        antwort: "Ja, mehr als genug",
        id: 0,
        questionId: 7
      },
      {
        antwort: "Ja, etwas",
        id: 1,
        questionId: 5
      },
      {
        antwort: "Help me.",
        id: 2,
        questionId: 6
      }
    ]
  },
  {
    frage: "Hast du Ersparnisse für Notfälle?",
    id: 5,
    buttons: [
      {
        antwort: "Ja",
        id: 0,
        questionId: 102
      },
      {
        antwort: "Nein",
        id: 1,
        questionId: 103
      }
    ]
  },
  {
    frage: "Hast du Ersparnisse für Notfälle?",
    id: 6,
    buttons: [
      {
        antwort: "Ja",
        id: 0,
        questionId: 101
      },
      {
        antwort: "Nein",
        id: 1,
        questionId: 103
      }
    ]
  },
  {
    frage: "Wie viel verdienst du?",
    id: 7,
    buttons: [
      {
        antwort: "Ich komme gerade so hin...",
        id: 0,
        questionId: 5
      },
      {
        antwort: "Es geeeht?",
        id: 1,
        questionId: 5
      },
      {
        antwort: "Ich kann mich nicht beschweren",
        id: 2,
        questionId: 8
      },
      {
        antwort: "lol",
        id: 3,
        questionId: 7
      }
    ]
  },
  {
    frage: "Hast du dich schon um deine Altersorsorge gekümmert?",
    id: 8,
    buttons: [
      {
        antwort: "Ja",
        id: 0,
        questionId: 105
      },
      {
        antwort: "Nope",
        id: 1,
        questionId: 104
      }
    ]
  }
];

//further....
var results = [
{
  name: "Playful: Sorgloses Wochenende",
  text: "<p style='display: contents'>Was nervt mehr, als besoffene Menschen auf einer Party? Richtig! Selbst auf dieser Party zu sein und nicht genau zu wissen, ob man sich den nächsten Drink überhaupt leisten kann. Nervig. Stressig. Muss nicht sein. Deine persönliche Mission wird dir helfen, diese Situation zu vermeiden.<br>Wir Menschen sind komisch gestrickte Lebewesen. Sobald etwas kostenlos oder gratis erscheint, wollen wir es sofort. Gleichzeitig gibt es den schönen Effekt, dass wir Vorfreude entwickeln. Diese beiden Effekte wollen wir uns in dieser Mission zunutze machen. <br><br>Schau in deinen Kalender. Wie sehen deine nächsten Wochenenden aus? Hast du schon Pläne?<br>Suche dir einen Abend heraus. Einen Abend, den du für dich planen wirst. Das wird der Abend, auf den du dich die ganze Woche freuen wirst und den wir gemeinsam zu einem besonderen und sorglosen Erlebnis machen werden. <br><br>Überlege dir gut, welche Aktivitäten du machen möchtest und kalkuliere, wie viel Geld du etwa dafür brauchst. <br> ProTipp #1: Plane mit 20% Puffer. Trust me. Es fühlt sich einfach besser an und du bist flexibler.<br><br>Die Psychologie dahinter: <br> Erlebnisse und Erfahrungen machen glücklicher als Materielles. Sie bringen Menschen zusammen und erzeugen ein Gefühl von sozialer Verbundenheit. Außerdem haben Erlebnisse,welche in der Zukunft liegen, die Eigenschaft, stärkere Emotionen zu erzeugen und durch Visualisierung das Bild zu glätten und rosig zu zeichnen.Durch das Sparen VOR dem Ereignis kannst du außerdem einen Teil des “Pain of Paying” vermeiden, da du mental bereits das Geld ausgegeben hast und dann quasi “kostenlos” das Erlebnis genießen kannst.<br><br>Wenn du den größten Happiness Boost bekommen willst, dann gönne dir bewusst etwas.Mach es zu etwas besonderem und bereite dich schon im Vorhinein mental darauf vor, indem du für dich visualisiert, wie der Abend ablaufen wird. <br><br>Pro Tipp #2: Wenn es dein Budget dir erlaubt, plane auch einen Drink für deine Freunde mit ein. Teilen und an andere zu geben sorgt ebenfalls für einen Happiness-Boost.<br><br>Und jetzt fang an und hab ganz viel Spaß! <3 </p>"
},
{
  name: "Dreamy: Urlaubsvorfreude",
  text: "<p style='display: contents'>Egal ob dein Abenteuer schon in Planung ist oder du jetzt erst anfängst: Deine Mission ist es, dich auf deinen Urlaub vorzubereiten und ganz nebenbei darauf zu sparen. <br><br>Wir Menschen sind komisch gestrickte Lebewesen. Sobald etwas kostenlos oder gratis erscheint, wollen wir es sofort beziehungsweise es fühlt sich einfach besser an. Diesen Effekt wollen wir uns in dieser Mission zunutze machen, indem wir den finanziellen Teil vorher erledigen, um dann voll und ganz das Erlebnis genießen zu können. <br><br>Überlege zunächst, welche Aktivitäten wünschenswert sind - ohne erstmal über Geld nachzudenken. Dann schau, was in deinem Budget drin is und wie du zu teure Dinge vielleicht auf andere Art und Weise ermöglichen kannst. Kalkuliere, wie viel Geld du etwa insgesamt brauchst - Das wird dein Sparziel. Für jetzt kannst du es erstmal schätzen. <br> ProTipp #1: Plane mit 20% Puffer. Trust me. Es fühlt sich einfach besser an und du bist flexibler. <br><br>Die Psychologie dahinter:<br>Erlebnisse und Erfahrungen machen glücklicher als Materielles. Sie bringen Menschen zusammen und erzeugen ein Gefühl von sozialer Verbundenheit.<br>Gönn dir etwas. Mach es bewusst zu etwas besonderem. So kannst du es voll und ganz genießen und bekommst den größten Happiness-Boost.<br>Außerdem haben Erlebnisse,welche in der Zukunft liegen, die Eigenschaft, stärkere Emotionen zu erzeugen und durch Visualisierung das Bild zu glätten und rosig zu zeichnen. Je mehr du (positiv) darüber nachdenkst und dich darauf freust, desto mehr Happyness bekommst du auch für dein Geld. Durch das aktive Sparen VOR dem Ereignis kannst du außerdem einen Teil des “Pain of Paying” vermeiden, da du mental bereits das Geld ausgegeben hast und dann quasi kostenlos das Erlebnis genießen kannst. <br><br>Pro Tipp #2: Überlege, wie du andere Menschen mit in dein Erlebnis einbinden kannst. Verbindungen zu anderen Menschen geben dem ganzen einen tieferen Sinn. Selbst wenn du vorhast, alleine durch Indien zu backpacken, nimm Kullis und Blöcke für Straßenkinder mit und mach ihnen so eine riesen Freude - die auch zu deiner Freude wird.</p>"
},
{
  name: "Useful: Notgroschen",
  text: "<p style='display: contents'>Du scheinst dich momentan in einer Lebensphase zu befinden, in der noch sehr viel unsicher ist. Das ist einerseits befreiend, da du schauen kannst, was du wirklich machen willst oder wo es dich hinzieht. Andererseits hast du immer eine Ungewissheit, die im Hinterkopf herum schwebt. In dieser Situation ist es hilfreich, ein Sicherheitsnetz zu haben, was dich auffängt, falls das Leben verrückt spielt oder irgendwas passiert, womit du nicht gerechnet hast. Außerdem fühlt es sich einfach besser an und du kannst selbstbewusster mit deinem freien Geld umgehen. Egal ob du spontan gekündigt wurdest und erstmal einen neuen Job suchen musst oder ob dir das Fahrrad geklaut wurde: Mit diesem Budget bist du safe. <br><br>Deswegen ist es deine Mission, mit mir zusammen ein Notfall-Budget anzulegen, quasi einen Notgroschen. Dafür empfehle ich dir eine Summe von 3 Monatsmieten plus deine durchschnittlichen Lebenshaltungskosten. Verknüpft mit deiner Sparregel wird sich dein Notgroschen wie von selbst füllen und da sein, wenn es nötig ist. <br><br>And now explore your way!</p>"
},
{
  name: "Serious: Altersvorsorge",
  text: "<p style='display: contents'>Daher ist es wichtig, dass du dir früh einen Plan machst und privat vorsorgst. Wenn du jetzt damit anfängst, bist du safe und kommst später nicht in eine unangenehme Situation. Es ist nicht so kompliziert, wie du denkst. <br><br>Es gibt verschiedene Möglichkeiten der privaten Rentenvorsorge. Dazu zählen Zusatzversicherungen, Riesterrenten und Investitionen in verschiedenen Bereichen wie Immobilien, Aktien & Fonds.<br>Klassische Versicherung ohne zusätzliche Förderung von Arbeitgeber oder Staat lohnen sich aktuell kaum. Günstig und langfristig ansparen lässt sich mit Indexfonds, sogenannten ETFs.<br><br>Also lass uns zusammen beginnen. Du kannst deinen Zielbetrag erstmal schätzen und ihn später noch anpassen. Wichtig ist nur, dass du jetzt den ersten Schritt machst und einen Starttermin festlegen, an dem du mit dem Sparen beginnst und dich mit den Möglichkeiten auseinandersetzt.</p>"
},
{
  name: "Helpful: Charity",
  text: "<p style='display: contents'>Herzlichen Glückwunsche, du scheinst deine Finanzen schon ziemlich gut unter Kontrolle zu haben. Das können die wenigsten von sich behaupten! Du bist in der wundervollen Position, alles zu haben, was du brauchst, deine Zukunft geplant zu haben und immer noch Geld über zu haben.<br><br>Leider trifft dies nicht auf alle Menschen zu. Nach wie vor gibt es Millionen von Menschen, die jeden Morgen aufwachen und keine Gewissheit haben, wie sie an Nahrung kommen oder die Medizin für ihren kranken Sohn bezahlen sollen. Aber du kannst etwas dafür tun, damit es Menschen besser geht. Du kannst mit dem Geld, was du sowieso nicht wirklich brauchst, Leben retten.<br><br>Wusstest du, dass eine globale Studie herausgefunden hat, dass Spenden (oder Dinge für andere kaufen), einen ähnlichen Effekt auf deine Happiness hat wie eine Verdopplung deines Einkommens? Ist das nicht das ultimative Win/Win?<br><br>Inzwischen gibt es Organisationen, die wissenschaftlich prüfen, wie effektiv Hilfsorganisationen oder Forschungsorganisationen arbeiten. Auf GiveWell.org kannst du dich über die besten Organisationen informieren. Du kannst dort ebenfalls rausfinden, wie viel Euro ca. benötig werden, um effektiv ein Leben zu retten. Wenn du zum Beispiel für die Against Malaria Foundation spendest, sind es ca. 2012€.<br><br>Du kannst natürlich erstmal klein anfangen, jeder Euro hilft bereits. Du tust der Welt und gleichzeitig dir etwas Gutes damit. </p>"
}];

//nearly there
var tools = [
{
  name: "Sporty",
  tool: "Aktivität vollendet oder ein Ziel erreicht",
  text: "<p style='display: contents'>Was gibt es besseres, als von Endorphinen durchflutet, völlig ausgepowert, unter die Dusche zu springen? Sich direkt danach nicht nur mit energiegebendem Essen zu belohnen, sondern auch deinem finanziellen Ziel ein Stückchen näher gekommen zu sein! Jedes Mal, wenn du eine Aktivität vollendet oder ein persönliches Ziel erreicht hast, darfst du dir deinen angegebenen Betrag auf dein mentales Zielkonto überweisen (oder in dein Sportschwein stecken).</p>",
  frage: "Ich möchte mehr Sport machen."
},

{
  name: "Foodie",
  tool: "Jedes gesunde Essen oder gesunden Einkauf",
  text: "<p style='display: contents'>In deinem Fall würde ich dir vorschlagen, dich jedes Mal zu belohnen, wenn du ein gesundes Gericht zubereitet hast ODER jedes Mal, wenn dein Einkauf aus gesunden Lebensmittel bestand. Für dich wäre Finge Shopping der perfect Fit. Wenn du mehr erfahren willst, schau dir doch das Produktvideo an!</p>",
  frage: "Ich möchte mich gesünder ernähren."
},
{
  name: "Sleepy",
  tool: "Schlafrhythmus eingehalten",
  text: "<p style='display: contents'>Wenn du einen gesunden Schlafrhythmus etablieren willst, kannst du dich jedes Mal belohnen und Sparen, wenn du rechtzeitig ins Bett gegangen bist und am nächsten Morgen aufgestanden bist. Finge würde sich mit deinem Wecker verbinden und das automatisch machen, aber noch musst du es selber machen.</p>",
  frage: "Ich möchte einen gesunden Schlafrhythmus etablieren."
},
{
  name: "Produktiv",
  tool: "Task abgehakt",
  text: "<p style='display: contents'>Belohne dich jedes Mal, wenn du eine Task erfolgreich in Done schieben konntest. Verknüpft mit deinem Kalender, Jira oder sonstigen Tools würde Finge das für dich automatisieren. </p>",
  frage: "Ich möchte produktiver sein."
},
{
  name: "Automatisch",
  tool: "Dauerauftrag",
  text: "<p style='display: contents'>In deinem Fall ist es simpel. Lege dir einfach einen Dauerauftrag an, der dir jede Woche oder jeden Monat deinen bestimmten Betrag zur Seite legt. Mit Finge würde das natürlich leichter und schneller gehen, aber bis dahin musst du dir so behelfen.</p>",
  frage: "Ich möchte mich so wenig wie möglich um Geld kümmern."
}];

var sparregelAllgmein = "Deine persönliche Sparregel <br>Es ist super simpel: Jedes Mal, wenn du deine Zielaktion ausführst, belohnst du dich mit deinem festgelegten Betrag, solange bis den Gesamtbetrag erreichst. Normalerweise würde das alles Finge für dich übernehmen, aber leider musst du es zunächst noch von Hand machen. Du könntest dir dafür zum Beispiel ein klassisches Sparschwein- oder Glas anlegen. In einigen Fällen kann es sich lohnen, das ganze durch einen Dauerauftrag zu automatisieren oder, wenn du technikaffin bist, alles mit IfThisThanThat und PayPal zu verbinden.";

//some globbalz
var id;
var tool_id;
var endresultid;

//YAY! CODE!
// I know, I was too lazy to put it in an extra file.

//Erste Frage laden
$(document).ready(function(){
  loadNextQuestion(0);
});

function loadNextQuestion(quest_id){
   //shizzle leeren
   id = 0;
   tool_id = 0;
   $("#finge").empty();
   $('#btns').empty();
   $('#finge').show();
   $('#btns').show();
   $('#result').hide();

   //checken, ob ein Endscreen kommen muss
   if(quest_id==101||quest_id==102 || quest_id==103||quest_id==104|| quest_id==105){
     endresultid = quest_id;
     toolfrage();
   }else{
   //ansonsten Frage updaten
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

//Frage für die Regelbestimmung laden
function toolfrage(){
  $("#finge").empty();
  $('#btns').empty();
  $('#finge').show();
  $('#btns').show();
  $('#result').hide();
  $('#finge').append("<p>Welche Aussage trifft eher auf dich zu?</p>");

  //Buttons zur Frage generieren
  for(i=0; i< tools.length; i++){
     $('#btns').append("<button id="+i+">"+tools[i].frage+"</button>");
     $('#'+i).click(function() {
      tool_id = this.id;
      console.log("currentquestionid " + endresultid + " id " + id);
      loadResults();
     });
   }
}

//Ergebnisse anzeigen
function loadResults(){
  $('#wrapper').hide();
  $('#finge').hide();
  $('#btns').hide();
  $('#result').show();
  $('#addeventatc1').hide();

  switch(endresultid){
    case 101: id=0; break;
    case 102: id=1; break;
    case 103: id=2; break;
    case 104: id=3; break;
    case 105: id=4; break;
    default: loadNextQuestion(0); break;
  }

  //Text laden
  $('#result').append("<div class='how' id='how'><h3>" + tools[tool_id].name + "</h3>"+ tools[tool_id].text + "</div>");
  $('#result').append("<div class='what' id='what'><h3>" + results[id].name + "</h3>" + results[id].text + "</div>");

  //input fields laden
  $("#i_goal").val(results[id].name);
  $("#i_tool").val(tools[tool_id].tool);
}

//Checken, ob Input Felder ausgefüllt sind und Values an den Kalender-Button weitergeben
$(document).on('change','input', function(){
  if($("#i_beschreibung").val() != "" && $("#i_sum").val() != null && $("#i_sum_t").val() != null && $("#datepicker").val() != ""){
    var date = $("#datepicker").val() + " 20:00"
    var title = results[id].name;
    var description = "Zielbetrag: "+ $("#i_sum_t").val() +"<br> Sparregel: " + $("#i_tool").val() + "<br>Jedes Mal, wenn du diese Regel triggerst, füge deinem Ziel " + $("#i_sum").val() + " Euro hinzu. <br> Beschreibung: <br>"+ $('#i_beschreibung').val();
    $("#adddate").html(date);
    $("#addtitle").html(title);
    $("#adddis").html(description);
    $('#addeventatc1').show();
  }
});


$(function() {
  $("#datepicker" ).datepicker();
  });


$( "#btn_demo" ).click(function() {
    //TODO DEMO FUNCTION?
    //lel
});


//Eingaben auf Canvas packen und als PNG downloaden
function createCanvas(){
  var canvas = document.createElement('canvas');
  canvas.setAttribute("id", "canvaaas");
  h = $(window).height();
  w = $(window).width();
  canvas.height= h;
  canvas.width= w;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";
  ctx.fillRect(0,0,w,h);
  ctx.fillStyle = "#fff";
  ctx.font = "22px Raleway";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  var zielname = $('#i_goal').val();
  var beschreibung = $('#i_beschreibung').val();
  var zielbetrag = $('#i_sum_t').val();
  var sparregel = $('#i_tool').val();
  var betrag = $('#i_sum').val();
  var datum = $('#datepicker').val();

  ctx.fillText(zielname, canvas.width/2, canvas.height/7*1);
  ctx.fillText(beschreibung, canvas.width/2, canvas.height/7*2);
  ctx.fillText(zielbetrag, canvas.width/2, canvas.height/7*3);
  ctx.fillText(sparregel, canvas.width/2, canvas.height/7*4);
  ctx.fillText(betrag, canvas.width/2, canvas.height/7*5);
  ctx.fillText(datum, canvas.width/2, canvas.height/7*6);

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(canvas);
}

function downloadCanvas(el) {
    createCanvas();
    var canvas2 = document.getElementById("canvaaas");
    downloadf(canvas2, 'MeineMission.png');
}

function downloadf(canvas, filename) {
  /// a tag
  var lnk = document.createElement('a'), e;
  lnk.download = filename;
  lnk.href = canvas.toDataURL("image/png;base64");

  ///fake click-event
  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window,
                     0, 0, 0, 0, 0, false, false, false,
                     false, 0, null);

    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}
