class Question {

    constructor() {
        this.title = createElement('h1')
        this.input1 = createInput("Enter Your Name Here....");
        this.input2 = createInput("Enter Correct Option No..");
        this.button = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    
    }
    hide(){
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      this.title.hide();
    }
    display(){
        this.title.html(" MY QUIZ GAME");
        this.title.position(350,0);
        
        this.question.html("WHICH IS THE LARGEST CELL IN WORLD");
        this.question.position(150,80);

        this.option1.html("plant cell");
        this.option1.position(150,100);

        this.option2.html("ostrich egg");
        this.option2.position(150,140);

        this.option3.html("ostrich egg");
        this.option3.position(150,120);

        this.option4.html("ostrich egg");
        this.option4.position(150,160);

        this.input1.position(150,230);
        this.input2.position(150,270);

        this.button.position(290,300);

        this.button.mousePressed(()=>{
          this.title.hide();
          this.input1.hide();
          this.button.hide();

          contestant.name = this.input1.value();
          contestantCount+=1;
          contestant.index =  contestantCount;
          contestant.update();
          contestant.updateCount( contestantCount);
          this.greeting.html("Hello " + contestant.name)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
          
        });
       this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
    
      }
}