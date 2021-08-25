import {db} from "../firebase";

const useSubscribeCollection = (collection, action) => {
    const unsubscribe = db.collection(collection)
        .onSnapshot(async (snapshot) => {
            const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

            action(data);
        });

    return unsubscribe;
}

export default useSubscribeCollection;