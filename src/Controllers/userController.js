const userModel = require('../Models/userModel');

exports.register = async (req, res) => {
    const { id, name, email, password } = req.body;
    if (!id || !email || !name || !password) {
        return res.status(400).json({ success: false, message: 'Faltan campos requeridos' });
    }

    try {
        const result = await userModel.register(id, name, email, password);
        res.json({ success: true, result });
    } catch (error) {
        console.error("Error completo en register:", error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al registrar el usuario',
            error: error.message 
        });
    }
};

exports.getAll = async (req, res) => {
    try {
        console.log("Iniciando getAll");
        const users = await userModel.getAllUsers();
        console.log("Usuarios obtenidos:", users);
        res.json({ success: true, users });
    } catch (error) {
        console.error("Error completo en getAll:", error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al obtener los usuarios',
            error: error.message 
        });
    }
};

exports.getData = async (req, res) => {
    const { ID } = req.params;
    try {
        const user = await userModel.getUserById(ID);
        if (!user) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
        }
        res.json({ success: true, user });
    } catch (error) {
        console.error("Error completo en getData:", error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al obtener el usuario',
            error: error.message 
        });
    }
};

exports.edit = async (req, res) => {
    const { id } = req.params;
    const { name, phoneNumber, address } = req.body;

    if (!name) {
        return res.status(400).json({ 
            success: false, 
            message: 'El nombre es un campo requerido' 
        });
    }

    try {
        const existingUser = await userModel.getUserById(id);
        if (!existingUser) {
            return res.status(404).json({ 
                success: false, 
                message: 'Usuario no encontrado' 
            });
        }

        const updatedUser = await userModel.updateUser(id, {
            name,
            phoneNumber,
            address
        });

        res.json({ 
            success: true, 
            message: 'Usuario actualizado correctamente',
            user: updatedUser 
        });

    } catch (error) {
        console.error("Error completo en edit:", error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al actualizar el usuario',
            error: error.message 
        });
    }
};

exports.changeRol = async (req, res) => {
    const { id } = req.params;
    const { isAdmin_val } = req.body;

    try {
        const existingUser = await userModel.getUserById(id);
        if (!existingUser) {
            return res.status(404).json({ 
                success: false, 
                message: 'Usuario no encontrado' 
            });
        }

        const updatedUser = await userModel.changeRol(id,isAdmin_val);

        res.json({ 
            success: true, 
            message: 'Usuario actualizado correctamente',
            user: updatedUser 
        });

    } catch (error) {
        console.error("Error completo en edit:", error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al actualizar el usuario',
            error: error.message 
        });
    }
};