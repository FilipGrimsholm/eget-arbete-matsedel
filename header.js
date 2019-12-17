module.exports = function()
{
    return `
        <header>
            <h1 id = "title"></h1>
            <ul id = "fliklista">
                <li class = "flik"><a class = "fliklänk" href = "/food">See your food</a></li>
                <li class = "flik"><a class = "fliklänk" href = "/food/makefood">Create new food</a></li>
                <li class = "flik"><a class = "fliklänk">Food paper</a></li>
                <li class = "flik"><a class = "fliklänk">About></a></li>
            </ul>
        </header>
    `
}