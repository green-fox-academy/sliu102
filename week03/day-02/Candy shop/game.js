var cre_canday = document.querySelector('.create-candies');
var buy_lolly = document.querySelector('.buy-lollypops');
var candy_machine = document.querySelector('.candy-machine');
var candies = document.querySelector('.candies');
var lollies = document.querySelector('.lollypops');
var speed = document.querySelector('.speed');

	
cre_canday.addEventListener('click', create);
buy_lolly.addEventListener('click', buy);
candy_machine.addEventListener('click', machine);

var candiesAmount = candies.innerText;
var lollAmount = lollies.innerText.length;
var cur_speed = 10000/lollAmount;
speed.innerText = 1/(cur_speed)*1000;


var run = setInterval(function(cur_speed){
  create();
}, cur_speed);


function create () {
  candies.innerText = ++candiesAmount;
}

function buy() {
  lollies.innerText += '🍭';
  cur_speed = 10000/lollies.innerText.length;
  speed.innerText = 1/(cur_speed)*1000;
  clearInterval(run);
  var run = setInterval(function(cur_speed){
    create();
  }, cur_speed);
}

function machine() {
  cur_speed = cur_speed / 10;
  speed.innerText = 1/(cur_speed)*1000;
  clearInterval(run);
  var run = setInterval(function(cur_speed){
    create();
  }, cur_speed);

}
