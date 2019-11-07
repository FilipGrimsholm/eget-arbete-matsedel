const createfood = require("./createFood");

module.exports = function(app)
{
    //Starting page for the website
    app.get("/food", function(req, res)
    {
        try
        {
            res.send("this is food");

        }
        catch(error)
        {
            res.send("Could not show your food")
        }
    });

    //Here you create new food
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

    app.post("/food/makefood", async function(req, res)
    {
        try
        {
            app.food.insertOne(req.body);
            res.send(req.body);
        }
        catch(error)
        {
            res.send("no data is saved");
        }
    });
}