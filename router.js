const createfood = require("./createFood");

module.exports = function(app)
{
    //Starting page for the website
    app.get("/food", async function(req, res)
    {
        try
        {
            //Places the food collection into an variable called food
            let food = await app.food.find().toArray();

            //Using .map to place the data in the collection in an appropiate format, and then sending it to the variable html
            let html = food.map(function(dish)
            {
                return `
                    <h1>${dish.name}</h1>
                    <p>${dish.foodtype}</p>
                    <p>${dish.price}</p>
                `
              
                
            });

            //Sends the data to the website
            console.log(html);
            res.send(html.join(''));
        }
        catch(error)
        {
            res.send("Could not show your food")
        }
    });

    //Denna route skickar html-formulär till klienten
    app.get("/food/makefood", function(req, res)
    {
        try
        {
            let form = createfood();
            res.send(form);
        }
        catch(error)
        {
            res.send("no form");
        }
    });
    //Here you create new food
    app.post("/food/makefood", async function(req, res)
    {
        try
        {
            await app.food.insertOne(req.body);
            res.send(req.body);
        }
        catch(error)
        {
            res.send("no data is saved");
        }
    });
}