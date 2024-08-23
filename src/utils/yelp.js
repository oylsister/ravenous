const apiKey = "Yn7hS5p722i8vrfGjL45Uyg44-MHKpYimkHg9g-nRvDR8zXHji-3Ls9URfQ1qje1h5-JTiEe5zp2Dzce1p5ZbuEljl7mvL_0J3tQjYin-6CmYGWo3EsbpuLnD5fIZnYx";
const yelpBaseUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";

function Yelp_getBusiness(term, location, sortBy)
{
    const Endpoint = '/businesses/search'
    const requestParams = `?term=${encodeURIComponent(term.trim())}&location=${encodeURIComponent(location.trim())}&sort_by=${encodeURIComponent(sortBy.trim())}`;
    const urlToFetch = `${yelpBaseUrl}${Endpoint}${requestParams}`;

    console.log(urlToFetch);

    try 
    {   
        const response = fetch(urlToFetch, {
            headers: {
                Authorization: `Bearer ${apiKey}`}
        });

        if(response.ok) {
            const jsonReponse = response.json();
            const businesses = jsonReponse.businesses;

            console.log(`result: ${businesses}`);

            if(businesses)
            {
                return businesses.map(business => ({
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.address1,
                    city: business.city,
                    state: business.state,
                    zipCode: business.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        }
    } 

    catch (error) {
        console.log(error);
    }
}

export default Yelp_getBusiness;