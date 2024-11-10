const { collection, addDoc, getDocs, doc, getDoc } = require("firebase/firestore");
const db = require("../../config");

exports.createMenu = async (menuData) => {
    try {
        const docRef = await addDoc(collection(db, "menu"), {
            discount: menuData.discount,
            drink: menuData.drink,
            fries: menuData.fries,
            hamburger: menuData.hamburger,
            isDiscounted: menuData.isDiscounted || false,
            price: menuData.price
        });
        return { id: docRef.id, ...menuData };
    } catch (error) {
        console.error("Error al crear menú:", error);
        throw new Error(`Error al crear el menú: ${error.message}`);
    }
}

exports.getAllMenus = async () => {
    try {
        console.log("Intentando obtener menús de la colección");
        const menusRef = collection(db, "menu");
        
        const snapshot = await getDocs(menusRef);
        console.log("Snapshot obtenido:", snapshot.size, "documentos encontrados");
        
        const menus = [];
        snapshot.forEach((doc) => {
            const menuData = doc.data();
            menus.push({
                id: doc.id,
                discount: menuData.discount,
                drink: menuData.drink,
                fries: menuData.fries,
                hamburger: menuData.hamburger,
                isDiscounted: menuData.isDiscounted,
                price: menuData.price
            });
        });
        
        return menus;
    } catch (error) {
        console.error("Error en getAllMenus:", error);
        throw new Error(`Error al obtener los menús: ${error.message}`);
    }
}

exports.getMenuById = async (id) => {
    try {
        const docRef = doc(db, "menu", id);
        const menuDoc = await getDoc(docRef);
        
        if (!menuDoc.exists()) {
            return null;
        }
        
        return { id: menuDoc.id, ...menuDoc.data() };
    } catch (error) {
        console.error("Error en getMenuById:", error);
        throw new Error(`Error al obtener el menú: ${error.message}`);
    }
}