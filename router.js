//Loading in modules and such things
const createfood = require("./createFood");
const editfood = require("./editfood");
const render = require("./html");
const objectId = require("mongodb").ObjectID;

module.exports = function(app)
{
    app.get("/", async function(req, res)
    {
        try
        {
            let title = "<h1>Welcome to my webpage! We are glad to see you here!</h1>"
            let text = "test"
            res.send(render(text, title));
        }
        catch(error)
        {
            res.send("Something went wrong, try again");
        }
    });
    //Starting page for the website
    app.get("/food", async function(req, res)
    {
        try
        {
            //Places the food collection into an variable called food
            let food = await app.food.find().toArray();

            //Using .map to place the data in the collection in an appropiate format, and then sending it to the variable html
            let foodlist = food.map(function(dish)
            {
                return `
                    <div class = "dish">
                        <h1>${dish.name}</h1>
                        <p>${dish.foodtype}</p>
                        <p>${dish.price} kr</p>
                        <a onclick = "return checkRemove()" href = "/food/delete/${dish._id}"><button>Delete</button></a>
                        <a onclick = "return checkEdit()" href = "/food/edit/${dish._id}"><button>Edit</button></a>
                    </div>
                `
            });

            //Sends the data to the website
            res.send(render(foodlist.join(''), "<h1>Here are your food!</h1>"));
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
            res.send(render(form, "<h1>Make your food!</h1>"));
        }
        catch(error)
        {
            res.send("no form");
        }
    });
    //Here you create new food and then send it to the database
    app.post("/food/makefood", async function(req, res)
    {
        try
        {
            await app.food.insertOne(req.body);
            res.redirect("/food");
        }
        catch(error)
        {
            res.send("no data is saved");
        }
    });
    //route for deleting indivdual food objects
    app.get("/food/delete/:id", async function(req, res)
    {
        try 
        {
            let id = req.params.id;
            await app.food.deleteOne({_id:objectId(id)});
            res.redirect("/food");
        } 
        catch (error) 
        {
            res.send(error.message);
        }
    });
    //route for editing individual food objects
    app.get("/food/edit/:id", async function(req, res)
    {
        try                             
        {
            let id = req.params.id;
            let food = await app.food.findOne({_id:objectId(id)})
            let form = editfood(food.name, food.foodtype, food.price, id);
            res.send(render(form));
        }
        catch(error)
        {
            res.send(error.message);
        }
    });
    app.post("/food/edit/:id", async function(req, res)
    {
        try
        {
            let id = req.params.id;
            let newvalues ={$set:req.body};
            await app.food.updateOne({_id:objectId(id)}, newvalues);

            res.redirect("/food");
        }
        catch(error)
        {
            res.send(error.message);
        }
    });
}