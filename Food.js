class PetFood{
    constructor(){
        this.bottle = loadImage("images/Milk.png");
    }

    getCount(){
        database.ref('Food').on("value",function(data){
            foodStock=data.val();
        })
    }

    updateCount(leftFood){
        database.ref('/').update({
            Food:leftFood
        })
    }

    display(){
        for(var i=0;i<foodStock/2;i++){
            for(var j=0;j<2;j++){
                image(this.bottle,45+40*i,100+70*j,60,70);
            }
        }
    }
    

    feedHim(){
        FeedButton.mousePressed(()=>{
            dog.addImage(dog2i)
            if(foodStock>0)
              foodStock=foodStock-1;
            else
              foodStock=0
            p.updateCount(foodStock);
          })
    }

    addFood(){
        AddFeedButton.mousePressed(()=>{
            dog.addImage(dog1i);
            if(foodStock<20)
              foodStock=foodStock+1;
            else
              foodStock=20    
            p.updateCount(foodStock);
          })
    }
}