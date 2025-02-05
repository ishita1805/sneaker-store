const url = 'https://script.google.com/macros/s/AKfycbxOl0Bg7izkM7He4U5QfttY7zbu_TlR_R2oChMBzkJbRM4Q7x5lU2o_kofWKgb4KRP4/exec'


export const subscribeToList = async (email: string) => {
    if (!email ) return;
    return fetch( `${url}?path=Sheet2&action=write&Unique=true&Email=${email}`)
}


export const customisationRequests = async (email: string, number: string, desc: string) => {
    if (!email || !number || !desc) return;
    return fetch( `${url}?path=Sheet1&action=write&Unique=false&Name=${email}&Contact=${number}&Description=${desc}`)
}
