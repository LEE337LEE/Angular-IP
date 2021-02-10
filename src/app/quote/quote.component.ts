import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes = [

    new Quote(1," Every villian is a hero in his own mind.", "Tom Hiddleston", "Lee Githinji", 0,0,new Date(2020,9,22)), 
    new Quote(2,"Life is full of surprises, some good, some not so good.", "Pablo Escobar", "Unknown",0,0,new Date(2020,3,30)),
    new Quote(3,"Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we've been waiting for. We are the change that we seek.", "Barack Obama", "Anonymous",0,0,new Date(2021,1,22)),
    new Quote(4, "You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and for those around you.", "Lupita Nyong'o", "Lee Githinji",0,0,new Date(2020,12,12)),
    new Quote(5,"A good head and good heart are always a formidable combination. But when you add to that a literate tongue or pen, then you have something very special.", "Nelson Mandela", "Lee Githinji",0,0,new Date(2017,6,30))
   
    ]

  quoteSubmission(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }


  toogleDetails(index){
    this.quotes[index].showDesc = !this.quotes[index].showDesc;
  }

  deleteQuote(quoteDelete,index){
    if(quoteDelete){
      let deletion = confirm(`You really wanna delete that quote?`)
      if(deletion){
        this.quotes.splice(index,1);
      }
      
    }
  }
  upVote(upVoting,index){
    if(upVoting){
      this.quotes[index].upvotes +=1;
    }
  }
  downVote(downVoting,index){
    if(downVoting){
      this.quotes[index].downVote +=1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
