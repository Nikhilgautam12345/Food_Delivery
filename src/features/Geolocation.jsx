    const Geolocation = async () => {
        try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        return { lat, long };
        } catch (error) {
        console.error("Error getting geolocation:", error);
        return { lat: 0, long: 0 }; // Default values or handle error
        }
    };
    
    export default Geolocation;
    