module.exports = function(name, foodtype, price, id)
{
    return `
    <form acton = "/food/edit/${id}" method = "post">
        <input type = "text" name = "name" value= "${name}">
        <br>
        <input type = "text" name = "foodtype" value = "${foodtype}">
        <br>
        <input type = "text" name = "price" value = "${price}">
        <br>
        <input type = "submit" value = "Registrera">
    </form>
    `
}