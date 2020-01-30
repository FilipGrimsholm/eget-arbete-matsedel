module.exports = function(data, title)
{
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel = "stylesheet" href = "/style.css">
            <title>Food app</title>
        </head>
        <body>
            <header>
                <ul id = "fliklista">
                    <li class = "flik"><a class = "fliklänk" href = "/">Go to main page</a></li>
                    <li class = "flik"><a class = "fliklänk" href = "/food">See your food</a></li>
                    <li class = "flik"><a class = "fliklänk" href = "/food/makefood">Create new food</a></li>
                    <li class = "flik"><a class = "fliklänk">Food paper</a></li>
                    <li class = "flik"><a class = "fliklänk">About</a></li>
                    <li class = "flik" id = "extralink"><a class = "fliklänk"></a></li>
                </ul>                                       
            </header>
            <main>
                <div id = "title">
                    ${title}
                </div>
                <div id = "data">
                    ${data}
                </div>
            </main>
            <script src = "client.js"></script>
        </body>
    </html>
    `
}