import React from 'react'
import {isMobile} from 'react-device-detect'

export default () => (
	<a href={`https://${isMobile?'api':'web'}.whatsapp.com/send?phone=+552799635-8409&text=Olá! Tenho a seguinte dúvida: `}
		target="_blank" 
      	style={{padding: '0px'}}
      	className='btn btn-flat btn-large grey lighten-2 grey-text text-darken-2 waves-effect waves-light btn-chat'>
      	<i className="material-icons left">live_help</i> 
      	TIRE DÚVIDAS COM UM ATENDENTE
    </a> 
);