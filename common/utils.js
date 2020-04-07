export default function findById(passedarray, id) {
    // passedarray.forEach(element => {
    //     if (element.id === id) {
    //         return element;
    //     } else {
    //         return null;
    //     }
    // });
    for (let i = 0; i < passedarray.length; i++) {
        const item = passedarray[i];

        // check the id against item.id
        if (item.id === id) {
            return item;
            
        }
    }
    
    return null;
}