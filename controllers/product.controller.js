const { getProductsService, createProductService, updateProductService } = require("../services/product.services");

exports.getProducts = async (req, res, next) => {
    try {
        const products = await getProductsService();
        res.status(200).json({
            status: 'success',
            data: products
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Can't get the data",
            error: error.message,
        });
    }
};



exports.createProduct = async (req, res, next) => {
    try {
        const result = await createProductService(req.body);
        result.logger();

        res.status(200).json({
            status: 'success',
            message: 'Data inserted successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not inserted',
            error: error.message
        });
    }
};


exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateProductService(id, req.body);
        res.status(200).json({
            status: 'success',
            message: "Successfully updated the product"
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Failed to update product',
            error: error.message
        });
    }
};