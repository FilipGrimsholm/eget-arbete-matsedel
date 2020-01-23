module.exports = function(data)
{
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel = "stylesheet" href = "style.css">
            <title>Food app</title>
        </head>
        <body>
            <header>
                <h1 id = "title"></h1>
                <ul id = "fliklista">
                    <li class = "flik"><a class = "fliklänk" href = "/food">See your food</a></li>
                    <li class = "flik"><a class = "fliklänk" href = "/food/makefood">Create new food</a></li>
                    <li class = "flik"><a class = "fliklänk">Food paper</a></li>
                    <li class = "flik"><a class = "fliklänk">About</a></li>
                    <li class = "flik" id = "extralink"><a class = "fliklänk"></a></li>
                </ul>                                       
            </header>
            <main>
                ${data}
            </main>
        <script src = "client.js"></script>
        </body>
    </html>
    `
}