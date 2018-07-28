const url = document.getElementById('url')
const width = document.getElementById('width')
const height = document.getElementById('height')
const background = document.getElementById('background')
const color = document.getElementById('color')
const text = document.getElementById('text')

url.addEventListener('select', generate)
width.addEventListener('input', generate)
height.addEventListener('input', generate)
background.addEventListener('input', generate)
color.addEventListener('input', generate)
text.addEventListener('input', generate)

function generate(e) {
	const id = url.value.split('/').pop()
	const src = `https://${id}/${width.value}x${height.value}/${background.value}/${color.value}/&text=${text.value}`
	document.querySelector('a').textContent = src
	document.querySelector('a').setAttribute('href', src)
	document.querySelector('img').setAttribute('src', src)
}

generate();