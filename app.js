//on window load start the game
$(document).ready (function(){

   //and we're off!
  game = new Game();
  
  //lets get a few players
   p1 = game.addPlayer("John","X");
   p2 = game.addPlayer("Ruthless Mercenary","R");

   //decide who goes first
   game.turn = game.players[Math.round(Math.random()) ];

   //display some context 

   //wait for first move

});



  Game = function() {
    this.board = this.loadBoard();
    this.turn = undefined;
    this.players = [];
    this.moves = [];


  }

  Game.prototype.nextMove = function(e) {
    
    console.log(this.turn.name + " just clicked on " + e.target.id);
    //check whose turn it is
    this.turn.name;

    //check whether requested move is open
    //record move in this.board

    //toggle this.turn between index 0 and 1 of players array
    this.turn = this.players[this.players[0] === this.turn ? 1 : 0];
  };

  Game.prototype.loadBoard = function() {
      return new Board();
  };

  Game.prototype.addPlayer = function(name,symbol) {
     player = new Player(name,symbol);
     this.players.push(player);
    return player;
  }

  Player = function(name,piece) {
      this.name = name;
      this.piece = piece;
    //Is the player X or O?
    //this.team = ...
  };

  Board = function() {
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
        game.nextMove(e);
        //console.log("Click on #" +e.target.id);
      });

}

//removes the board from dom document
Board.prototype.destroy = function() {
     var $board = $('#board');
     console.log($board);
     $board.remove();
}
