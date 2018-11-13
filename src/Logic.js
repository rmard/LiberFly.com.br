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