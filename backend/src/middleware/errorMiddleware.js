const errorMiddleware = (err, req, res, next) => {
    const candidateStatusCode = Number(err.statusCode || err.status);
    const statusCode = Number.isInteger(candidateStatusCode)
        && candidateStatusCode >= 400
        && candidateStatusCode <= 599
        ? candidateStatusCode
        : 500;

    if (statusCode === 500) {
        console.error(err);
    }

    res.status(statusCode).json({
        success: false,
        message: statusCode < 500 && err.message
            ? err.message
            : "Internal Server Error"
    });
};

module.exports = errorMiddleware;
