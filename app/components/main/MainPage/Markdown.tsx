import React from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'

const markdown = '# Hi, *Pluto*! **My lovely Dog **'

createRoot(document.body).render(<Markdown>{markdown}</Markdown>)