
export const url = 'data.json';


//Read And Show Comments
export const getComments = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok){
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json();
        return data.comments;
    } catch (error) {
        console.log(error);
        return [];
    }
}
