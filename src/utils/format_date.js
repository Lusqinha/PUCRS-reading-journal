// converte a data para o formato dd/mm/yyyy

export function formatDate(date) {
    const string_date = date.toString();
    return string_date.split('-').reverse().join('/');
}