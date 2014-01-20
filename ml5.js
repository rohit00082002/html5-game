var R = R || {};
function R(id) {
 this.init = function(id) {
	this.speed = 10;
	this.direction = 'right';
	this.x = 10;
	this.y = 10;
	this.width = 10;
	this.height = 10;
	this.clearCall = 0;
	this.rects = [];//Copied from web
	this.ctx = document.getElementById(id);
	this.context = this.ctx.getContext('2d');
 }
};
R.prototype.clearResetCanvas = function() {
	
};
R.prototype.clearRect = function() {
	
	this.rects.push([this.x,this.y]);//copied from web
	if( this.clearCall > 1) 
	{
		var shft = this.rects.shift();
		//console.log(this.rects);
		this.context.clearRect(shft[0],shft[1],this.width, this.height );
		//this.context.clearRect(shft[0] -8 ,shft[1] -2 ,this.width - 2, this.height +2 );
		this.clearCall = 0;
	}
	this.clearCall++;
	
	//this.context.clearRect(this.x,this.y,this.width, this.height );
};
R.prototype.moveRectLeft = function() {

	this.clearRect();
	this.x = this.x - this.speed ;
	//this.height = 10;//this.height +10 ;
	//this.width = 100;
	this.context.fillRect(this.x,this.y,this.width,this.height);
};
R.prototype.moveRectUp = function() {
	this.clearRect();
	this.y = this.y - this.speed ;
	//this.height = 100;//this.height +10 ;
	//this.width = 10;
	this.context.fillRect(this.x,this.y,this.width,this.height);
};
R.prototype.moveRectRight = function() {
	this.clearRect();
	this.x = this.x + this.speed ;
	console.log(this.x+".."+this.y);
	//this.height = 10;//this.height +10 ;
	//this.width = 100;
	this.context.fillRect(this.x,this.y,this.width,this.height);
};
R.prototype.moveRectDown = function() {
	this.clearRect();
	this.y = this.y + this.speed ;
	//this.x = this.x + this.width ;
	//if(this.height >100) this.height = 100;
	//this.width = 10;
	this.context.fillRect(this.x,this.y,this.width,this.height);
	//this.height += 10;
};
R.prototype.drawRect = function() {
	this.context.beginPath();
	this.context.fillStyle = "#3c0";

	this.context.fillRect(this.x,this.y,this.width,this.height);
};
R.prototype.keepmoving = function() {
	if( r.direction === 'left' )
	{
		r.moveRectLeft();
	}
	if( r.direction === 'up' )
	{
		r.moveRectUp();
	}
	if( r.direction === 'right' )

	{
		r.moveRectRight();
	}
	if( r.direction === 'down' )
	{
		r.moveRectDown();
	}
	//this.context.fillRect(this.x,this.y,this.width,this.height);
};
//var keyEvt = document.createEvent('KeyboardEvent');
var r = new R();
r.init("canv");
r.drawRect(r.x,r.y,r.width,r.height);
var interval ;
document.onkeydown = function(event) {

	var evt = event;
	//console.log(evt.keyCode);
	if( interval ) clearInterval(interval);
	if( evt.keyCode === 37 ) // Left arrow Key
	{
		r.direction = 'left';
		r.moveRectLeft();
	}
	else if( evt.keyCode === 38 ) // Up arrow Key
	{
		r.direction = 'up';
		r.moveRectUp();
	}
	else if( evt.keyCode === 39 ) // Right arrow Key
	{
		r.direction = 'right';
		r.moveRectRight();
	}
	else if( evt.keyCode === 40 ) // Down arrow Key
	{
		r.direction = 'down';
		r.moveRectDown();
	}
	//interval = setInterval('r.keepmoving()',500);
};
//interval = setInterval('r.keepmoving()',500);

