//on window load start the game
$(document).ready (function(){

   //and we're off!
  game = new Game();
  
  //lets get a few players
   p1 = game.addPlayer("John","X");
   p2 = game.addPlayer("Ruthless Mercenary","R");

   //decide who goes first
   game.firstTurn = game.players[Math.round(Math.random()) ];

   
});



  function Game() {
    this.board = this.loadBoard();
    
    this.players = [];
    this.moves = [];


  }

  // Remember: prototypes are shared functions between all game instances
  Game.prototype.nextMove = function() {
    //check to see if firstmove is set
    //pick a player and start with them
    //check whether requested move is open
    //record move in this.board
    //alternate based on movement record
  };

  // Game.prototype.init kicks off a new game with a board and two players
  Game.prototype.loadBoard = function() {
      return new Board();
  };

  Game.prototype.addPlayer = function(name,symbol) {
     player = new Player(name,symbol);
     this.players.push(player);
    return player;
  }

  Game.prototype.move = function(){
    console.log("Game.move fired!");
  }

  // A starter Player constructor.
  function Player(name,piece) {
      this.name = name;
      this.piece = piece;
    //Is the player X or O?
    //this.team = ...
  };

  // A starter Board constructor.
  function Board() {
      this.init();

  };

//builds the board with jquery and inserts
//it into body tag of document
Board.prototype.init = function() {
      var $board = $('<div id="board">');

      for (i=0;i<9;i++){
            $board.append('<div id="square'+i+'"" class="square">');
      }
       

      $('body').append($board);

        // oneClick();
      this.$squares = $('.square');
      this.$squares.click(function(e){
        game.move();
        //console.log("Click on #" +e.target.id);
      });

}

//removes the board from dom document
Board.prototype.destroy = function() {
     var $board = $('#board');
     console.log($board);
     $board.remove();
}
