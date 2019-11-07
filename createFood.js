module.exports = function()
{
    return `
    <form acton = "/food/makefood" method = "post">
        <input type = "text" name = "name" placeholder= "name">
        <br>
        <input type = "text" name = "foodtype" placeholder = "foodtype">
        <br>
        <input type = "text" name = "price" placeholder = "price">
        <br>
        <input type = "submit" value = "Registrera">
    </form>
    `
}