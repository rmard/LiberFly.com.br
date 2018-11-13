export const userHasRight = () => {
	switch(localStorage.issueType){
		case 'Atraso de vôo':
			return (localStorage.delay==='Mais de 4 horas' || (localStorage.lostAppointment!=='Não' && localStorage.lostAppointment!==undefined));
		case 'Cancelamento de vôo':
		case 'Não pude embarcar':
		case 'Problemas com bagagem':
			return true;
		case 'Outros problemas':
		default:
			return false;
	}
}

export const getDetailsFormatted = () => {
	let result = localStorage.issueType;
	result += '<br/>locationFrom: ' + localStorage.locationFrom + '<br/>locationTo: ' + localStorage.locationTo;
	switch(localStorage.issueType){
		case 'Atraso de vôo':
			result += 
			    '<br/>delay: ' + localStorage.delay +
			    '<br/>reason: ' + localStorage.reason +
			    '<br/>lostAppointment: ' + localStorage.lostAppointment;
			break;
		case 'Cancelamento de vôo':
			result += 
			    '<br/>whenItWasInformed: ' + localStorage.whenItWasInformed +
			    '<br/>reimbursementOffered: ' + localStorage.reimbursementOffered;
			break;
		case 'Não pude embarcar':
			result += 
			    '<br/>whenItWasInformed: ' + localStorage.whenItWasInformed +
			    '<br/>reimbursementOffered: ' + localStorage.reimbursementOffered;	
			break;
		case 'Problemas com bagagem':
			result += 
			    '<br/>wasYourLuggageReturned: ' + localStorage.wasYourLuggageReturned +
			    '<br/>didYouRegister: ' + localStorage.didYouRegister;
			break;
		case 'Outros problemas':
			result += 
			    '<br/>details: ' + localStorage.details;	
			break;	
		default:
			break;
	}
	return result;	
}