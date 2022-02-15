const hamburger = document.querySelector('.hamburger')
const screen = document.querySelector('.screen')
const mainNav = document.querySelector('.main-nav')
const mainNavHeader = document.querySelector('.main-nav-header')
const links = document.querySelectorAll('.side-nav-lists li')
const nav2 = document.querySelector('.second-nav')
const menus = document.querySelectorAll('.back-to-menu')
const settingsNav = document.querySelector('.settings-nav')
const secondNavList = document.querySelector('.second-nav-list')


hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('clicked')
    hamburger.classList.toggle('moved')
    screen.classList.toggle('greyed-out')
    if (nav2.classList.contains('clicked')) {
        nav2.classList.toggle('clicked')
    } else if (settingsNav.classList.contains('clicked')) {
        settingsNav.classList.toggle('clicked')
    }
})
mainNavHeader.addEventListener('click', () => {
    settingsNav.classList.toggle('clicked')
})
links.forEach(link => {
    link.addEventListener('click', (e) => {
        nav2.classList.toggle('clicked')
        let category = (e.target.id || e.target.closest('li').id)
        for (let cat in sideNavCategoryObj) {
            if (cat === category) {
                sideNavCategoryObj[cat].forEach(item => {
                    let li = document.createElement('li')
                    li.innerHTML = item
                    nav2.querySelector('ul').appendChild(li)
                })
            }
        }
    })
})
menus.forEach(menu => {
    menu.addEventListener('click', () => {
        if (nav2.classList.contains('clicked')) {
            nav2.classList.toggle('clicked')
            nav2.querySelector('ul').innerHTML =''
        } else if (settingsNav.classList.contains('clicked')) {
            settingsNav.classList.toggle('clicked')
        }
    })
})

/* function to fill categories dropdown in main nav */
const mainNavCategories = document.querySelector('.category-list')

for (i = 0; i < mainNavCategoryObjArr.length; i++) {
    let li = document.createElement('li')
    let span = document.createElement('span')
    let name = mainNavCategoryObjArr[i].name
    span.innerHTML = name
    let icon = document.createElement('i')
    icon.classList.add('fas')
    icon.classList.add('fa-angle-right')
    li.appendChild(span)
    li.appendChild(icon)
    li.id = name
    mainNavCategories.appendChild(li)
}

const categorySideDrawer = document.querySelector('.category-side-drawer')
const categoryLinks = document.querySelectorAll('.category-list li')
categoryLinks.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        categorySideDrawer.querySelector('ul').innerHTML = ''
        let category = (e.target.id || e.target.closest('li').id)
        for (let cat of mainNavCategoryObjArr) {
            if (cat.name === category) {
                cat.topics.forEach(item => {
                    let li = document.createElement('li')
                    let span = document.createElement('span')
                    let icon = document.createElement('i')
                    span.innerHTML = item.name
                    icon.classList.add('fas')
                    icon.classList.add('fa-angle-right')
                    li.appendChild(span)
                    li.appendChild(icon)
                    li.id = item.name
                    categorySideDrawer.querySelector('ul').appendChild(li)
                })
            }
        }
        if (categorySideDrawer.classList.contains('open')) {
            return
        } else {
            categorySideDrawer.classList.add('open')
        }
        
    })
})


/* function to fill my learning dropdown in main nav */
const learningList = document.querySelector('.my-learning-list')

for (i = 0; i < learningData.length; i++){
    let image = document.createElement('img')
    image.src = learningData[i].img
    let title = document.createElement('h4')
    title.innerHTML = learningData[i].course
    let card = document.createElement('div')
    card.appendChild(image)
    card.appendChild(title)
    card.classList.add('learning-card')
    learningList.appendChild(card)
}
let learningLink = document.createElement('a')
learningLink.innerHTML = 'Go to My Learning'
learningLink.classList.add('drop-link')
learningLink.classList.add('learning-list-link')
learningList.appendChild(learningLink)
