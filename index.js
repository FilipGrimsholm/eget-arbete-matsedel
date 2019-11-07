const express = require("express")
const mongo = require("mongodb").MongoClient;
const conString = "mongodb+srv://Filip_G:oMuVJNtxi001gJ9X@cluster0-unzz6.mongodb.net/test?retryWrites=true&w=majority";
let app;
makeConnection();

async function makeConnection(){
    
    const con = await mongo.connect(conString,{ useNewUrlParser: true, useUnifiedTopology: true });
    const db = await con.db("food-ab");
    const col = await db.collection("food");
    
    // nu vet vi att vi har en uppkoppling till vår DB så att vi kan starta vår applikation
    app = express();
    
    // middleware för att kunna parsa req.body 
    app.use(express.urlencoded({extended:false}));
    app.listen(3500, function(){console.log("port: 3500")});

    // lägg kopplingen till vår kollektion till vårt app-objekt så att vi kan använda det om och om igen
    app.food = col;

    // ladda in vår egen route-modul och skicka in app som argument.
    require("./router")(app);
}

/*
Steg 1: Fixa en uppkoppling (klart)
Steg 2: Visa matobjekt på webben
Steg 3: Kunna Skapa ett matobjekt 
Steg 4: Kunna ändra matojekten 
Steg 5: Kunna ta bort ett matobjekt
Steg 6: Kunna infoga en bild på maträtten
*/