export const addToCart = async (req, res) => {
    try {
        const { productId } = req.body;           
        const user = req.user;
        const existingItem = user.cartItems.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        }else{
            user.cartItems.push(productId);
        }

        await user.save();
        res.json(user.cartItems);
    } catch (error) {
        console.log("Error in addToCart controller ", error.message);
        res.status(500).json({ message: "Server error ", error: error.message});
        
        
    }
}

export const removeAllFromCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const user = req.user;
        
        if (!productId) {
            user.cartItems = [];
        }else{
           user.cartItems = await user.cartItems.filter((item) => item.id !== productId);
        }

        await user.save();
        res.json(user.cartItems);
    } catch (error) {
        console.log("Error in removeAllFromCart controller ", error.message);

        res.status(500).json({ message: "Server error ", error: error.message});
        
    }
}
export const updateQuantity = async (req, res) => {
    
}
