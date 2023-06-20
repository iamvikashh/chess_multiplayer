import { createContext } from 'react'

export const configContext = createContext({
    didRedirect: false, 
    playerDidRedirect: () => {}, 
    playerDidNotRedirect: () => {}
})