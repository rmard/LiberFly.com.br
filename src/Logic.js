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

export const compensationValue = () => {
	if(!userHasRight)
		return 0;
	let baseValue;
	let sum = 0;
	switch(localStorage.issueType){
		case 'Atraso de vôo':
		case 'Cancelamento de vôo':
			baseValue = 3500;
			break;
		case 'Não pude embarcar':
			baseValue = [4000, 8000];
			break;		
		case 'Problemas com bagagem':
			switch(localStorage.wasYourLuggageReturned) {
				case 'Não, foi perdida definitivamente':
					baseValue = [5000, 10000];
					break;	
				case 'Sim, mas com avaria(s)':
					baseValue = [2000];
					break;	
				case 'Sim, mas com atraso':
					baseValue = [2000, 10000];
					break;	
				default:
					baseValue = [2000, 10000];
					break;																				
			}
			break;
		default:
			return 0;
	}	
	if(localStorage.thirdPartySeller==='Sim') {
		sum = 2000;
	}
	if(Array.isArray(baseValue))
		return 'R$'+(baseValue[0]+sum).toLocaleString() + ' a R$' + (baseValue[1]+sum).toLocaleString();
	else
		return 'R$'+(baseValue+sum).toLocaleString();	
}

export const getDetailsFormatted = () => {
	let result = localStorage.issueType;
	result += '<br/>locationFrom: ' + localStorage.locationFrom + '<br/>locationTo: ' + localStorage.locationTo;
	result += '<br/>thirdPartySeller: ' + localStorage.thirdPartySeller;
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