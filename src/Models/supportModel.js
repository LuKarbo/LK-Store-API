const { collection, addDoc, getDocs, doc, getDoc, updateDoc } = require("firebase/firestore");
const db = require("../../config");

exports.createSupport = async (supportData) => {
    try {
        const docRef = await addDoc(collection(db, "support"), {
            userId: supportData.userId,
            consulta: supportData.consulta,
            email: supportData.email,
            fechaCreacion: new Date()
        });

        return { id: docRef.id, ...supportData, fechaCreacion: new Date() };
    } catch (error) {
        console.error("Error al crear soporte:", error);
        throw new Error(`Error al crear el soporte: ${error.message}`);
    }
};

exports.getAllSupport = async () => {
    try {
        const supportsRef = collection(db, "support");
        const snapshot = await getDocs(supportsRef);
        
        const supports = [];
        for (const doc of snapshot.docs) {
            supports.push({ id: doc.id, ...doc.data() });
        }
        
        return supports;
    } catch (error) {
        console.error("Error en getAllSupport:", error);
        throw new Error(`Error al obtener los soportes: ${error.message}`);
    }
};

exports.getSupportById = async (id) => {
    try {
        const docRef = doc(db, "support", id);
        const supportDoc = await getDoc(docRef);
        
        if (!supportDoc.exists()) {
            return null;
        }
        
        return { id: supportDoc.id, ...supportDoc.data() };
    } catch (error) {
        console.error("Error en getSupportById:", error);
        throw new Error(`Error al obtener el soporte: ${error.message}`);
    }
};

exports.replySupport = async (id, respuesta) => {
    try {
        const docRef = doc(db, "support", id);
        await updateDoc(docRef, {
            respuesta: respuesta,
            fechaRespuesta: new Date()
        });
    } catch (error) {
        console.error("Error en replySupport:", error);
        throw new Error(`Error al responder el soporte: ${error.message}`);
    }
};