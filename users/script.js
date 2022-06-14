var getVarName = function tmp() {
    let n = /getVarName\(([^)]+?)\)/.exec(tmp.caller !== null ? tmp.caller.toString() : '');

    return n !== null ? n[1] : false;
}



//-------//

if (!localStorage.getItem('user1') || !localStorage.getItem('user2') || !localStorage.getItem('user3')) {
    const user1 = {
        posts: [
            {
                comments:
                    {
                        user1: ['фу'],
                        user2: ['добре'],
                        user3: [
                        '"Ще не вмерла України і слава, і воля,\n' +
                        'Ще нам, браття молодії, усміхнеться доля.\n' +
                        'Згинуть наші воріженьки, як роса на сонці.\n' +
                        'Запануєм і ми, браття, у своїй сторонці.\n' +
                        '\n' +
                        'Душу й тіло ми положим за нашу свободу,\n' +
                        'І покажем, що ми, браття, козацького роду".']
                    },
                text: 'Усмонохунов Темирджон Озотжон-огли (узб. Усмонохунов Темуржон Озотжон ўғли; нар. 17 листопада 1996, Андижан) — узбецький борець вільного стилю, бронзовий призер'
            }
        ],
        message: {
            user2: ['user1: test'],
            user3: ['user1: test']
        }
    }
    localStorage.setItem('user1', JSON.stringify(user1));
    const user2 = {
        posts: [
            {
                comments:
                    {
                        user1: ['і шо це '],
                        user2: ['лайк'],
                        user3: ['історія - топ']
                    },
                text: 'Алітераційний вірш — акцентний вірш у старогерманській поезії. Заснований на алітерації: у кожному рядку принаймні два слова повинні починатися з одного і того ж звуку. Алітерація може зв\'язувати піввірші 4-словного вірша, в кельтській поезії — цілі вірші один з одним.\n' +
                    '\n' +
                    'Серед творів, написаних алітераційним віршем, — староанглійські «Беовульф» і «Смерть Артура», скандинавська «Старша Едда», поема новітньої доби «Падіння Артура» пера Дж. Толкіна.'
            }
        ],
        message: {
            user1: ['user1: test'],
            user3: ['user1: test']
        }
    }
    localStorage.setItem('user2', JSON.stringify(user2));
    const user3 = {
        posts: [
            {
                comments:
                    {
                        user1: ['Круто'],
                        user2: ['клас'],
                        user3: ['моя бабуся б краще зробила']
                    },
                text: 'Ландо́ (від фр. landau) — тип кузова, у якого верх від передньої до середньої стійки фіксований, а м\'яка задня частина може відкидатись.\n' +
                    '\n' +
                    'Історично «ландо» — тип карети з відкидним верхом на чотири місця, який отримав назву на честь німецького міста Ландау, у якому їх вперше виготовлено.'
            }
        ],
        message: {
            user1: ['user1: test'],
            user2: ['user1: test']
        }
    }
    localStorage.setItem('user3', JSON.stringify(user3));
}
const user1 = (eval('({obj:[' + localStorage.getItem('user1') + ']})'))
const user2 = (eval('({obj:[' + localStorage.getItem('user2') + ']})'))
const user3 = (eval('({obj:[' + localStorage.getItem('user3') + ']})'))
//--------//

document.querySelector('.closed').addEventListener('click', () => {
    document.querySelector('.message').style.display = 'none'
})

document.querySelector('.message__add').addEventListener('click', () => {
    document.querySelector('.message').style.display = 'flex'
})

const full = document.createElement('div')
full.className = 'full'
const full_author = document.createElement('h1')
const full_text = document.createElement('p')
const full_closed = document.createElement('div')
const full_closed_p = document.createElement('p')
full_closed.className = 'full_closed'
full_closed_p.innerText = 'X'
full_closed.appendChild(full_closed_p)
full.appendChild(full_closed)


const posts = document.querySelector('.posts')
posts.innerHTML = ''

const comment_list = document.createElement('div')
comment_list.className = 'comment_list'

const comment_list_block = document.createElement('div')
comment_list_block.className = 'comment_list_block'
comment_list.appendChild(comment_list_block)



if (user1.obj[0].posts.length) {
    for (let i = 0; i < user1.obj[0].posts.length; i++) {

        const post = document.createElement('div')
        post.className = 'post'

        const content = document.createElement('div')
        const comments = document.createElement('div')
        const author = document.createElement('p')
        author.className = 'author'
        author.innerText = 'user1'

        post.appendChild(author)
        content.className = 'content'
        comments.className = 'comments'

        const comments_avatar = document.createElement('div')
        comments_avatar.className = 'comments__avatar'

        const p = document.createElement('p')
        p.innerText = '+'
        comments_avatar.appendChild(p)

        const comments_p = document.createElement('p')
        comments_p.innerText = comments_p.innerText = 'Коментарі'
        comments.appendChild(comments_avatar)
        comments.appendChild(comments_p)

        const content_p = document.createElement('p')
        content_p.innerText = user1.obj[0].posts[i].text
        content.appendChild(content_p)
        post.appendChild(content)

        const modal = document.createElement('div')
        modal.className = 'modal'

        const input = document.createElement('input')
        const button = document.createElement('button')

        button.innerText = '>'
        input.placeholder = 'Введіть коментар'
        modal.appendChild(input)
        modal.appendChild(button)
        comments.appendChild(modal)
        modal.style.display = 'none'
//-----
        input.addEventListener('click', (e)=>{
            e.stopPropagation()
        })

        button.addEventListener('click', (e) => {
            if (input.value !== '') {
                if (localStorage.getItem('user') === 'user1') {
                    user1.obj[0].posts[i].comments.user1.push(input.value)
                }
                if (localStorage.getItem('user') === 'user2') {
                    user1.obj[0].posts[i].comments.user2.push(input.value)
                }
                if (localStorage.getItem('user') === 'user3') {
                    user1.obj[0].posts[i].comments.user3.push(input.value)
                }

            }
            e.stopPropagation()
            localStorage.setItem('user1', JSON.stringify(user1.obj[0]))
        })

        comments.addEventListener('click', (e)=>{
            comment_list_block.innerText = ''
            const closed = document.createElement('div')
            const closed_p = document.createElement('p')
            closed_p.innerText = 'X'
            closed.appendChild(closed_p)
            closed.className = 'comment_list_closed'
            comment_list_block.appendChild(closed)
            closed.addEventListener('click', ()=>{
                comment_list.style.display = 'none'
            })
            const comment_user1 = ()=> {
                const comment_list_autor = document.createElement('h2')
                comment_list_autor.innerText = 'user1: '
                comment_list_block.appendChild(comment_list_autor)

                const comment_list_item = document.createElement('div')
                comment_list_item.className = 'comment_list_item'

                for (let k = 0; k < user1.obj[0].posts[i].comments.user1.length; k++) {
                    const comment_list_text = document.createElement('p')

                    comment_list_text.innerText = user1.obj[0].posts[i].comments.user1[k]

                    comment_list_item.appendChild(comment_list_text)
                }

                comment_list_block.appendChild(comment_list_item)


                document.querySelector('.comment_list').style.display = 'flex'
            }
            const comment_user2 = ()=> {
                const comment_list_autor = document.createElement('h2')
                comment_list_autor.innerText = 'user2: '
                comment_list_block.appendChild(comment_list_autor)

                const comment_list_item = document.createElement('div')
                comment_list_item.className = 'comment_list_item'

                for (let k = 0; k < user1.obj[0].posts[i].comments.user2.length; k++) {
                    const comment_list_text = document.createElement('p')

                    comment_list_text.innerText = user1.obj[0].posts[i].comments.user2[k]

                    comment_list_item.appendChild(comment_list_text)
                }

                comment_list_block.appendChild(comment_list_item)


                document.querySelector('.comment_list').style.display = 'flex'
            }
            const comment_user3 = ()=> {
                const comment_list_autor = document.createElement('h2')
                comment_list_autor.innerText = 'user3: '
                comment_list_block.appendChild(comment_list_autor)

                const comment_list_item = document.createElement('div')
                comment_list_item.className = 'comment_list_item'

                for (let k = 0; k < user1.obj[0].posts[i].comments.user3.length; k++) {
                    const comment_list_text = document.createElement('p')

                    comment_list_text.innerText = user1.obj[0].posts[i].comments.user3[k]

                    comment_list_item.appendChild(comment_list_text)
                }

                comment_list_block.appendChild(comment_list_item)


                document.querySelector('.comment_list').style.display = 'flex'
            }
            comment_user1()
            comment_user2()
            comment_user3()
            e.stopPropagation()

        })

        comments_avatar.addEventListener('click', (e) => {
            if (modal.style.display === 'none') {
                modal.style.display = 'flex'
                const avatar_p = document.createElement('p')
                avatar_p.innerText = 'X'
                comments_avatar.innerText = ''
                comments_avatar.appendChild(avatar_p)
            } else {
                modal.style.display = 'none'
                const avatar_p = document.createElement('p')
                avatar_p.innerText = '+'
                comments_avatar.innerText = ''
                comments_avatar.appendChild(avatar_p)
            }
            e.stopPropagation()
        })

        post.appendChild(comments)
        post.addEventListener('click', ()=>{
            full_author.innerText = 'user1  : '
            full_text.innerText = user1.obj[0].posts[i].text
            full.appendChild(full_author)
            full.appendChild(full_text)
            full.style.left = '50%'
        })
        full_closed.addEventListener('click', ()=>{
            full.style.left = '-50%'
        })

        posts.appendChild(post)

    }
}

if (user2.obj[0].posts.length) {
    for (let i = 0; i < user2.obj[0].posts.length; i++) {

        const post = document.createElement('div')
        post.className = 'post'

        const content = document.createElement('div')
        const comments = document.createElement('div')
        const author = document.createElement('p')
        author.className = 'author'
        author.innerText = 'user2'

        post.appendChild(author)

        content.className = 'content'
        comments.className = 'comments'

        const comments_avatar = document.createElement('div')
        comments_avatar.className = 'comments__avatar'

        const p = document.createElement('p')
        p.innerText = "+"
        comments_avatar.appendChild(p)

        const comments_p = document.createElement('p')
        comments_p.innerText = 'Коментарі'
        comments.appendChild(comments_avatar)
        comments.appendChild(comments_p)

        const content_p = document.createElement('p')
        content_p.innerText = user2.obj[0].posts[i].text
        content.appendChild(content_p)
        post.appendChild(content)

        const modal = document.createElement('div')
        modal.className = 'modal'

        const input = document.createElement('input')
        const button = document.createElement('button')

        button.innerText = '>'
        input.placeholder = 'Введіть коментар'
        modal.appendChild(input)
        modal.appendChild(button)
        comments.appendChild(modal)
        modal.style.display = 'none'
//-----
        input.addEventListener('click', (e)=>{
            e.stopPropagation()
        })

        button.addEventListener('click', (e) => {
            if (input.value !== '') {
                if (localStorage.getItem('user') === 'user1') {
                    user2.obj[0].posts[i].comments.user1.push(input.value)
                }
                if (localStorage.getItem('user') === 'user2') {
                    user2.obj[0].posts[i].comments.user2.push(input.value)
                }
                if (localStorage.getItem('user') === 'user3') {
                    user2.obj[0].posts[i].comments.user3.push(input.value)
                }

            }
            e.stopPropagation()
            localStorage.setItem('user2', JSON.stringify(user2.obj[0]))
        })

        comments.addEventListener('click', (e)=>{
            comment_list_block.innerText = ''
            const closed = document.createElement('div')
            const closed_p = document.createElement('p')
            closed_p.innerText = 'X'
            closed.appendChild(closed_p)
            closed.className = 'comment_list_closed'
            comment_list_block.appendChild(closed)
            closed.addEventListener('click', ()=>{
                comment_list.style.display = 'none'
            })
            const comment_user1 = ()=> {
                const comment_list_autor = document.createElement('h2')
                comment_list_autor.innerText = 'user1: '
                comment_list_block.appendChild(comment_list_autor)

                const comment_list_item = document.createElement('div')
                comment_list_item.className = 'comment_list_item'

                for (let k = 0; k < user2.obj[0].posts[i].comments.user1.length; k++) {
                    const comment_list_text = document.createElement('p')

                    comment_list_text.innerText = user2.obj[0].posts[i].comments.user1[k]

                    comment_list_item.appendChild(comment_list_text)
                }

                comment_list_block.appendChild(comment_list_item)


                document.querySelector('.comment_list').style.display = 'flex'
            }
            const comment_user2 = ()=> {
                const comment_list_autor = document.createElement('h2')
                comment_list_autor.innerText = 'user2: '
                comment_list_block.appendChild(comment_list_autor)

                const comment_list_item = document.createElement('div')
                comment_list_item.className = 'comment_list_item'

                for (let k = 0; k < user2.obj[0].posts[i].comments.user2.length; k++) {
                    const comment_list_text = document.createElement('p')

                    comment_list_text.innerText = user2.obj[0].posts[i].comments.user2[k]

                    comment_list_item.appendChild(comment_list_text)
                }

                comment_list_block.appendChild(comment_list_item)


                document.querySelector('.comment_list').style.display = 'flex'
            }
            const comment_user3 = ()=> {
                const comment_list_autor = document.createElement('h2')
                comment_list_autor.innerText = 'user3: '
                comment_list_block.appendChild(comment_list_autor)

                const comment_list_item = document.createElement('div')
                comment_list_item.className = 'comment_list_item'

                for (let k = 0; k < user2.obj[0].posts[i].comments.user3.length; k++) {
                    const comment_list_text = document.createElement('p')

                    comment_list_text.innerText = user2.obj[0].posts[i].comments.user3[k]

                    comment_list_item.appendChild(comment_list_text)
                }

                comment_list_block.appendChild(comment_list_item)


                document.querySelector('.comment_list').style.display = 'flex'
            }
            comment_user1()
            comment_user2()
            comment_user3()
            e.stopPropagation()

        })

        comments_avatar.addEventListener('click', (e) => {
            if (modal.style.display === 'none') {
                modal.style.display = 'flex'
                const avatar_p = document.createElement('p')
                avatar_p.innerText = 'X'
                comments_avatar.innerText = ''
                comments_avatar.appendChild(avatar_p)
            } else {
                modal.style.display = 'none'
                const avatar_p = document.createElement('p')
                avatar_p.innerText = '+'
                comments_avatar.innerText = ''
                comments_avatar.appendChild(avatar_p)
            }
            e.stopPropagation()
        })

        post.appendChild(comments)
        post.addEventListener('click', ()=>{
            full_author.innerText = 'user2: '
            full_text.innerText = user2.obj[0].posts[i].text
            full.appendChild(full_author)
            full.appendChild(full_text)
            full.style.left = '50%'
        })
        full_closed.addEventListener('click', ()=>{
            full.style.left = '-50%'
        })

        posts.appendChild(post)
    }
}

if (user3.obj[0].posts.length) {
    for (let i = 0; i < user3.obj[0].posts.length; i++) {

        const post = document.createElement('div')
        post.className = 'post'

        const content = document.createElement('div')
        const comments = document.createElement('div')
        const author = document.createElement('p')
        author.className = 'author'
        author.innerText = 'user3'

        post.appendChild(author)

        content.className = 'content'
        comments.className = 'comments'

        const comments_avatar = document.createElement('div')
        comments_avatar.className = 'comments__avatar'

        const p = document.createElement('p')
        p.innerText = '+'
        comments_avatar.appendChild(p)

        const comments_p = document.createElement('p')
        comments_p.innerText = comments_p.innerText = 'Коментарі'
        comments.appendChild(comments_avatar)
        comments.appendChild(comments_p)

        const content_p = document.createElement('p')
        content_p.innerText = user3.obj[0].posts[i].text
        content.appendChild(content_p)
        post.appendChild(content)

        const modal = document.createElement('div')
        modal.className = 'modal'

        const input = document.createElement('input')
        const button = document.createElement('button')

        button.innerText = '>'
        input.placeholder = 'Введіть коментар'
        modal.appendChild(input)
        modal.appendChild(button)
        comments.appendChild(modal)
        modal.style.display = 'none'
        //------
        input.addEventListener('click', (e)=>{
            e.stopPropagation()
        })

        button.addEventListener('click', (e) => {
            if (input.value !== '') {
                if (localStorage.getItem('user') === 'user1') {
                    user3.obj[0].posts[i].comments.user1.push(input.value)
                }
                if (localStorage.getItem('user') === 'user2') {
                    user3.obj[0].posts[i].comments.user2.push(input.value)
                }
                if (localStorage.getItem('user') === 'user3') {
                    user3.obj[0].posts[i].comments.user3.push(input.value)
                }

            }
            e.stopPropagation()
            localStorage.setItem('user3', JSON.stringify(user3.obj[0]))
        })

        comments.addEventListener('click', (e)=>{
            comment_list_block.innerText = ''
            const closed = document.createElement('div')
            const closed_p = document.createElement('p')
            closed_p.innerText = 'X'
            closed.appendChild(closed_p)
            closed.className = 'comment_list_closed'
            comment_list_block.appendChild(closed)
            closed.addEventListener('click', ()=>{
                comment_list.style.display = 'none'
            })
            const comment_user1 = ()=> {
                const comment_list_autor = document.createElement('h2')
                comment_list_autor.innerText = 'user1: '
                comment_list_block.appendChild(comment_list_autor)

                const comment_list_item = document.createElement('div')
                comment_list_item.className = 'comment_list_item'

                for (let k = 0; k < user3.obj[0].posts[i].comments.user1.length; k++) {
                    const comment_list_text = document.createElement('p')

                    comment_list_text.innerText = user3.obj[0].posts[i].comments.user1[k]

                    comment_list_item.appendChild(comment_list_text)
                }

                comment_list_block.appendChild(comment_list_item)


                document.querySelector('.comment_list').style.display = 'flex'
            }
            const comment_user2 = ()=> {
                const comment_list_autor = document.createElement('h2')
                comment_list_autor.innerText = 'user2: '
                comment_list_block.appendChild(comment_list_autor)

                const comment_list_item = document.createElement('div')
                comment_list_item.className = 'comment_list_item'

                for (let k = 0; k < user3.obj[0].posts[i].comments.user2.length; k++) {
                    const comment_list_text = document.createElement('p')

                    comment_list_text.innerText = user3.obj[0].posts[i].comments.user2[k]

                    comment_list_item.appendChild(comment_list_text)
                }

                comment_list_block.appendChild(comment_list_item)


                document.querySelector('.comment_list').style.display = 'flex'
            }
            const comment_user3 = ()=> {
                const comment_list_autor = document.createElement('h2')
                comment_list_autor.innerText = 'user3: '
                comment_list_block.appendChild(comment_list_autor)

                const comment_list_item = document.createElement('div')
                comment_list_item.className = 'comment_list_item'

                for (let k = 0; k < user3.obj[0].posts[i].comments.user3.length; k++) {
                    const comment_list_text = document.createElement('p')

                    comment_list_text.innerText = user3.obj[0].posts[i].comments.user3[k]

                    comment_list_item.appendChild(comment_list_text)
                }

                comment_list_block.appendChild(comment_list_item)


                document.querySelector('.comment_list').style.display = 'flex'
            }
            comment_user1()
            comment_user2()
            comment_user3()
            e.stopPropagation()
        })

        comments_avatar.addEventListener('click', (e) => {
            if (modal.style.display === 'none') {
                modal.style.display = 'flex'
                const avatar_p = document.createElement('p')
                avatar_p.innerText = 'X'
                comments_avatar.innerText = ''
                comments_avatar.appendChild(avatar_p)
            } else {
                modal.style.display = 'none'
                const avatar_p = document.createElement('p')
                avatar_p.innerText = '+'
                comments_avatar.innerText = ''
                comments_avatar.appendChild(avatar_p)
            }
            e.stopPropagation()
        })



        post.appendChild(comments)
        post.addEventListener('click', ()=>{
            full_author.innerText = 'user3: '
            full_text.innerText = user3.obj[0].posts[i].text
            full.appendChild(full_author)
            full.appendChild(full_text)
            full.style.left = '50%'
        })
        full_closed.addEventListener('click', ()=>{
            full.style.left = '-50%'
        })
        posts.appendChild(post)
    }
}


document.querySelector('.add').addEventListener('click', () => {
    document.querySelector('.post__add').style.display = 'flex'
})

document.querySelector('.post__add div').addEventListener('click', () => {
    document.querySelector('.post__add').style.display = 'none'
})

document.querySelector(".post__add [type= 'submit']").addEventListener('click', () => {
    const text = document.querySelector(".post__add [type= 'text']").value
    document.querySelector('.post__add').style.display = 'none'

    if (localStorage.getItem('user') === 'user1' && text.length !== 0) {
        user1.obj[0].posts[user1.obj[0].posts.length] = {
            comments: {
                user1: [' '],
                user2: [' '],
                user3: [' ']
            }, text: text
        }
        localStorage.setItem(localStorage.getItem('user').toString(), JSON.stringify(user1.obj[0]))
    } else if (localStorage.getItem('user') === 'user2' && text.length !== 0) {
        user2.obj[0].posts[user2.obj[0].posts.length] = {
            comments: {
                user1: [' '],
                user2: [' '],
                user3: [' ']
            }, text: text
        }
        localStorage.setItem(localStorage.getItem('user').toString(), JSON.stringify(user2.obj[0]))
    } else if (localStorage.getItem('user') === 'user3' && text.length !== 0) {
        user3.obj[0].posts[user3.obj[0].posts.length] = {
            comments: {
                user1: [' '],
                user2: [' '],
                user3: [' ']
            }, text: text
        }
        localStorage.setItem(localStorage.getItem('user').toString(), JSON.stringify(user3.obj[0]))
    }
})

if (!localStorage.getItem('user')) {
    window.location = '../index.html'
}

document.querySelector('body').appendChild(comment_list)

// ---------------------- //


document.querySelector('body').appendChild(full)
