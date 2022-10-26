// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person'); 

const quotes = [
    {quote:"Success is most often achieved by those who don't know that failure is inevitable.", person:"Coco Chanel"},
    
    {quote:"Things work out best for those who make the best of how things work out.", person:'John Wooden'},
    
    {quote:"Courage is grace under pressure.",person:"Ernest Hemingway"},
    
    {quote:"If you are not willing to risk the usual, you will have to settle for the ordinary.",person:"Jim Rohn"},
    
    {quote:"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",person:"Albert Einstein"},

    
    {quote:"Sometimes you can't see yourself clearly until you see yourself through the eyes of others.", person:'Ellen DeGeneres'},
    
    {quote:" All our dreams can come true if we have the courage to pursue them.",person:"Walt Disney "},

    {quote:" It does not matter how slowly you go, so long as you do not stop.",person:"Confucius "},

    {quote:"Success is walking from failure to failure with no loss of enthusiasm. ",person:"Winston Churchill "},

    {quote:"Someone is sitting in the shade today because someone planted a tree a long time ago. ",person:" Warren Buffett"},

    {quote:" Don't cry because it's over, smile because it happened.",person:"Dr. Seuss "},

    {quote:" Success? I don't know what that word means. I'm happy. But success, that goes back to what in somebody's eyes success means. For me, success is inner peace. That's a good day for me.",person:" Denzel Washington"},

    {quote:" You only live once, but if you do it right, once is enough.",person:" Mae West"},

    {quote:"Opportunities don't happen. You create them. ",person:" Chris Grosser"},

    {quote:"Once you choose hope, anything's possible. ",person:" Christopher Reeve"},

    {quote:" Live as if you were to die tomorrow. Learn as if you were to live forever.",person:" Mahatma Gandhi"}
    
    
  ]

  btn.addEventListener('click',function(){

    let random= Math.floor(Math.random() *quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

  })
    