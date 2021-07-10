import { dataBase } from '../Firebase/firebase';


export const callByCategory = (categoryId, setCervezas, setLoading)=>{
    const itemCollection = dataBase.collection("cervezas").where('category', '==', categoryId);
    itemCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
            console.log('No results!')
            return;
        }
        setCervezas(querySnapshot.docs.map(doc => { return { ...doc.data(), id: doc.id } }))
    }).catch((error) => {
        console.log("Error getting document:", error);
        return;
    }).finally(() => {
        setLoading(false)
    })
}