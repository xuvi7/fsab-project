import React, { useEffect, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

//TODO: pull from database
const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'Start writing your journal here.' }],
    },
]

const App = () => {

    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')

    async function save(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                content,
            })
        })

        const data = await response.json()
        console.log(data)
    }

    const [editor] = useState(() => withReact(createEditor()))
    return (
        <Slate editor={editor} initialValue={initialValue}>
            <Editable />
            <div>
                <button onClick={save}>Save</button>
            </div>
        </Slate>
    )
}

export default App