const e = sel => document.querySelector(sel)

const es = sel => document.querySelectorAll(sel)

const appendHtml = (element, temp, position="beforeend") {
    element.insertAdjacentHTML(position, temp)
}
