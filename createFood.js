module.exports = function()
{
    return `
    <form acton = "/food/makefood" method = "post" enctype = "multipart/form-data">
        <input type = "text" name = "name" placeholder= "name">
        <br>
        <input type = "text" name = "foodtype" placeholder = "foodtype">
        <br>
        <input type = "text" name = "price" placeholder = "price">
        <br>
        <input type = "file" name = "img">
        <br>
        <input type = "submit" value = "Registrera">
    </form>
    `
}