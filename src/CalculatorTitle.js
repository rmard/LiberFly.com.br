import React from 'react'

class CalculatorTitle extends React.PureComponent {
	render = () => (
    <div className="title-wrapper">
      <i className="material-icons">airplanemode_active</i>
      <h1 className="title-line">
        Problemas com seu vôo?
      </h1>
      <h2 className="title-line">
        Calcule sua compensação.
      </h2>
    </div>
  )
}

export default CalculatorTitle        