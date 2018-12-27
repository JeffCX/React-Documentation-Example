import React from "react"

const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };

  const ThemeContext = React.createContext(
      themes.dark
  )

  class ThemeButton extends React.Component{
      static contextType = ThemeContext
      render(){
          let props = this.props 
          let theme = this.context 
          return <button style = {{background:theme.background}}>Gan</button>
      }
  }

  export default ThemeButton