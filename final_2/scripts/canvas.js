/* Constants for bricks */
var NUM_ROWS = 8;
var BRICK_TOP_OFFSET = 10;
var BRICK_SPACING = 2;
var NUM_BRICKS_PER_ROW = 10;
var BRICK_HEIGHT = 10;
var SPACE_FOR_BRICKS = getWidth() - (NUM_BRICKS_PER_ROW + 1) * BRICK_SPACING;
var BRICK_WIDTH = SPACE_FOR_BRICKS / NUM_BRICKS_PER_ROW;
var rows=1;
var color;

/* Constants for ball and paddle */
var PADDLE_WIDTH = 80;
var PADDLE_HEIGHT = 15;
var PADDLE_OFFSET = 10;

var BALL_RADIUS = 15;
var ball;
var dx = 3;
var dy = 10;
var hoverSpot= getHeight()-PADDLE_OFFSET*2;

var paddle;

var losses= 1;
var numBricks= NUM_BRICKS_PER_ROW*NUM_ROWS;





function start(){
    setUp();
    mouseMoveMethod(movePaddle);
}

function setUp(){
    for(var i = 0; i < NUM_ROWS; i++){
        setRow(setColor(), i*BRICK_HEIGHT + i*BRICK_SPACING +BRICK_TOP_OFFSET);
        rows++;
    }
    paddle= new Rectangle(PADDLE_WIDTH,PADDLE_HEIGHT);
    paddle.setPosition(getWidth()/2 - 2, hoverSpot);
    add(paddle);

    ball = new Circle(BALL_RADIUS);
	ball.setPosition(getWidth()/2, getHeight()/2);
	add(ball);

	setTimer(draw, 30);

}

function setRow(color, yPos){
    for(var i = 0; i < NUM_BRICKS_PER_ROW; i++){
        var brick = new Rectangle (BRICK_WIDTH,BRICK_HEIGHT);
        brick.setPosition( BRICK_SPACING + i * BRICK_WIDTH + i * BRICK_SPACING, yPos);
        brick.setColor(color);
        add(brick);

    }

}

function setColor(){
    if(rows==1||rows==2){
        color=Color.red;
    }
    if(rows==3||rows==4){
        color=Color.orange;
    }
    if(rows==5||rows==6){
        color=Color.green;
    }
    if(rows==7||rows==8){
        color=Color.blue;
    }
    return color;
}

function draw(){
    if(numBricks==0){
        win();
    }
	checkWalls();
	ball.move(dx, dy);
	var hitBrick=check();
	if(hitBrick!= null && hitBrick !=paddle){
	    remove(hitBrick);
	    numBricks--;
	    dy=-dy;
	}
	if(hitBrick==paddle){
	    dy=-dy;
	}
}

function checkWalls(){
	// Bounce off right wall
	if(ball.getX() + ball.getRadius() > getWidth()){
		dx = -dx;
	}

	// Bounce off left wall
	if(ball.getX() - ball.getRadius() < 0){
		dx = -dx;
	}

	// Bounce off bottom wall
	if(ball.getY() + ball.getRadius() > getHeight()){
	    stopTimer(draw);
	    reset();
		losses ++;
	}

	// Bounce off top wall
	if(ball.getY() - ball.getRadius() < 0){
		dy = -dy;
	}

}

function movePaddle(e){
    paddle.setPosition(e.getX()-paddle.getWidth()/2,hoverSpot);
}

function check(){
    var top= getElementAt(ball.getX(),ball.getY()-BALL_RADIUS-1);
    if(top !=null && top!=ball){
        return top;
    }
    var rSide= getElementAt(ball.getX()+BALL_RADIUS,ball.getY());
    if (rSide != null && rSide !=ball){
        return rSide;
    }
    var bottom= getElementAt(ball.getX(),ball.getY()+BALL_RADIUS);
    if(bottom != null && bottom != ball){
        return bottom;
    }
    var lSide= getElementAt(ball.getX()-BALL_RADIUS,ball.getY());
    if(lSide != null && lSide != ball){
        return lSide;
    }
}

function reset(){
    if(losses==3){
        remove(ball);
        var text= new Text("You Loose!", "30pt Arial");
        text.setPosition(getWidth()/2-text.getWidth()/2, getHeight()/2-text.getHeight()/2);
        text.setColor(Color.red);
        add(text);
    }
    ball.setPosition(getWidth()/2,getHeight()/2);
    mouseClickMethod(resetTimer)
}

function resetTimer(e){
    setTimer(draw,30);
}

function win(){
    stopTimer(draw);
    remove(ball);
    var text= new Text("You Win!", "30pt Arial");
    text.setPosition(getWidth()/2-text.getWidth()/2, getHeight()/2-text.getHeight()/2);
    text.setColor(Color.BLUE);
    add(text);
}
