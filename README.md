# NASA-Spring_API
This Spring Boot application provides an API endpoint to retrieve NASA's Astronomy Picture of the Day (APOD) using the NASA API. It allows users to fetch APOD data based on parameters such as date, start date, end date, count, and whether to include thumbnails.

# Table of Contents
1. Controllers
2. Models
3. Services
4. Main Application
5. Configuration

# Controllers
#NasaApodController

The controllers package contains classes responsible for handling incoming HTTP requests and defining the API endpoints.

    @Autowired
    private  NasaApodService nasaApodService;

    @GetMapping("/apod")
    public
    List<NasaApodResponse> getAPOD ( @RequestParam(required = false) String date,
                                     @RequestParam(required = false) String start_date,
                                     @RequestParam(required = false) String end_date,
                                     @RequestParam(required = false) Integer count,
                                     @RequestParam(required = false) Boolean thumbs ) {
        return nasaApodService.getAPOD(date, start_date, end_date, count, thumbs);
    }


# Models
#NasaAPODResponse

The models package includes classes that represent the data structures used in the application, such as APOD objects.

	// Constructors
	public APODResponse() {
	}

	// Getters and Setters public String getDate() { return date; }

	public void setDate(String date) {
		this.date = date;
	}

	public String getExplanation() {
		return explanation;
	}

	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMediaType() {
		return mediaType;
	}

	public void setMediaType(String mediaType) {
		this.mediaType = mediaType;
	}

	public String getThumbnailUrl() {
		return thumbnailUrl;
	}

	public void setThumbnailUrl(String thumbnailUrl) {
		this.thumbnailUrl = thumbnailUrl;
	}


# Services
#NasaApodService

The services package contains classes that handle the business logic of fetching APOD data from the NASA API and processing the requests.

    @Value("${nasa.apod.apiKey}")
    private String apiKey;  // You can use an application.properties or application.yml file for configuration.

    @Value("${nasa.apod.baseUrl}")
    private String baseUrl;

    private final RestTemplate restTemplate;

    public NasaApodService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public NasaApodResponse getApodByDate(String date) {
        String apiUrl = baseUrl + "/planetary/apod?api_key=" + apiKey + "&date=" + date;
        return restTemplate.getForObject(apiUrl, NasaApodResponse.class);
    }

    // Add other methods for different APOD retrieval options (start date, end date, count, etc.)

# Main Application
#SpringNasaApiApplication

The main application package includes the class with the `main` method to start the Spring Boot application.

	public static void main(String[] args) {
		SpringApplication.run(NasaApiSpringApplication.class, args);
	}

# Configuration
#Application.properties

The configuration package may contain classes related to configuring the Spring application, such as properties or security configurations.

nasa.api.key=sIIvSFCJdbdFzoHnjlDB1kZ3BdkhmeVac4rnEmwF

# Date
![Screenshot 2024-03-14 195528](https://github.com/manikanta9096/NASA-Spring_API/assets/157767934/26cbca51-7aba-4c73-8af3-1e94471ccf48)

# Start Date and End Date
![Screenshot 2024-03-14 201903](https://github.com/manikanta9096/NASA-Spring_API/assets/157767934/5ee7746c-3e7a-48f2-ae38-fcaa7cbab5b6)

# Count
![Screenshot 2024-03-14 201140](https://github.com/manikanta9096/NASA-Spring_API/assets/157767934/6e0dff32-1eca-440b-98f7-01c2ebb56fc3)



