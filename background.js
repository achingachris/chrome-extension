alert('hi')

const MyGenericClick = (info, tab) => {
  console.log('Clicked on Page:', info, tab)
}

const MyImageClick = (info, tab) => {
  console.log("Clicked an Image:", info, tab)
}

chrome.contextMenus.create({
  "title": 'Share',
  "contexts": ['page'],
  "onclick": MyGenericClick,
})

chrome.contextMenus.create({
    "title": 'Share Image',
    "contexts": ['page'],
    "onclick": MyImageClick,
  })
  