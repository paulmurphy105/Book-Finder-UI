const recordVisit = (request) => {
    const url = new URL(request.url) 
    
    try {
        fetch(`${process.env.BACKEND_URL}visits`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ route: url.pathname, userAgent: request.headers.get('user-agent'), ipAddress: 'unknown', search: url.search })
        });  
    } catch (error) {
        console.error('Call to record visit failed')
        console.error(error) 
    }
      
}

module.exports = {
    recordVisit
}