const express = require("express")
const mongo = require("mongodb").MongoClient;
require("dotenv").config();
const conString = "mongodb+srv://Filip_G:oMuVJNtxi001gJ9X@cluster0-unzz6.mongodb.net/test?retryWrites=true&w=majority";
let app;
makeConnection();

async function makeConnection(){
    
    //Skapar en connectionstring för att kunna connecta till mongoDb databasen
    const con = await mongo.connect(conString,{ useNewUrlParser: true, useUnifiedTopology: true });
    
    //Skapar en databas som heter db
    const db = await con.db("food-ab");

    //Lägger till ett document i collectionen col som heter food
    const col = await db.collection("food");
    
    // nu vet vi att vi har en uppkoppling till vår DB så att vi kan starta vår applikation
    app = express();
    
    // middleware för att kunna parsa req.body 
    app.use(express.urlencoded({extended:false}));
    app.use(express.static(__dirname + "/public"));
    app.listen(3500, function(){console.log("port: 3500")});

    // lägg kopplingen till vår kollektion till vårt app-objekt så att vi kan använda det om och om igen
    app.food = col;

    // ladda in vår egen route-modul och skicka in app som argument.
    require("./router")(app);
}

/*
Steg 1: Fixa en uppkoppling (klart)
Steg 2: Visa matobjekt på webben (klart)
Steg 3: Kunna Skapa ett matobjekt (klart)
Steg 4: Kunna ändra matojekten (klart)
Steg 5: Kunna ta bort ett matobjekt (klart)
Steg 6: Kunna infoga en bild på maträtten
Steg 7: Inloggning och utloggning?
*/