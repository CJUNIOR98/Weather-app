const reporWebVitals = onPerEntry => {
    if(onPerEntry && onPerEntry instanceof Function){
        import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
            getCLS(onPerEntry);
            getFID(onPerEntry);
            getFCP(onPerEntry);
            getLCP(onPerEntry);
            getTTFB(onPerEntry);
        });
    }
};

export default reporWebVitals;