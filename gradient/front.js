bg_colors = ['#DBF9F9', '#DBF9E2', '#F9F0DB', '#E4DBF9', '#F9DBE6', '#F8F9DB', '#DBE7F9', '#DBF9F0']


const list_tiles = document.querySelector('.list-container')
const list_elements = document.querySelector('.list-element')
const add_button = document.querySelector('.add-button')

is_element = false;
is_overflow = false;

const main = document.querySelector('.content')
const plus_sign_src = './add_sign.svg'

function edit_panel() {
  const black_canvas = document.createElement('div')
}

add_button.addEventListener('click', () => {
  is_element = true;
  const new_element = document.createElement('div')
  const menu_bar = document.createElement('div')
  const close_btn = document.createElement('div')
  const add_sign = document.createElement('div')
  const add_sign_svg = document.createElement('img')
  const title = document.createElement('h3')
  

  add_sign_svg.setAttribute('src', plus_sign_src)
  title.innerText = 'New Title'

  new_element.className = 'list-element'
  menu_bar.className = 'list-container-stripe'
  close_btn.className = 'close-button'
  add_sign.className = 'add-todo'
  

  let new_color = bg_colors[Math.floor(Math.random()*bg_colors.length)];


  new_element.append(menu_bar)
  new_element.append(title)
  
  add_sign.append(add_sign_svg)
  new_element.append(add_sign)
  menu_bar.append(close_btn)

  new_element.style.backgroundColor = new_color
  list_tiles.insertBefore(new_element, add_button)

  let list_tiles_array = [...list_tiles.children]
  if (list_tiles_array.length == 10) {
    console.log('OVERFLOW!');
  }
  console.log(list_tiles_array.length);

  close_btn.addEventListener('click', (e) => {
    destruct = [...list_tiles.children];
    element = e.path[2]
    element_to_remove = [...list_tiles.children].indexOf(element)
    destruct[element_to_remove].remove()
  })
})

canvas_open = false;
has_text = false;
let focused_element;

document.addEventListener('click', (e) => {

  if (!canvas_open) {
    if (e.target && e.target.className == 'add-todo') {

      if (this.todo_list) {
        console.log(this.todo_list);
      }
      

      focused_element = e.path[1]
      console.log(true)
      console.log(focused_element);
      
      editing_container = document.createElement('div')
      background_container = document.createElement('div')
      
      background_container.className = 'black-canvas-background'
      editing_container.className = 'black-canvas';
      
      background_container.append(editing_container)

      todo_list = document.createElement('ul')
      title_bar = document.createElement('h2')
      insert_input = document.createElement('input')
      new_li = document.createElement('li')
  
      insert_input.type = 'text'
      todo_list.className = 'todo-list'
      insert_input.className = 'todo-input'
      title_bar.innerText = 'Dodaj elementy:'
  
      
      editing_container.append(title_bar)
      editing_container.append(todo_list)
      new_li.append(insert_input)
      todo_list.append(new_li)
      
      
      main.append(background_container)
      canvas_open = true
    }
  }

  

  if (canvas_open) {

    if (e.target && e.target.className == 'black-canvas') {
      
      console.log(canvas_open)
      
      const ul = document.createElement('ul')
      ul.className = 'todo-ul'
      focused_element.append(ul)

      if (test[0] != '') {
        for (i=0; i < test.length; i ++) {
          new_li_todo = document.createElement('li')
          new_li_todo.innerText = test[i]
          ul.append(new_li_todo)
        }
        
        console.log(focused_element)
      }
      background_container.remove()
      canvas_open = false;
      test = []
      console.log('Closed')
      console.log(test);
    }
  }
})

let test = []

document.addEventListener('keypress', (e) => {
  if (e.target && e.target.className == 'todo-input') {

    if (e.key === 'Enter') {
      console.log('ENTER clicked');
      new_todo_li = document.createElement('li')
      todo_input = document.createElement('input')
      text_value = e.target.value
      test.push(text_value)
      todo_input.className = 'todo-input'
      new_todo_li.append(todo_input)
      todo_list.append(new_todo_li)
      prev_li = this.editing_container.lastChild.firstChild.firstChild
      ostatni_li = this.editing_container.lastChild.lastChild.lastChild

      console.log(this);
      ostatni_li.focus()
      
      console.log(test);
    }
  }
})
