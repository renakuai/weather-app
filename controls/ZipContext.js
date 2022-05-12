import { createContext, useReducer } from 'react';

export const ZipContext = createContext(null);
export const ZipDispatchContext = createContext(null);

export function ZipProvider({ children }) {
  const [zip, dispatch] = useReducer(
    zipReducer, 
    initialZip
  )

  return (
    <ZipContext.Provider value={zip}>
      <ZipDispatchContext.Provider value={dispatch}>
        {children}
      </ZipDispatchContext.Provider>
    </ZipContext.Provider>
  )
}

function zipReducer(zip, action) {
  switch (action.type) {
    case 'searched': {
      return action.zip
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

const initialZip = '75010';