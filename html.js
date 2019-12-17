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
            ${data}
            <script>
                function checkRemove()
                {
                    if(confirm("Vill du verkligen ta bort denna maträtten?"))
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            </script>
        </body>
    </html>
    `
}