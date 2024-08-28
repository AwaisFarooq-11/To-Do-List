const listItems = document.querySelector(".to-do-list")
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

searchBtn.addEventListener("click", () => {
  const text = searchBox.value.trim()

  if(text !== ''){
    const item = document.createElement('li')
    const cross = document.createElement('img')
    cross.src = "cross.png"
    item.textContent = text
    listItems.appendChild(item)
    listItems.appendChild(cross)
    searchBox.value = ''
  }
})